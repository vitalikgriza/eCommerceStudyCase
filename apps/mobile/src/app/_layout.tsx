import { StripeProvider } from '@stripe/stripe-react-native';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { RootSiblingParent } from 'react-native-root-siblings';
import { Provider } from 'react-redux';

import { useSession } from '@/auth/useStorageSession';
import { store } from '@/store';

const InitialLayout = () => {
  const { token, isLoading } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (token) {
      router.replace('/products');
    } else {
      router.replace('/sign-in');
    }
  }, [token, isLoading]);

  return <Stack screenOptions={{ headerShown: false }} />;
};

const AppLayout = () => {
  return (
    <StripeProvider publishableKey={process.env.EXPO_PUBLIC_STRIPE_KEY as string}>
      <RootSiblingParent>
        <Provider store={store}>
          <InitialLayout />
        </Provider>
      </RootSiblingParent>
    </StripeProvider>
  );
};

export default AppLayout;
