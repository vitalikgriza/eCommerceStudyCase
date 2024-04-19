import { type BaseQueryResult, QueryReturnValue } from '@reduxjs/toolkit/dist/query/baseQueryTypes';
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';

import { CreateOrder } from '@/api/models/CreateOrder';
import { RootState } from '@/store';
import { Order, Product } from '@/types';

const bq = fetchBaseQuery({
  baseUrl: process.env.EXPO_PUBLIC_APP_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;

    if (token) {
      headers.set('Authorization', token);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery: async (...args) => {
    const result = await bq(...args);
    if (result.error) {
      return {
        ...result,
        error: result.error.data || result.error,
      } as QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>;
    }
    if (result.data) {
      return {
        ...result,
        // @ts-ignore
        data: result.data.data || result.data,
      } as QueryReturnValue<unknown, FetchBaseQueryError, FetchBaseQueryMeta>;
    }
    return result;
  },
  tagTypes: ['Product', 'Order'],
  endpoints: build => ({
    login: build.mutation<{ access_token: string }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: build.mutation<{ access_token: string }, { email: string; password: string }>({
      query: ({ email, password }) => ({
        url: 'auth/register',
        method: 'POST',
        body: { email, password },
      }),
    }),
    getProducts: build.query<Product[], void>({
      query: () => 'products',
      providesTags: ['Product'],
    }),
    getProduct: build.query<Product, string>({
      query: (id: string) => `products/${id}`,
    }),
    createOrder: build.mutation<string, CreateOrder>({
      query: newOrder => {
        return {
          url: 'orders/createOrder',
          method: 'POST',
          body: newOrder,
        };
      },
      invalidatesTags: ['Order'],
    }),
    getUserOrders: build.query<Order[], void>({
      query: () => 'orders',
      providesTags: ['Order'],
    }),
    createPaymentIntent: build.mutation<string, { amount: number }>({
      query: ({ amount }) => ({
        url: 'payments/intent',
        method: 'POST',
        body: { amount },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useGetProductsQuery,
  useGetProductQuery,
  useCreateOrderMutation,
  useGetUserOrdersQuery,
  useCreatePaymentIntentMutation,
} = api;
