import { Stack } from 'expo-router';
import React from 'react';

import HeaderCartButton from '@/components/HeaderCartButton';
import HeaderLogoutButton from '@/components/HeaderLogoutButton';

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerBackTitle: 'Back', contentStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products',
          headerRight: HeaderCartButton,
          headerLeft: HeaderLogoutButton,
        }}
      />
      <Stack.Screen name="product/[id]" options={{ title: 'Product Details' }} />
      <Stack.Screen name="shopping-cart/index" options={{ title: 'Shopping Cart' }} />
    </Stack>
  );
};

export default MainLayout;
