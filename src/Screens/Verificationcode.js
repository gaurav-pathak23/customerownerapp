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
import React, { useState ,useRef } from 'react';
import { Colors } from '../Colorfont/Color';
import { validateEmail } from '../validators';
import OTPTextInput from 'react-native-otp-textinput';
import { Lang_chg } from '../Language/Language_provider';
import { config } from '../Language/configProvider';
const mobileWidth = Dimensions.get('window').width;

const Verificationcode = ({ route,navigation }) => {
  // 👇 Get values passed from previous screen
  const { mobileNumber, countryCode } = route.params; 
  console.log(mobileNumber,"mobileNumber, countryCode...............");
   const [error, setError] = useState('');
     const [tab, settab] = useState('Current');
   
   
     const [otp, setOtp] = useState('');
       
       const otpInputRef = useRef(null);
     
   
     const handleVerify = () => {
       if (otp.length !== 4) {
         setError(Lang_chg.PleaseentedigitOTP[config.language]);

         return;
       }
   
       setError('');
       Alert.alert(`${Lang_chg.Entervcode[config.language]}: ${otp}`);
       // Proceed to next screen or API verification
       navigation.navigate('Home')
     };

  return (
    <View>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.themcolortxt} />
      
      <ImageBackground
        source={require('../Icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >

        <Text style={styles.codetxt}>{Lang_chg.Entervcode[config.language]}</Text>
        <Text style={styles.text}>{Lang_chg.sendcode[config.language]}</Text>
         <Text style={[styles.text,{marginTop:mobileWidth*6/100}]}> {countryCode} {mobileNumber}</Text>
                  <View style={{width:mobileWidth*75/100,alignSelf:"center",marginTop:mobileWidth*5/100}}>
         <OTPTextInput
        ref={otpInputRef}
        inputCount={4}
        tintColor="#00959E"
        offTintColor="#EFF2F1"
        textInputStyle={styles.otpInput}
        handleTextChange={setOtp}
        keyboardType="numeric"
      />
              </View>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
         <TouchableOpacity onPress={()=>handleVerify()} activeOpacity={0.8} style={styles.emailloginbutton}>
      <Text style={styles.mobileemailtext}>{Lang_chg.SignInSignUp[config.language]}</Text>
                   </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Verificationcode;

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  emailloginbutton: {
      width: (mobileWidth * 90) / 100,
      height: (mobileWidth * 11) / 100,
      borderRadius: (mobileWidth * 2) / 100,
      backgroundColor: Colors.tabcolor,
      justifyContent: 'center',
     alignSelf:"center",
      marginTop: (mobileWidth * 5) / 100,
    },
  codetxt: {
    color: Colors.whitetxt,
        fontSize: (mobileWidth * 8) / 100,
        textAlign: 'center',
        fontWeight: '700',
    },
  mobileemailtext: {
      color: Colors.whitetxt,
      fontSize: (mobileWidth * 4) / 100,
      textAlign: 'center',
    },
   text: {
      color: Colors.whitetxt,
      fontSize: (mobileWidth * 4) / 100,
      textAlign: 'center',
      marginTop: (mobileWidth * 1) / 100,
    },
     otpInput: {
    backgroundColor: '#EFF2F1',
    borderRadius: 10,
    borderWidth: 1,
    color: '#121A23',
    fontSize: 20,
    
  },
   errorText: {
    color:Colors.validatecolor,
    fontSize: mobileWidth*3/100,
    marginTop:mobileWidth*3/100,
    left:mobileWidth*15/100
  },
});

