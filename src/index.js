import 'react-native-gesture-handler';
import * as React from 'react';

import './config/ReactotronConfig';

import Routes from './routes';

export default function App() {
  return <Routes />;
}

// In App.js in a new project

// import React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './pages/Main';
// import Routes from './routes';

// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //     </View>
// //   );
// // }

// const Stack = createStackNavigator();

// function App() {
//   // return (
//   //   <NavigationContainer>
//   //     <Stack.Navigator>
//   //       <Stack.Screen name="Home" component={HomeScreen} />
//   //     </Stack.Navigator>
//   //   </NavigationContainer>
//   // );

//   return <Routes />;
// }

// export default App;
