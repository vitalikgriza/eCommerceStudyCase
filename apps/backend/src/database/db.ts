import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || '');
const db= client.db('ecommerce');

export const users = () => db.collection('users');
export const products = () => db.collection('products');
export const orders = () => db.collection('orders');

