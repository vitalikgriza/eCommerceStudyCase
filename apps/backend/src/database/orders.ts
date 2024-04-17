import { orders } from './db';

const getOrder = async (ref: string) => {
  return orders().findOne({ referenceNumber: ref });
}

const createOrder = async (order: any) => {
  const result = await orders().insertOne(order);
  if (!result) {
    throw new Error('Failed to create order');
  }
  return { ...order, _id: result.insertedId, ref: (Math.random() + 1).toString(36).substring(7) };
}

export { getOrder, createOrder };
