import {
  View,
  Modal,
  Alert,
  ScrollView,
  Text,
  Image,
  Dimensions,
  ImageBackground,
  StyleSheet,
  Switch,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;

import { DrawerActions } from '@react-navigation/native';

const CustomDrawer = ({ navigation, props }) => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', width: '100%' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity activeOpacity={0.8}>
          <View style={styles.drawer_style}>
            <Image
              resizeMode="contain"
              style={styles.Drawer_img}
              source={require('../src/Icons/AppleLogo.png')}
            ></Image>
            <Text style={styles.drawer_txt}>HomeTxt</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={styles.drawer_underline}></View> */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Reset')}
        >
          <View style={styles.drawer_style}>
            <Image
              resizeMode="contain"
              style={styles.Drawer_img}
              source={require('../src/Icons/AppleLogo.png')}
            ></Image>
            <Text style={styles.drawer_txt}>HomeTxt</Text>
          </View>
        </TouchableOpacity>
        {/* <View style={styles.drawer_underline}></View> */}

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Login')}
        >
          <View style={styles.drawer_style}>
            <Image
              resizeMode="contain"
              style={styles.Drawer_img}
              source={require('../src/Icons/AppleLogo.png')}
            ></Image>
            <Text style={styles.drawer_txt}>HomeTxt</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};
export default CustomDrawer;
const styles = StyleSheet.create({
  imageIcon2: {
    width: (mobileW * 12) / 100,
    height: (mobileW * 12) / 100,
    borderRadius: (mobileW * 8) / 100,

    // marginHorizontal: mobileW * 2 / 100,
  },
  welcome_text: {
    fontSize: (mobileW * 3.3) / 100,
    marginTop: (mobileW * 2) / 100,
  },
  underline_: {
    width: '100%',
    borderColor: '#E7E8EA',
    height: (mobileW * 0.2) / 100,
    borderWidth: (mobileW * 0.1) / 100,
  },
  GIF: {
    width: (mobileW * 25) / 100,
    height: (mobileW * 12) / 100,
  },
  logout_icon: {
    width: (mobileW * 6.5) / 100,
    height: (mobileW * 6.5) / 100,
  },
  togglebuttonview: {
    flexDirection: 'row',
    alignItems: 'center',
    width: (mobileW * 54) / 100,
  },
  logout_view: {
    alignItems: 'center',
    padding: (mobileW * 3) / 100,
  },
  history___icon: {
    width: (mobileW * 7) / 100,
    height: (mobileW * 7) / 100,
  },
  ToggleButton_view: {
    alignItems: 'center',
    justifyContent: 'center',
    //  width: mobileW * 13 / 100,
    //  height: mobileW * 6 / 100,
  },
  yes_button: {
    alignItems: 'center',
    justifyContent: 'center',

    width: (mobileW * 15) / 100,
    height: (mobileW * 7) / 100,
    borderRadius: (mobileW * 1) / 100,
    borderWidth: (mobileW * 0.2) / 100,
    marginHorizontal: (mobileW * 1) / 100,
  },
  BACKGROUND_TOP_IMAGE: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: (mobileH * 18) / 100,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    //  backgroundColor:'transparent',
    //  backgroundColor:'#121A23',
    // opacity: 0.5,
  },
  maven_image: {
    width: (mobileW * 6) / 100,
    height: (mobileW * 6) / 100,
  },
  TOGGLE: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (mobileW * 13) / 100,
    height: (mobileW * 6) / 100,
  },
  yes_text: {
    fontSize: (mobileW * 3.8) / 100,
  },
  teach_text: {
    fontSize: (mobileW * 3.2) / 100,
    marginHorizontal: (mobileW * 1.5) / 100,
  },
  mavenmode_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (mobileW * 25) / 100,
  },
  ask_text: {
    fontSize: (mobileW * 3.5) / 100,
  },
  userMode: {
    width: (mobileW * 5.5) / 100,
    height: (mobileW * 5.5) / 100,
    borderRadius: (mobileW * 3) / 100,
    borderWidth: (mobileW * 0.4) / 100,
  },
  modal_view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#00000060',
  },
  drawer_image: {
    width: (mobileW * 7) / 100,
    height: (mobileW * 7) / 100,
  },
  imageCard2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: (mobileW * 14) / 100,
    height: (mobileW * 14) / 100,
    borderRadius: (mobileW * 11) / 100,
    borderWidth: (mobileW * 0.1) / 100,
  },
  logout_text: {
    fontSize: (mobileW * 4) / 100,
  },
  containerstyle2: {
    width: (mobileW * 78) / 100,
    height: (mobileW * 14) / 100,
    elevation: (mobileW * 2) / 100,
    marginTop: (mobileW * 1) / 100,
    shadowColor: '#000',
    justifyContent: 'center',
    borderColor: 'gray',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0 },
  },
  ImageIcon: {
    width: (mobileW * 7) / 100,
    height: (mobileW * 7) / 100,
    tintColor: 'red',
  },
  containerstyle: {
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    height: (mobileW * 13) / 100,
    padding: (mobileW * 2) / 100,
    borderRadius: (mobileW * 1) / 100,
    // backgroundColor: Colors.bgcolor,
    // elevation: mobileW * 0.6 / 100,
    // shadowColor: '#000',
    // borderColor: Colors.gray,
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, },
    // shadowOpacity: 0.1,
  },
  containerstyle_radio: {
    width: '100%',
    shadowColor: '#000',

    padding: (mobileW * 2) / 100,
    elevation: (mobileW * 0.6) / 100,
    // borderRadius: mobileW * 1 / 100,
    // shadowOpacity: 0.1,
    // shadowOffset: { width: 0, },
    // shadowOpacity: 0.1,
  },
  ModalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    width: (mobileW * 90) / 100,
    height: (mobileW * 12) / 100,
    paddingLeft: (mobileW * 3) / 100,
    paddingRight: (mobileW * 3) / 100,
    borderTopLeftRadius: (mobileW * 2) / 100,
    borderTopRightRadius: (mobileW * 2) / 100,
  },
  Modal: {
    elevation: 5,
    alignSelf: 'center',
    width: (mobileW * 90) / 100,
    borderRadius: (mobileW * 3) / 100,
  },
  drawer_style: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: (mobileW * 3.5) / 100,
    marginTop: (mobileW * -2) / 100,
  },
  drawer_underline: {
    width: (mobileW * 79) / 100,
    height: (mobileW * 0.2) / 100,
    marginLeft: (mobileW * 3) / 100,
  },
  drawer_txt: {
    fontSize: (mobileW * 3.1) / 100,
    marginHorizontal: (mobileW * 4.7) / 100,
  },
  Drawer_img: {
    width: (mobileW * 4.5) / 100,
    height: (mobileW * 4.5) / 100,
  },
});
