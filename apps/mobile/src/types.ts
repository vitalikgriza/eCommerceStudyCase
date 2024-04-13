export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images?: string[];
  sizes: number[];
};

export type CartItem = {
  product: Pick<Product, 'id' | 'name' | 'price' | 'image'>;
  size: number;
  quantity: number;
};
