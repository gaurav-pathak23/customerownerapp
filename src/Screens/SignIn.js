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
  StatusBar,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Colors } from '../themestyle/Color';
import { validateEmail, validatePassword } from '../validators';
const mobileWidth = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lang_chg } from '../language/Language_provider';
import { config } from '../language/configProvider';
const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [tab, settab] = useState('Current');
  const [secureText, setSecureText] = useState(true);
  //Abhi
  useEffect(() => {
    const fetchData = async () => {
      try {
        const workerdata = await AsyncStorage.getItem('workerdata');
        const OwnerData = await AsyncStorage.getItem('OwnerData');

        if (workerdata) {
          console.log('Loaded worker Data:', JSON.parse(workerdata));
        }
        if (OwnerData) {
          console.log('Loaded owner Data:', JSON.parse(OwnerData));
        }
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const validateForm = async () => {
    let newErrors = { email: '', password: '' };
    const emailError = validateEmail(email);
    if (emailError) {
      newErrors.email = emailError;
      setErrors(newErrors);
      return;
    }

    const passwordError = validatePassword(password);
    if (passwordError) {
      newErrors.password = passwordError;
      setErrors(newErrors);
      return;
    }
    try {
      const key = tab === 'Current' ? 'workerdata' : 'OwnerData';
      const storedData = await AsyncStorage.getItem(key);
      console.log(storedData, 'storedata!!!!');

      if (!storedData) {
        setErrors({
          email: Lang_chg.accountNotFound[config.language],
          password: '',
        });
        return;
      }

      const parsedData = JSON.parse(storedData);

      if (parsedData.email !== email) {
        setErrors({
          email: Lang_chg.emailMismatch[config.language],
          password: '',
        });
        return;
      }

      if (parsedData.password !== password) {
        setErrors({
          email: '',
          password: Lang_chg.incorrect_password[config.language],
        });
        return;
      }
      setErrors({ email: '', password: '' });

      await AsyncStorage.setItem('loggedInUser', JSON.stringify(parsedData));
      Alert.alert(Lang_chg.Successful[config.language]);
      navigation.navigate('Home');
    } catch (error) {
      console.log('Validation error:', error);
      Alert.alert(Lang_chg.error_login[config.language]);
    }
  };

  return (
    <View>
      <ImageBackground
        source={require('../icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <ScrollView>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor={Colors.layercolor}
          />
          <Text style={styles.signintext}>
            {Lang_chg.signin[config.language]}
          </Text>

          <Text style={styles.text}>
            {Lang_chg.enterDetailsBelow[config.language]}
          </Text>
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

            <Text style={styles.Emailtext}>
              {Lang_chg.EmailAddress[config.language]}
            </Text>

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

            <Text style={styles.Emailtext}>
              {Lang_chg.Passwordtxt[config.language]}
            </Text>
            <View style={styles.inputWrapper}>
              <TextInput
                placeholderTextColor={Colors.loremtxt}
                placeholder={Lang_chg.EnterPasswordtxt[config.language]}
                maxLength={30}
                secureTextEntry={secureText}
                value={password}
                onChangeText={text => {
                  setPassword(text);
                  setErrors({ ...errors, password: '' });
                }}
                style={[
                  styles.inputContainerStyle,
                  {
                    fontSize: (mobileWidth * 3.3) / 100,
                    paddingHorizontal: (mobileWidth * 5) / 100,
                  },
                  errors.password ? styles.inputError : {},
                ]}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setSecureText(!secureText)}
              >
                <Image
                  source={
                    secureText
                      ? require('../icons/EyeSlash.png')
                      : require('../icons/Eye.png')
                  }
                  resizeMode="contain"
                  style={styles.EYEicon}
                />
              </TouchableOpacity>
            </View>
            {errors.password ? (
              <Text style={styles.errorText}>
                {Lang_chg.incorrect_password[config.language]}
              </Text>
            ) : null}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('ForgotPassword')}
            >
              <Text style={[styles.forgotpasswordtext]}>
                {Lang_chg.forgotPassword[config.language]}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.emailloginbutton}
              onPress={validateForm}
            >
              <Text style={styles.mobileemailtext}>
                {Lang_chg.continueemaitxt[config.language]}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Mobilelogin')}
              activeOpacity={0.8}
              style={styles.mobileloginbutton}
            >
              <Text style={styles.mobileemailtext}>
                {Lang_chg.continueMobiletxt[config.language]}
              </Text>
            </TouchableOpacity>

            <View style={styles.socialloginview}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.gooleloginview}
              >
                <Image
                  resizeMode="contain"
                  style={styles.googleicon}
                  source={require('../icons/gooogle.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.gooleloginview,
                  { left: (mobileWidth * 3) / 100 },
                ]}
              >
                <Image
                  resizeMode="contain"
                  style={styles.googleicon}
                  source={require('../icons/AppleLogo.png')}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.BOTTOMVIEW}>
              <Text style={styles.text}>
                {Lang_chg.dontHaveAccount[config.language]}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signuptext}>
                  {Lang_chg.signup[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default SignIn;
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
  BOTTOMVIEW: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: (mobileWidth * 6) / 100,
  },
  EYEicon: {
    width: 24,
    height: 24,
    tintColor: 'white',
    right: (mobileWidth * 8) / 100,
    marginTop: (mobileWidth * 5) / 100,
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
    marginTop: (mobileWidth * 4) / 100,
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
    // backgroundColor:'#FAFAFA',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 5) / 100,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: Colors.placeholdertxtcolor,
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0) / 100,
  },
  forgotpasswordtext: {
    color: Colors.whitetxt,
    textDecorationLine: 'underline',
    fontSize: (mobileWidth * 3.5) / 100,
    marginTop: (mobileWidth * 5) / 100,
    textAlign: 'right',
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
    borderColor: Colors.validatecolor,
  },
  errorText: {
    color: Colors.validatecolor,
    fontSize: (mobileWidth * 3) / 100,
    marginTop: (mobileWidth * 4) / 100,
  },
});
