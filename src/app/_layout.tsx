import { Stack } from 'expo-router';
import React from 'react';

const AppLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(main)" />
      <Stack.Screen name="sign-in" />
    </Stack>
  );
};

export default AppLayout;
