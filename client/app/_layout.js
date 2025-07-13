import { Stack } from 'expo-router';
import { View, Text } from 'react-native';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
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
              
              }}>
              <Text style={{ color: 'white', fontWeight: 'bold' ,  fontSize: 25,}}>
                Todo
              </Text>
              </View>
           
          ),
        }}
      />
    </Stack>
  );
}