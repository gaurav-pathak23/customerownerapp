
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
import React, { useState ,useRef } from 'react';
import { Colors } from '../Colorfont/Color';
import OTPTextInput from 'react-native-otp-textinput';


const mobileWidth = Dimensions.get('window').width;


const VerifyPassword = ({ navigation }) => {
const [error, setError] = useState('');
  const [tab, settab] = useState('Current');


  const [otp, setOtp] = useState('');
    
    const otpInputRef = useRef(null);
  

  const handleVerify = () => {
    if (otp.length !== 4) {
      setError('Please enter a valid 4-digit OTP');
      return;
    }

    setError('');
    Alert.alert('Success', `Entered OTP: ${otp}`);
    // Proceed to next screen or API verification
    navigation.navigate('Reset')
  };

    

    
  
  const handleResend = () => {
      // Implement resend OTP logic here
      Alert.alert('OTP Resent');
      otpInputRef.current?.clear(); // clear existing OTP
      setOtp('');
    };

  return (
    <View>
      <ImageBackground
        source={require('../Icons/splashscreen.png')}
        // source={require('../Icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
          <ScrollView>
         <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.layercolor} />
        <Text style={styles.signintext}>Sign In</Text>
        <Text style={styles.text}>Enter your details below & Login</Text>
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
                Worker
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
                Owner
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomline}></View>

          <Text style={styles.Emailtext}>Enter Varification Code</Text>
          <OTPTextInput
        ref={otpInputRef}
        inputCount={4}
        tintColor="#00959E"
        offTintColor="#EFF2F1"
        textInputStyle={styles.otpInput}
        handleTextChange={setOtp}
        keyboardType="numeric"
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

         

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.emailloginbutton}
            onPress={()=>handleVerify()}
          >
            <Text style={styles.mobileemailtext}>Send</Text>
          </TouchableOpacity>
                       <TouchableOpacity style={{marginTop:mobileWidth*5/100 ,flexDirection:"row",justifyContent:"center"}}>
                        <Text style={styles.mobileemailtext}>If you didn't receive a code</Text>
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>handleResend()}>
                        <Text style={styles.resendtext}>Resend</Text>
                        </TouchableOpacity>
                        </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('Mobilelogin')}
            activeOpacity={0.8}
            style={styles.mobileloginbutton}
          >
            <Text style={styles.mobileemailtext}>Continue with Mobile</Text>
          </TouchableOpacity>

          <View style={styles.socialloginview}>
            <TouchableOpacity activeOpacity={0.8} style={styles.gooleloginview}>
              <Image
                resizeMode="contain"
                style={styles.googleicon}
                source={require('../Icons/gooogle.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styles.gooleloginview, { left: (mobileWidth * 3) / 100 }]}
            >
              <Image
                resizeMode="contain"
                style={styles.googleicon}
                source={require('../Icons/appleicon.png')}
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
            <Text style={styles.text}> if you do not have account? </Text>
             <TouchableOpacity  onPress={()=>navigation.navigate('SignUp')}>
            <Text style={styles.signuptext}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};




export default VerifyPassword;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
   otp_view: {
    width: '75%',
    height: mobileWidth * 30 / 100,
  },
  otpInput: {
    backgroundColor: '#EFF2F1',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EFF2F1',
    color: '#121A23',
    fontSize: 20,
  },
  verifyotp_text: {
    fontSize: mobileWidth * 4 / 100,
    color: Colors.whitetxt,
  
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
  resendtext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 4.5) / 100,
    textAlign: 'center',
    textDecorationLine:"underline",
    left:mobileWidth*3/100
    
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
    fontSize: mobileWidth*4/100,
    marginTop: mobileWidth*3/100,
  },
});

