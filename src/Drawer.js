// import { Button, View ,Image,Dimensions,Text} from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';
// import Profile from './Screens/bottom/Profile';
// import Chef from './Screens/bottom/Chef';
// import CustomDrawer from './CustomDrawer';

// const mobileW = Dimensions.get('window').width;
// const mobileH = Dimensions.get('window').height;

// const Drawer = createDrawerNavigator();
// const DrawerScreen =({navigation}) => {

//   return (


//                   <NavigationContainer independent={true}>
                 
            
//     <Drawer.Navigator  drawerContent ={ props => <CustomDrawer {...props}/>} 
//      initialRouteName="Profile" screenOptions={{headerShown:false}}>
//                   <Drawer.Screen  name="Profile"  component={Profile} options = {{drawerIcon :({color})=> (<Image resizeMode='contain' style={{width:mobileW*6/100, height:mobileW*6/100, alignSelf:'center',}}
//   source={require('../src/Icons/Broom.png')}></Image>)}}/>

// <Drawer.Screen name="Chef" component={Chef}options= {{drawerIcon :({color})=> (
// <Image resizeMode='contain' style={{width:mobileW*6/100, height:mobileW*6/100, alignSelf:'center'}}
//     source={require('../src/Icons/Broom.png')}></Image>)}}/>
 


   

      


//                   </Drawer.Navigator>
//    </NavigationContainer>

      
//   );
// }
// export default DrawerScreen; 
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Screens/bottom/Profile';
import Chef from './Screens/bottom/Chef';
import CustomDrawer from './CustomDrawer';
import Home from './Screens/bottom/Home';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    // <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerIcon: ({ color, size }) => (
              <Image
                source={require('../src/Icons/Broom.png')}
                resizeMode="contain"
                style={{
                  width: mobileW * 6 / 100,
                  height: mobileW * 6 / 100,
                  alignSelf: 'center',
                }}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Chef"
          component={Chef}
          options={{
            drawerIcon: ({ color, size }) => (
              <Image
                source={require('../src/Icons/Broom.png')}
                resizeMode="contain"
                style={{
                  width: mobileW * 6 / 100,
                  height: mobileW * 6 / 100,
                  alignSelf: 'center',
                }}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    // </NavigationContainer>
  );
};

export default DrawerScreen;
