import { AccessibilityInfo, } from 'react-native';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacknav from './src/Screens/Routenavigation';

const App = () => {
  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled().then(enabled => {
      console.log('Screen Reader Status:', enabled);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stacknav />
    </NavigationContainer>
  );
};
export default App;

