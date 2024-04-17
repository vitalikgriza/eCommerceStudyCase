import {Collection, MongoClient} from 'mongodb';
import {Order, Product, User} from "../types";

const client = new MongoClient(process.env.MONGODB_URI || '');
const db= client.db('ecommerce');

export const users = (): Collection<User> => db.collection('users');
export const products = (): Collection<Product> => db.collection('products');
export const orders = (): Collection<Order> => db.collection('orders');

