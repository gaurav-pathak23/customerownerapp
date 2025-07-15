import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Booking from './Booking';
import Profile from './Profile';
import Chef from './Chef';
import Otherparty from './Otherparty';
import { Colors } from '../../themestyle/Color';
import Mobilelogin from '../Mobilelogin';
import HomeStack from './HomeStack';
const mobileWidth = Dimensions.get('window').width;
const Bottom = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 100,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          paddingBottom: 8,
          backgroundColor: Colors.bottomcardColor,
        },
      }}
    >
      <Bottom.Screen
        name="Home"
        component={HomeStack}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../../icons/HouseLine.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? Colors.whitetxt
                      : Colors.placeholdertxtcolor,
                  },
                ]}
              />
            </View>
          ),

          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.whitetxt : Colors.placeholdertxtcolor,
                fontSize: (mobileWidth * 3) / 100,
                marginTop: (mobileWidth * 5) / 100,
              }}
            >
              Home
            </Text>
          ),
        }}
      />

      <Bottom.Screen
        name="Chef"
        component={Chef}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../../icons/ChefHat.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? Colors.whitetxt
                      : Colors.placeholdertxtcolor,
                  },
                ]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.whitetxt : Colors.placeholdertxtcolor,
                fontSize: (mobileWidth * 3.5) / 100,
                marginTop: (mobileWidth * 5) / 100,
              }}
            >
              Chefs
            </Text>
          ),
        }}
      />

      <Bottom.Screen
        name="Booking"
        component={Booking}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../../icons/FileText.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? Colors.whitetxt
                      : Colors.placeholdertxtcolor,
                  },
                ]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.whitetxt : Colors.placeholdertxtcolor,
                fontSize: (mobileWidth * 3) / 100,
                marginTop: (mobileWidth * 5) / 100,
              }}
            >
              Bookings
            </Text>
          ),
        }}
      />

      <Bottom.Screen
        name="Otherparty"
        component={Otherparty}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../../icons/CookingPot.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? Colors.whitetxt
                      : Colors.placeholdertxtcolor,
                  },
                ]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.whitetxt : Colors.placeholdertxtcolor,
                fontSize: (mobileWidth * 3) / 100,
                marginTop: (mobileWidth * 5) / 100,
              }}
            >
              Other Party
            </Text>
          ),
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,

          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require('../../icons/UserCircle.png')}
                style={[
                  styles.icon,
                  {
                    tintColor: focused
                      ? Colors.whitetxt
                      : Colors.placeholdertxtcolor,
                  },
                ]}
              />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                color: focused ? Colors.whitetxt : Colors.placeholdertxtcolor,
                fontSize: (mobileWidth * 3) / 100,
                marginTop: (mobileWidth * 5) / 100,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
  },
  icon: {
    width: (mobileWidth * 8) / 100,
    height: (mobileWidth * 8) / 100,
    marginTop: (mobileWidth * 3) / 100,
  },
});

export default BottomNavigator;
