export const customers = {
  collection: 'customers',
  schema: {
    _id: 'objectId',
    name: 'string',
    email: 'string',
    image_url: 'string',
  },
};

export const revenue = {
  collection: 'revenue',
  schema: {
    month: 'string',
    revenue: 'number',
  },
};

export const users = {
  collection: 'users',
  schema: {
    _id: 'objectId',
    name: 'string',
    email: 'string',
    password: 'string',
  },
};

export const invoices = {
  collection: 'invoices',
  schema: {
    _id: 'objectId',
    customer_id: 'objectId',
    amount: 'number',
    status: 'string',
    date: 'date',
  },
};
