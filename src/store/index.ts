import { configureStore } from '@reduxjs/toolkit';

import { shoppingCartReducer } from '@/store/cart/cart.slice';
import { productsReducer } from '@/store/products/products.slice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
