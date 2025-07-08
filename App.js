import {AccessibilityInfo , View, Text , StyleSheet ,SafeAreaView  ,Image,ImageBackground ,Dimensions} from 'react-native'
import React ,{useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
const mobileWidth = Dimensions.get('window').width;
const mobileHeight = Dimensions.get('window').height;
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stacknav from './src/Screens/Routenavigation';

const  App =()=> {
  useEffect(() => {
    AccessibilityInfo.isScreenReaderEnabled()
      .then((enabled) => {
        console.log('Screen Reader Status:', enabled);
      });
  }, []);
  return (
    

      <NavigationContainer>
        <Stacknav/>
       
  </NavigationContainer>
  
     
    
  )
}
export default App;
const styles = StyleSheet.create({
  
  background:{
  width:"100%",
  height:"100%",
  justifyContent:"c"
  },
  image:{
    alignSelf:"center",
    width:mobileWidth*40/100,
    height:mobileWidth*40/100

  }


})



