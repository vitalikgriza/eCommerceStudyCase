import { orders } from './db';
import {Order} from "../types";

const getUserOrders = async (userId: string) => {
  return orders().find({ userId }).toArray();
}

const createOrder = async (order: Order) => {
  const result = await orders().insertOne(order);
  if (!result) {
    throw new Error('Failed to create order');
  }
  return { ...order, _id: result.insertedId, ref: (Math.random() + 1).toString(36).substring(7) };
}

export { getUserOrders, createOrder };
