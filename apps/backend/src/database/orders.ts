import { getDB } from './db';


const getOrder = async (ref: string) => {
  return getDB().orders.findOne({ ref });
}

const createOrder = async (order: any) => {
  const result = await getDB().orders.insertOne(order);
  if (!result) {
    throw new Error('Failed to create order');
  }
  return { ...order, _id: result.insertedId };
}

export { getOrder, createOrder };
