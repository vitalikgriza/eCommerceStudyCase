import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import products from '@/data/products';
import { Product } from '@/types';

type InitialState = {
  products: Product[];
  selectedProduct: Product | undefined;
};

const initialState: InitialState = {
  products,
  selectedProduct: undefined,
};

export const {
  reducer: productsReducer,
  actions: { setSelectedProduct },
} = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<string>) => {
      state.selectedProduct = state.products.find(product => product.id === action.payload);
    },
  },
});
