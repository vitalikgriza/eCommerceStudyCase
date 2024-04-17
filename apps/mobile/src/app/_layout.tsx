import { Slot, Stack, useRouter, useSegments } from 'expo-router';
import React, { useEffect } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import { useSession } from '@/auth/useStorageSession';
import { store } from '@/store';

const InitialLayout = () => {
  const hasSession = useSession();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    const inMainGroup = segments[0] === '(main)';
    if (hasSession && !inMainGroup) {
      router.replace('/products');
    } else if (!hasSession) {
      router.replace('/sign-in');
    }
  }, [hasSession]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

const AppLayout = () => {
  return (
    <RootSiblingParent>
      <Provider store={store}>
        <InitialLayout />
      </Provider>
    </RootSiblingParent>
  );
};

export default AppLayout;
