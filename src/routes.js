import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          cardStyle: { backgroundColor: '#f5f5fa' },
          cardOverlayEnabled: true,
          headerTintColor: 'white',
          headerStyle: { backgroundColor: '#7149c1' },
          headerTitleAlign: 'center',
          headerBackTitleVisible: false,
        }}
      >
        <AppStack.Screen name="Main" component={Main} />
        <AppStack.Screen name="User" component={User} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
