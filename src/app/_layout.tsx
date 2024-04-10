import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(main)" />
        <Stack.Screen name="sign-in" />
      </Stack>
    </Provider>
  );
};

export default AppLayout;
