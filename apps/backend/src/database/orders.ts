import { orders } from './db';
import {Order} from "../types";

const getUserOrders = async (ref: string, userId: string) => {
  return orders().findOne({ referenceNumber: ref, userId });
}

const createOrder = async (order: Order) => {
  const result = await orders().insertOne(order);
  if (!result) {
    throw new Error('Failed to create order');
  }
  return { ...order, _id: result.insertedId, ref: (Math.random() + 1).toString(36).substring(7) };
}

export { getUserOrders, createOrder };
