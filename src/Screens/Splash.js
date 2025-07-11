// import React, { useEffect, useState } from 'react';
// import {
//   View,
//   Dimensions,
//   StyleSheet,
//   ImageBackground,
//   Image,
//   PermissionsAndroid,
//   Platform,
//   Alert,
// } from 'react-native';
// import {Marker} from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
// import MapView from 'react-native-maps';
// const mobileWidth = Dimensions.get('window').width;

// const Splash = ({ navigation }) => {
//   useEffect(() => {
//     requestLocationPermission();
//   }, []);
// const [LAtitude, setlatitude] = useState(0)
// console.log(LAtitude,"LAtitude.....")
// const [LOngitutude, setlongitude] = useState(0)
// console.log(LOngitutude,"LOngitutude....................");

//   const requestLocationPermission = async () => {
//     if (Platform.OS === 'ios') {
//       getCurrentLocation(); // iOS auto-prompts for permission
//     } else {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//           {
//             title: 'Location Permission',
//             message: 'This app needs location access to continue',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           },
//         );

//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           getCurrentLocation();
//         } else {
//           Alert.alert(
//             'Permission Denied',
//             'You must grant location permission to continue.',
//             [
//               {
//                 text: 'Retry',
//                 onPress: () => requestLocationPermission(),
//               },
//               {
//                 text: 'Exit',
//                 style: 'cancel',
//               },
//             ],
//             { cancelable: false }
//           );
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     }
//   };

//   const getCurrentLocation = () => {
//     Geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         console.log('User location:', latitude, longitude);
//         setlatitude(latitude)
//         setlongitude(longitude)
//         // Only navigate after location fetched
//         setTimeout(() => {
//           // navigation.replace('Language',);
//           navigation.replace('Language', {
//   latitude: latitude,
//   longitude: longitude,
// });
//         }, 1000);
//       },
//       (error) => {
//         console.log(error.code, error.message);
//         Alert.alert(
//           'Location Error',
//           'Unable to fetch location. Please ensure GPS is enabled.',
//           [
//             {
//               text: 'Retry',
//               onPress: () => requestLocationPermission(),
//             },
//           ],
//           { cancelable: false }
//         );
//       },
//       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
//     );
//   };

//   return (
//     <View>
//       <ImageBackground
//         source={require('../Icons/splashscreen.png')}
//         style={styles.background}
//         resizeMode="cover"
//       >
        
//         <Image
//           resizeMode="contain"
//           style={styles.image}
//           source={require('../Icons/haathsath.png')}
//         />
//       </ImageBackground>
//     </View>
//   );
// };

// export default Splash;

// const styles = StyleSheet.create({
//   background: {
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   image: {
//     alignSelf: 'center',
//     width: mobileWidth * 0.4,
//     height: mobileWidth * 0.4,
//   },
// });


import React, { useEffect, useState } from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  ImageBackground,
  Image,
  PermissionsAndroid,
  Platform,
  Alert,StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Geolocation from '@react-native-community/geolocation';
import { Colors } from '../Colorfont/Color'
const mobileWidth = Dimensions.get('window').width;

const Splash = ({ navigation }) => {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    if (Platform.OS === 'ios') {
      getCurrentLocation();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs location access to continue',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );

        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          Alert.alert(
            'Permission Denied',
            'You must grant location permission to continue.',
            [
              { text: 'Retry', onPress: () => requestLocationPermission() },
              { text: 'Exit', style: 'cancel' },
            ],
            { cancelable: false }
          );
        }
      } catch (err) {
        console.warn(err);
      }
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);

        try {
          const workerdata = await AsyncStorage.getItem('workerdata');
          const OwnerData = await AsyncStorage.getItem('OwnerData');

          if (workerdata || OwnerData) {
            // Already signed in → Go to Home
            navigation.replace('Language');
            // navigation.replace('SignIn');
          } else {
            // First time → Go to Language screen
            navigation.replace('Language', {
              latitude: latitude,
              longitude: longitude,
            });
          }
        } catch (error) {
          console.log('Error fetching user data:', error);
          navigation.replace('Language', {
            latitude: latitude,
            longitude: longitude,
          });
        }
      },
      (error) => {
        console.log(error.code, error.message);
        Alert.alert(
          'Location Error',
          'Unable to fetch location. Please ensure GPS is enabled.',
          [{ text: 'Retry', onPress: () => requestLocationPermission() }],
          { cancelable: false }
        );
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  };

  return (
    <View>
     
        <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.statusbar} />
      <ImageBackground
        source={require('../Icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../Icons/haathsath.png')}
        />
      </ImageBackground>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: mobileWidth * 0.4,
    height: mobileWidth * 0.4,
  },
});







