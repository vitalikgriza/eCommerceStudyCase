import { ObjectId } from 'mongodb';
import { getDB } from './db';

const getAllProducts = async () => {
  return getDB().products.find().toArray();
};

const getProductById = async (id: string) => {
  return getDB().products.findOne({ _id: new ObjectId() });
};

export {
  getAllProducts,
  getProductById,
};
