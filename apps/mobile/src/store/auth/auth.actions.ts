import { createAsyncThunk, Dispatch } from '@reduxjs/toolkit';

import { authService } from '@/auth/AuthService';
import { setToken } from '@/store/auth/auth.slice';

type LoginWithCredentials = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk<void, LoginWithCredentials>(
  'auth/login',
  async ({ email, password }, { dispatch }) => {
    // const data = await dispatch(api.endpoints?.login.initiate({ email, password })).unwrap();
    const data = 'fake token';
    await authService.setSession('token');
    dispatch(setToken({ token: data }));
  },
);

export const logoutAction = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  dispatch(setToken({ token: null }));
  await authService.setSession(null);
});
