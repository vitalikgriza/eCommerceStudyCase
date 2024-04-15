import { Product } from '@/types';

export interface CreateOrder {
  items: Product['_id'][];
  subtotal: number;
  deliveryFee: number;
  total: number;
}
