import { CartItem } from '@/types';

export interface CreateOrder {
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  total: number;
}
