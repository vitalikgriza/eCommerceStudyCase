const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MONGODB_URI);

const db = client.db('ecommerce');
const products = db.collection('products');

module.exports = {
  products,
}
