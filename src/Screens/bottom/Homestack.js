import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Menudetails from '../../MenuDetails';
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
