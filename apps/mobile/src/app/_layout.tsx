import { Stack } from 'expo-router';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import { store } from '@/store';

const AppLayout = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(main)" />
          <Stack.Screen name="sign-in" />
        </Stack>
      </Provider>
    </RootSiblingParent>
  );
};

export default AppLayout;
