import { Stack } from 'expo-router';
import React from 'react';

import HeaderCartButton from '@/components/HeaderCartButton';

const MainLayout = () => {
  return (
    <Stack screenOptions={{ headerBackTitle: 'Back', contentStyle: { backgroundColor: 'white' } }}>
      <Stack.Screen
        name="products/index"
        options={{
          title: 'Products',
          headerRight: HeaderCartButton,
        }}
      />
      <Stack.Screen name="product/[id]" options={{ title: 'Product Details' }} />
      <Stack.Screen name="shopping-cart/index" options={{ title: 'Shopping Cart' }} />
    </Stack>
  );
};

export default MainLayout;
