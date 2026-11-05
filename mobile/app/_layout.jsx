import React from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { MobileMarketplaceProvider } from '../src/hooks/useMobileMarketplace';

export default function RootLayout() {
  return (
    <MobileMarketplaceProvider>
      <StatusBar style="light" backgroundColor="#064e3b" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="product/[id]"
          options={{
            headerShown: true,
            title: 'Product Details',
            headerStyle: { backgroundColor: '#064e3b' },
            headerTintColor: '#ffffff',
          }}
        />
      </Stack>
    </MobileMarketplaceProvider>
  );
}

