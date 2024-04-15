import { Stack } from 'expo-router';
import React from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import { store } from '@/store';

const AppLayout = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(main)" />
          <Stack.Screen name="sign-in" />
        </Stack>
      </RootSiblingParent>
    </Provider>
  );
};

export default AppLayout;
