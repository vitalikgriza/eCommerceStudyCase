import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import cart from '@/data/cart';
import { CartItem, Product } from '@/types';

type CartSliceState = {
  items: CartItem[];
  deliveryFee: number;
  freeDeliveryFrom: number;
};

const initialState: CartSliceState = {
  items: cart,
  deliveryFee: 0,
  freeDeliveryFrom: 200,
};

export const {
  reducer: shoppingCartReducer,
  actions: { addCartItem, changeQuantity },
} = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<{ product: Product }>) => {
      const { product } = action.payload;
      const cartItem = state.items.find(item => item.product.id === product.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        state.items.push({ product, size: 0, quantity: 1 });
      }
    },
    changeQuantity: (state, action: PayloadAction<{ id: string; amount: number }>) => {
      const { id, amount } = action.payload;
      const cartItem = state.items.find(item => item.product.id === id);
      if (cartItem) {
        const value = cartItem.quantity + amount;
        if (value > 0) {
          cartItem.quantity = value;
        } else {
          state.items = state.items.filter(item => item.product.id !== id);
        }
      }
    },
  },
});
