const { ObjectId } = require('mongodb');
const collections = require('./db');

const getAllProducts = async () => {
  return await collections.products.find().toArray();
};

const getProductById = async (id: string) => {
  return await collections.products.findOne({ _id: new ObjectId() });
};

module.exports = {
  getAllProducts,
  getProductById,
};
