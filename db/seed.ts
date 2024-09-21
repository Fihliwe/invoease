import db from './mongodb';
import { customers, invoices, revenue, users } from './schema';

const main = async () => {
  try {
    const customersCollection = db.collection(customers.collection);
    const usersCollection = db.collection(users.collection);
    const invoicesCollection = db.collection(invoices.collection);
    const revenueCollection = db.collection(revenue.collection);

    await customersCollection.deleteMany({});
    await usersCollection.deleteMany({});
    await invoicesCollection.deleteMany({});
    await revenueCollection.deleteMany({});

    await usersCollection.insertMany(users);
    await customersCollection.insertMany(customers);
    await invoicesCollection.insertMany(invoices);
    await revenueCollection.insertMany(revenue);

    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed database:', error);
    process.exit(1);
  }
};

main();
