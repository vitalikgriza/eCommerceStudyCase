import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type AuthSliceState = {
  token: string | null;
};

export const {
  reducer: AuthReducer,
  actions: { setToken },
} = createSlice({
  name: 'auth',
  initialState: { token: null } as AuthSliceState,
  reducers: {
    setToken: (state, { payload: { token } }: PayloadAction<{ token: string | null }>) => {
      state.token = token;
    },
  },
});
