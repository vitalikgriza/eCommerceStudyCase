import { configureStore } from '@reduxjs/toolkit';

import { AuthReducer } from './auth/auth.slice';

import { api } from '@/api';
import { shoppingCartReducer } from '@/store/cart/cart.slice';

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    api: api.reducer,
    auth: AuthReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
