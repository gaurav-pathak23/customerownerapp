
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState ,useEffect } from 'react';
import { Colors } from '../themestyle/Color';
import { validateEmail } from '../validators';
const mobileWidth = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lang_chg } from '../language/Language_provider';
import { config } from '../language/configProvider';
const ForgotPassword = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ email: '', });
  const [tab, settab] = useState('Current');
  
useEffect(() => {
  const fetchData = async () => {
    try {
      const workerdata = await AsyncStorage.getItem('workerdata');
      console.log(workerdata,"forgot password screen !!");
      
      const OwnerData = await AsyncStorage.getItem('OwnerData');
      console.log(OwnerData,"ownerdata  forgot password screen !!!");
      if (workerdata) {
        console.log('Loaded worker Data:', JSON.parse(workerdata));
      }
      if (OwnerData) {
        console.log('Loaded Owner Data:', JSON.parse(OwnerData));
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  fetchData();
}, []);


const validateForm = async () => {
  let newErrors = { email: '' };

  const emailError = validateEmail(email);
  if (emailError) {
    newErrors.email = emailError;
    setErrors(newErrors);
    return;
  }

  try {
    const key = tab === 'Current' ? 'workerdata' : 'OwnerData';
    const storedData = await AsyncStorage.getItem(key);

    if (!storedData) {
      newErrors.email = Lang_chg.no_account_found[config.language];
      setErrors(newErrors);
      return;
    }

    const parsedData = JSON.parse(storedData);

    if (!parsedData.email || parsedData.email !== email) {
      newErrors.email =  Lang_chg.no_account_found[config.language];
      setErrors(newErrors);
      return;
    }

    
    setErrors({ email: '' });
    Alert.alert('Success', 'Email verified');
    navigation.navigate('VerifyPassword');

  } catch (err) {
    console.error('Validation Error:', err);
    newErrors.email = Lang_chg.SomethingwentwrongPleasetryagain[config.language];
    setErrors(newErrors);
  }
};

  return (
    <View>
      <ImageBackground
        source={require('../icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.signintext}>{Lang_chg.signin[config.language]}</Text>
        <Text style={styles.text}>{Lang_chg.enterDetailsBelow[config.language]}</Text>
        <View style={{ padding: (mobileWidth * 7.2) / 100 }}>
          <View style={styles.tabview}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => settab('Current')}
              style={[
                {
                  backgroundColor:
                    tab === 'Current' ? Colors.tabcolor : 'transparent',
                },
                styles.vendorview,
              ]}
            >
              <Text
                style={[
                  styles.vendortext,
                  { fontWeight: tab === 'Current' ? '700' : '300' },
                ]}
              >
                 {Lang_chg.Workertxt[config.language]}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => settab('old')}
              style={[
                {
                  backgroundColor:
                    tab === 'Current' ? 'transparent' : Colors.tabcolor,
                },
                styles.vendorview,
              ]}
            >
              <Text
                style={[
                  styles.vendortext,
                  { fontWeight: tab === 'Current' ? '300' : '700' },
                ]}
              >
                 {Lang_chg.Ownertxt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomline}></View>

          <Text style={styles.Emailtext}>{Lang_chg.EmailAddress[config.language]}</Text>
          <TextInput
            placeholder={Lang_chg.EnterEmailtxt[config.language]}
            placeholderTextColor={Colors.loremtxt}
            maxLength={40}
            value={email}
            onChangeText={text => {
              setEmail(text);
              setErrors({ ...errors, email: '' });
            }}
            style={[
              styles.inputContainerStyle,
              {
                fontSize: (mobileWidth * 3.3) / 100,
                paddingHorizontal: (mobileWidth * 5) / 100,
              },
              errors.email ? styles.inputError : {},
            ]}
          />
          {errors.email ? (
            <Text style={styles.errorText}>{errors.email}</Text>
          ) : null}
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.emailloginbutton}
            onPress={validateForm}
          >
            <Text style={styles.mobileemailtext}>{Lang_chg.Send_[config.language]}</Text>
          </TouchableOpacity>
                       <TouchableOpacity onPress={()=>navigation.goBack('SignIn')} style={{marginTop:mobileWidth*5/100}}>
                        <Text style={styles.mobileemailtext}>{Lang_chg.back_to_login[config.language]}</Text>
                        </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('Mobilelogin')}
            activeOpacity={0.8}
            style={styles.mobileloginbutton}
          >
            <Text style={styles.mobileemailtext}>{Lang_chg.continueMobiletxt[config.language]}</Text>
          </TouchableOpacity>

          <View style={styles.socialloginview}>
            <TouchableOpacity activeOpacity={0.8} style={styles.gooleloginview}>
              <Image
                resizeMode="contain"
                style={styles.googleicon}
                source={require('../icons/gooogle.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.gooleloginview, { left: (mobileWidth * 3) / 100 }]}
            >
              <Image
                resizeMode="contain"
                style={styles.googleicon}
                source={require('../icons/appleicon.png')}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: (mobileWidth * 6) / 100,
            }}
          >
            <Text style={styles.text}>{Lang_chg.dontHaveAccount[config.language]}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signuptext}>{Lang_chg.signup[config.language]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ForgotPassword;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  googleicon: {
    width: (mobileWidth * 6) / 100,
    height: (mobileWidth * 6) / 100,
    alignSelf: 'center',
  },
  gooleloginview: {
    width: (mobileWidth * 42) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 2) / 100,
    borderColor: Colors.placeholdertxtcolor,
    borderWidth: (mobileWidth * 0.2) / 100,
    justifyContent: 'center',
    marginTop: (mobileWidth * 5) / 100,
  },
  socialloginview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  emailloginbutton: {
    width: (mobileWidth * 90) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 2) / 100,
    backgroundColor: Colors.tabcolor,
    justifyContent: 'center',
    marginTop: (mobileWidth * 4) / 100,
  },
  mobileloginbutton: {
    width: (mobileWidth * 90) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderColor: Colors.placeholdertxtcolor,
    justifyContent: 'center',
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 5) / 100,
  },
  text: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 4) / 100,
    textAlign: 'center',
    marginTop: (mobileWidth * 2) / 100,
  },
  mobileemailtext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 4) / 100,
    textAlign: 'center',
  },
  vendortext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3.5) / 100,
    textAlign: 'center',
    fontWeight: '700',
  },
  signintext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 8) / 100,
    textAlign: 'center',
    marginTop: (mobileWidth * 45) / 100,
    fontWeight: '700',
  },
  vendorview: {
    width: (mobileWidth * 42) / 100,
    height: (mobileWidth * 10) / 100,
    justifyContent: 'center',
    borderTopRightRadius: (mobileWidth * 2) / 100,
    borderTopLeftRadius: (mobileWidth * 2) / 100,
  },
  tabview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  bottomline: {
    width: (mobileWidth * 85) / 100,
    borderColor: Colors.tabcolor,
    borderWidth: (mobileWidth * 0.2) / 100,
    alignSelf: 'center',
  },
  Emailtext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3.5) / 100,
    marginTop: (mobileWidth * 3) / 100,
  },
  inputContainerStyle: {
    color: Colors.whitetxt,
    borderColor: Colors.placeholdertxtcolor,
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 5) / 100,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0) / 100,
  },
 
  signuptext: {
    color: Colors.whitetxt,
    textDecorationLine: 'underline',
    fontSize: (mobileWidth * 4) / 100,
    right: (mobileWidth * 2) / 100,
    fontWeight: '700',
    marginTop: (mobileWidth * 1.5) / 100,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color:Colors.validatecolor,
    fontSize: mobileWidth*3/100,
    marginTop: mobileWidth*2/100,
  },
});