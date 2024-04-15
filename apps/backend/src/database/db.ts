import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI || '');

const getDB = () => {
  const db= client.db('ecommerce');
  const products = db.collection('products');
  const orders = db.collection('orders');
  return { products, orders };
}



export { getDB };
