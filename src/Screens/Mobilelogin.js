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
import React, { useState, useRef } from 'react';
import { Colors } from '../Colorfont/Color';
import PhoneInput from 'react-native-phone-number-input';
import CountryPicker from 'react-native-country-picker-modal';
import { Mobilenumber } from '../validators';
const mobileWidth = Dimensions.get('window').width;

const Mobilelogin = ({ navigation }) => {
  const [error, setError] = useState('');
  const [tab, settab] = useState('Current');
  console.log(tab,"tab data ...... data tab");
  
  const [countryCode, setCountryCode] = useState('IN');
  console.log(countryCode,"...................");
  
  const [callingCode, setCallingCode] = useState('91');
  console.log(callingCode,"callingCode");
  
  const [number, setNumber] = useState('');
  console.log(number,"......number is here ");
  
  const onSelect = country => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

   const handleVerify = () => {
      if (number.length !== 10) {
        setError('Please enter a valid number');
        return;
      }
  
      setError('');
      Alert.alert('Success', `Entered  number: ${number}`);
      // Proceed to next screen or API verification
      navigation.navigate('Verificationcode', {
  mobileNumber: number,
  countryCode: callingCode,
});
    };

  return (
    <View>
      <ImageBackground
        source={require('../Icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Text style={styles.signintext}>Sign In & Sign Up</Text>
        <Text style={styles.text}>Enter your details below </Text>
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

          <Text style={styles.Emailtext}>Mobile Number</Text>

           <View style={styles.inputContainer}>
      {/* Country Picker */}
      <TouchableOpacity style={styles.countryPicker}>
        <CountryPicker
          countryCode={countryCode}
          withFilter
          withFlag
          withCallingCodeButton ={false}
           withCallingCode
          withAlphaFilter
          onSelect={onSelect}
          containerButtonStyle={styles.flagButton}
        />
        <Text style={styles.codeText}>+{callingCode}</Text>
      </TouchableOpacity>

      {/* Vertical Line */}
      <View style={styles.separator} />

      {/* Mobile Input */}
      <TextInput
        style={styles.textInput}
        placeholder="Mobile Number"
        placeholderTextColor={Colors.loremtxt}
        keyboardType="number-pad"
        maxLength={10}
        value={number}
        onChangeText={setNumber}
      />
    </View>
           {error ? <Text style={styles.errorText}>{error}</Text> : null}
           
          <Text style={styles.otptext}>
            An OTP will be sent on given phone number for verification. Standard
            message and data rates apply.
          </Text>
                
          <TouchableOpacity onPress={()=>handleVerify()} activeOpacity={0.8} style={styles.emailloginbutton}>
            <Text style={styles.mobileemailtext}>Sign In / Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
export default Mobilelogin;
const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },
  otp_view: {
    width: '75%',
    height: (mobileWidth * 30) / 100,
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
    fontSize: (mobileWidth * 4) / 100,
    color: Colors.whitetxt,
  },

  googleicon: {
    width: (mobileWidth * 6) / 100,
    height: (mobileWidth * 6) / 100,
    alignSelf: 'center',
  },

  emailloginbutton: {
    width: (mobileWidth * 90) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 2) / 100,
    backgroundColor: Colors.tabcolor,
    justifyContent: 'center',
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
  otptext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3.5) / 100,
    textAlign: 'center',
    marginTop: (mobileWidth * 6) / 100,
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
    marginTop: (mobileWidth * 5) / 100,
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
    borderColor:Colors.placeholdertxtcolor,
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0) / 100,
  },

  inputError: {
    borderColor:Colors.validatecolor,
  },
  errorText: {
    color: Colors.validatecolor,
    fontSize: mobileWidth*3/100,
    marginTop: mobileWidth*2/100,
  },
  container: {
    padding: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: mobileWidth*0.2/100,
    borderColor:Colors.placeholdertxtcolor,
    borderRadius: mobileWidth*2/100,
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    marginTop:mobileWidth*3/100
  },
  textContainerStyle: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderColor: Colors.placeholdertxtcolor,
    backgroundColor: 'transparent',
    borderWidth: (mobileWidth * 0.3) / 100,
    borderTopRightRadius: (mobileWidth * 2) / 100,
    borderBottomRightRadius:mobileWidth*2/100
  },


  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flagButton: {
    marginRight: 5,
  },
  codeText: {
    color: 'white',
    fontSize: mobileWidth * 4 / 100,
  },
  separator: {
    width: mobileWidth*0.2/100,
    height: '100%',
    backgroundColor:Colors.placeholdertxtcolor,
    marginHorizontal: 10,
  },
  textInput: {
    flex: 1,
    color:Colors.whitetxt,
    fontSize: mobileWidth * 4 / 100,
  },
});
