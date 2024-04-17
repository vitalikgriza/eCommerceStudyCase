import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { CreateOrder } from '@/api/models/CreateOrder';
import { RootState } from '@/store';
import { Product } from '@/types';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.EXPO_PUBLIC_APP_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: build => ({
    login: build.mutation<string, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
      transformResponse: (response: { data: string }, meta, arg) => response.data,
    }),
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
          url: 'orders/createOrder',
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
