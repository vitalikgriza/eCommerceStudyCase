import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CreateOrder } from '@/api/models/CreateOrder';
import { Product } from '@/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.EXPO_PUBLIC_APP_URL }),
  endpoints: build => ({
    getProducts: build.query<Product[], void>({
      query: () => 'products',
      transformResponse: (response: { data: Product[] }, meta, arg) => response.data,
    }),
    getProduct: build.query<Product, string>({
      query: (id: string) => `products/${id}`,
      transformResponse: (response: { data: Product }, meta, arg) => response.data,
    }),
    createOrder: build.mutation<string, CreateOrder>({
      query: newOrder => {
        return {
          url: 'orders',
          method: 'POST',
          body: newOrder,
        };
      },
      transformResponse: (response: { data: string }, meta, arg) => response.data,
    }),
    getOrder: build.query<void, string>({
      query: id => `orders/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useGetProductQuery, useCreateOrderMutation, useGetOrderQuery } =
  api;
