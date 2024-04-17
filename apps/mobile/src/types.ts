export type Product = {
  _id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images?: string[];
  sizes: number[];
};

export type CartItem = {
  product: Pick<Product, '_id' | 'name' | 'price' | 'image'>;
  size: number;
  quantity: number;
};

export type Order = {
  items: string[];
  total: number;
  referenceNumber: string;
  deliveryFee: number;
  subtotal: number;
};
