
import React from 'react';
import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
import { RefreshProvider } from '../context/RefreshContext';

export default function RootLayout() {
  return (
    <RefreshProvider>
      <Stack
        screenOptions={{
          headerShown:    true,
          headerStyle:    { backgroundColor: 'black' },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight:    'bold',
            letterSpacing: 1.2,
          },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            header: () => (
              <View
                style={{
                  backgroundColor: 'black',
                  height: 80,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
                  Todo
                </Text>
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="add"
          options={{ title: 'Add Todo' }}
        />
      </Stack>
    </RefreshProvider>
  );
}
