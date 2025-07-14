import React, { Component, useEffect } from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {  Dimensions, } from 'react-native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from './Splash';
import Login from './Login';
import Language from './Language';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import VerifyPassword from './VerifyPassword';
import Dashboard from './Dashboard';
import Reset from './Reset';
import SignUp from './SignUp';
import Mobilelogin from './Mobilelogin';
import Verificationcode from './Verificationcode';
import BottomNavigator from './bottom/BottomNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../CustomDrawer';
import Home from './bottom/Home';
import Profile from './bottom/Profile';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;
const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

const Stacknav = (navigation) => {
    // ------------------------
function DrawerNavigator({ navigation }) {

    return (


        <Drawer.Navigator drawerPosition="left"
            screenOptions={{
                drawerStyle: {
                    width: mobileW * 80 / 100,
                },
            }}
            drawerContent={() => <CustomDrawer navigation={navigation} />}>
            <Drawer.Screen name='Home' component={Home} options={{ headerShown: false }}>
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}
    // ---------------------------------
    return (
            <Stack.Navigator
            initialRouteName={'Language'}>
                        {/* screenOptions={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}> */}
             
            <Stack.Screen name="CustomDrawer" component={CustomDrawer} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Profile" component={DrawerNavigator} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Home" component={BottomNavigator} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Language" component={Language} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="VerifyPassword" component={VerifyPassword} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Reset" component={Reset} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Mobilelogin" component={Mobilelogin} options={{ headerShown: false, gestureEnabled: false }} />
            <Stack.Screen name="Verificationcode" component={Verificationcode} options={{ headerShown: false, gestureEnabled: false }} />
            {/* <Stack.Screen name="Menudetails" component={Menudetails} options={{ headerShown: false, gestureEnabled: false }} /> */}

            {/* <Stack.Screen
  name="Dashboard"
  component={BottomTabNavigator} //
  options={{ headerShown: false, gestureEnabled: false }}
/> */}
        </Stack.Navigator> 
    );
}
export default Stacknav