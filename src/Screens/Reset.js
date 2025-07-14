import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Alert,StatusBar
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../themestyle/Color';
import {
  validateEmail,
  validatePassword,
  confirmPassword,
} from '../validators';
import { Lang_chg } from '../language/Language_provider';
import { config } from '../language/configProvider';
const mobileWidth = Dimensions.get('window').width;

const Reset = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [tab, settab] = useState('Current');
  const [secureText, setSecureText] = useState(true);

  const validateForm = () => {
    let newErrors = { password: '', confirmPassword: '' };
    const passwordError = validatePassword(password);
    if (passwordError) {
      newErrors.password = passwordError;
      setErrors(newErrors);
      return;
    }
    if (!confirmPassword.trim()) {
      newErrors.confirmPassword =Lang_chg.Pleaseconfirmyourpassword[config.language];
      setErrors(newErrors);
      return;
    }

    if (password.trim() !== confirmPassword.trim()) {
      newErrors.confirmPassword = Lang_chg.Passwordsdonotmatch__[config.language];
      setErrors(newErrors);
      return;
    }

    setErrors({ password: '', confirmPassword: '' });
    Alert.alert(Lang_chg.Passwordchangedsuccessfully[config.language]);
    navigation.navigate('Home');
  };

  return (
    <View>
              <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.statusbar} />
      
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
                {' '}
                {Lang_chg.Workertxt[config.language]}{' '}
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
                {' '}
              {Lang_chg.Ownertxt[config.language]}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomline}></View>

          <Text style={styles.Emailtext}>{Lang_chg.enterpswrd[config.language]}</Text>
          <TextInput
            placeholder={Lang_chg.enterpswrd[config.language]}
            placeholderTextColor={Colors.loremtxt}
            maxLength={40}
            value={password}
            onChangeText={text => {
              setPassword(text);
              setErrors(prev => ({ ...prev, password: '' }));
            }}
            secureTextEntry={secureText}
            style={[
              styles.inputContainerStyle,
              {
                fontSize: (mobileWidth * 3.3) / 100,
                paddingHorizontal: (mobileWidth * 5) / 100,
              },
              errors.password ? styles.inputError : {},
            ]}
          />
          {errors.password ? (
            <Text style={styles.errorText}>{errors.password}</Text>
          ) : null}

          {/* 🔐 Confirm Password */}
          <Text style={styles.Emailtext}>{Lang_chg.Cnfrmpasrd[config.language]}</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder={Lang_chg.Cnfrmpasrd[config.language]}
              placeholderTextColor={Colors.loremtxt}
              maxLength={40}
              secureTextEntry={secureText}
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                setErrors(prev => ({ ...prev, confirmPassword: '' }));
              }}
              style={[
                styles.inputContainerStyle,
                {
                  fontSize: (mobileWidth * 3.3) / 100,
                  paddingHorizontal: (mobileWidth * 5) / 100,
                },
                errors.confirmPassword ? styles.inputError : {},
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
                style={{
                  width: 24,
                  height: 24,
                  tintColor: 'white',
                  right: (mobileWidth * 8) / 100,
                  marginTop: (mobileWidth * 5) / 100,
                }}
              />
            </TouchableOpacity>
          </View>
          {errors.confirmPassword ? (
            <Text style={styles.errorText}>{errors.confirmPassword}</Text>
          ) : null}

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.emailloginbutton}
            onPress={validateForm}
          >
            <Text style={styles.mobileemailtext}>{Lang_chg.ResetPassword[config.language]}</Text>
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
            <Text style={styles.text}> {Lang_chg.dontHaveAccount[config.language]}</Text>
            <TouchableOpacity activeOpacity={0.8}  onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.signuptext}>{Lang_chg.signup[config.language]}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Reset;
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
    marginTop: (mobileWidth * 8) / 100,
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
    borderColor: 'gray',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0) / 100,
  },
  forgotpasswordtext: {
    color: Colors.whitetxt,
    textDecorationLine: 'underline',
    fontSize: (mobileWidth * 3.5) / 100,
    left: (mobileWidth * 58) / 100,

    marginTop: (mobileWidth * 5) / 100,
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
    color: Colors.validatecolor,
    fontSize: mobileWidth*3/100,
    marginTop: mobileWidth*3/100,
  },
});