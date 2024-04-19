import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from '@/api';
import { authService } from '@/auth/AuthService';
import { setToken } from '@/store/auth/auth.slice';

type LoginWithCredentials = {
  email: string;
  password: string;
};

export const loginAction = createAsyncThunk<void, LoginWithCredentials>(
  'auth/login',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const { access_token } = await dispatch(
        api.endpoints?.login.initiate({ email, password }),
      ).unwrap();
      if (!access_token) {
        return rejectWithValue('Login error');
      }
      await authService.setSession(access_token);
      dispatch(setToken({ token: access_token }));
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const registerAction = createAsyncThunk<void, LoginWithCredentials>(
  'auth/register',
  async ({ email, password }, { dispatch, rejectWithValue }) => {
    try {
      const { access_token } = await dispatch(
        api.endpoints?.register.initiate({ email, password }),
      ).unwrap();
      if (!access_token) {
        return rejectWithValue('Register error');
      }
      await authService.setSession(access_token);
      dispatch(setToken({ token: access_token }));
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const logoutAction = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  dispatch(setToken({ token: null }));
  await authService.setSession(null);
});
