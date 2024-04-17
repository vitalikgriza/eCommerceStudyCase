import { Stack } from 'expo-router';
import React from 'react';

import HeaderLogoutButton from '@/components/HeaderLogoutButton';
import HeaderRight from '@/components/HeaderRight';

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerBackTitle: 'Back', contentStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products',
          headerRight: HeaderRight,
          headerLeft: HeaderLogoutButton,
        }}
      />
      <Stack.Screen name="orders/index" options={{ title: 'Your Orders' }} />
      <Stack.Screen name="product/[id]" options={{ title: 'Product Details' }} />
      <Stack.Screen name="shopping-cart/index" options={{ title: 'Shopping Cart' }} />
    </Stack>
  );
};

export default MainLayout;
