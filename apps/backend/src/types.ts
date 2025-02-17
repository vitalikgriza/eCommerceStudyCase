import { Response } from 'express';

export interface User {
  name: string;
  email?: string;
  password: string;
}

export type IResponse<D = void> = Response<{
  status: "FAILED" | "OK";
  data?: D;
  error?: string;
}>;

export type Product = {
  name: string;
  price: number;
  description?: string;
  image?: string;
  images?: string[];
  sizes: number[];
}

export type Order = {
  items: {
    product: Pick<Product, 'name' | 'price' | 'image'> & { _id: string };
    size: number;
    quantity: number;
  }[];
  userId: string;
  total: number;
  referenceNumber: string;
  deliveryFee: number;
  subtotal: number;
}
