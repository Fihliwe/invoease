'use server'

import { MongoClient, ObjectId } from 'mongodb';
import { formatCurrency } from '../utils';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { ITEMS_PER_PAGE } from '../constants';
import { InvoiceForm } from '@/types';

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('your_database_name'); // Replace with your database name
const customersCollection = db.collection('customers');
const invoicesCollection = db.collection('invoices');
const revenueCollection = db.collection('revenue');


export async function fetchCardData() {
  try {
    const [invoiceCount, customerCount, invoiceStatus] = await Promise.all([
      invoicesCollection.countDocuments(),
      customersCollection.countDocuments(),
      invoicesCollection.aggregate([
        {
          $group: {
            _id: null,
            paid: {
              $sum: {
                $cond: [{ $eq: ['$status', 'paid'] }, '$amount', 0],
              },
            },
            pending: {
              $sum: {
                $cond: [{ $eq: ['$status', 'pending'] }, '$amount', 0],
              },
            },
          },
        },
      ]).toArray(),
    ]);

    const totalPaidInvoices = formatCurrency(invoiceStatus[0]?.paid || 0);
    const totalPendingInvoices = formatCurrency(invoiceStatus[0]?.pending || 0);

    return {
      numberOfInvoices: invoiceCount,
      numberOfCustomers: customerCount,
      totalPaidInvoices,
      totalPendingInvoices,
    };
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch card data.');
  }
}


export async function fetchRevenue() {
  try {
    const data = await db.select().from(revenue)
    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch the revenues.')
  }
}
export async function fetchLatestInvoices() {
  try {
    const data = await invoicesCollection.aggregate([
      {
        $lookup: {
          from: 'customers',
          localField: 'customer_id',
          foreignField: '_id',
          as: 'customer',
        },
      },
      { $unwind: '$customer' },
      { $sort: { date: -1 } },
      { $limit: 5 },
      {
        $project: {
          amount: 1,
          'customer.name': 1,
          'customer.image_url': 1,
          'customer.email': 1,
        },
      },
    ]).toArray();

    return data.map((invoice) => ({
      ...invoice,
      amount: formatCurrency(invoice.amount),
    }));
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the latest invoices.');
  }
}


export async function deleteInvoice(id: string) {
  try {
    await invoicesCollection.deleteOne({ _id: new ObjectId(id) });
    revalidatePath('/dashboard/invoices');
    return { message: 'Deleted Invoice' };
  } catch (error) {
    return { message: 'Database Error: Failed to Delete Invoice.' };
  }
}


export async function fetchFilteredInvoices(
  query: string,
  currentPage: number
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE
  try {
    const data = await db
      .select({
        id: invoices.id,
        amount: invoices.amount,
        name: customers.name,
        email: customers.email,
        image_url: customers.image_url,
        status: invoices.status,
        date: invoices.date,
      })
      .from(invoices)
      .innerJoin(customers, eq(invoices.customer_id, customers.id))
      .where(
        or(
          ilike(customers.name, sql`${`%${query}%`}`),
          ilike(customers.email, sql`${`%${query}%`}`),
          ilike(invoices.status, sql`${`%${query}%`}`)
        )
      )
      .orderBy(desc(invoices.date))
      .limit(ITEMS_PER_PAGE)
      .offset(offset)

    return data
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch invoices.')
  }
}

export async function fetchInvoicesPages(query: string) {
  try {
    const data = await db
      .select({
        count: count(),
      })
      .from(invoices)
      .innerJoin(customers, eq(invoices.customer_id, customers.id))
      .where(
        or(
          ilike(customers.name, sql`${`%${query}%`}`),
          ilike(customers.email, sql`${`%${query}%`}`),
          ilike(invoices.status, sql`${`%${query}%`}`)
        )
      )
    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE)
    return totalPages
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch total number of invoices.')
  }
}

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
})
const CreateInvoice = FormSchema.omit({ id: true, date: true })
const UpdateInvoice = FormSchema.omit({ date: true, id: true })

export type State = {
  errors?: {
    customerId?: string[]
    amount?: string[]
    status?: string[]
  }
  message?: string | null
}

export async function createInvoice(prevState: State, formData: FormData) {
  // Validate form fields using Zod
  const validatedFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  })

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.',
    }
  }

  // Prepare data for insertion into the database
  const { customerId, amount, status } = validatedFields.data
  const amountInCents = amount * 100
  const date = new Date().toISOString().split('T')[0]

  // Insert data into the database
  try {
    await db.insert(invoices).values({
      customer_id: customerId,
      amount: amountInCents,
      status,
      date,
    })
  } catch (error) {
    // If a database error occurs, return a more specific error.
    return {
      message: 'Database Error: Failed to Create Invoice.',
    }
  }
  // Revalidate the cache for the invoices page and redirect the user.
  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function updateInvoice(
  id: string,
  prevState: State,
  formData: FormData
) {
  const validatedFields = UpdateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Update Invoice.',
    }
  }

  const { customerId, amount, status } = validatedFields.data
  const amountInCents = amount * 100

  try {
    await db
      .update(invoices)
      .set({
        customer_id: customerId,
        amount: amountInCents,
        status,
      })
      .where(eq(invoices.id, id))
  } catch (error) {
    return { message: 'Database Error: Failed to Update Invoice.' }
  }
  revalidatePath('/dashboard/invoices')
  redirect('/dashboard/invoices')
}

export async function fetchInvoiceById(id: string) {
  try {
    const data = await db
      .select({
        id: invoices.id,
        customer_id: invoices.customer_id,
        amount: invoices.amount,
        status: invoices.status,
        date: invoices.date,
      })
      .from(invoices)
      .where(eq(invoices.id, id))

    const invoice = data.map((invoice) => ({
      ...invoice,
      // Convert amount from cents to dollars
      status: invoice.status === 'paid' ? 'paid' : 'pending',
      amount: invoice.amount / 100,
    }))

    return invoice[0] as InvoiceForm
  } catch (error) {
    console.error('Database Error:', error)
    throw new Error('Failed to fetch invoice.')
  }
}
