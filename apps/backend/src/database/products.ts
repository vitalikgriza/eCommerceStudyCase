import { ObjectId } from 'mongodb';
import { products } from './db';

const getAllProducts = async () => {
  return products().find().toArray();
};

const getProductById = async (id: string) => {
  return products().findOne({ _id: new ObjectId(id) });
};

export {
  getAllProducts,
  getProductById,
};
