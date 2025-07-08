// HomeStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from './Home';
import Menudetails from '../../Menudetails';
import Home from './Home';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Menudetails" component={Menudetails} />
    </Stack.Navigator>
  );
};

export default HomeStack;
