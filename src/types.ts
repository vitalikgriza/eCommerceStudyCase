export type Product = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  images?: string[];
  sizes: number[];
};
