import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
  Modal,
  Platform, StatusBar
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../Colorfont/Color';
import { Marker } from 'react-native-maps';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Lang_chg } from '../Language/Language_provider';
import { config } from '../Language/configProvider';
import {
  validateEmail,
  validatePassword,
  validateAddress,
  validateBuisness,
  validateCity,
  validateGender,
  validatePincode,
  validateName,
  Mobilenumber, validateImage, validateAadhar, validatedob
} from '../validators';

const mobileWidth = Dimensions.get('window').width;
import MapView from 'react-native-maps';
const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
];

const businessOptions = [
  { label: 'Time Management', value: 'Time Management' },
  { label: 'Customer Service', value: 'Customer Service' },
  { label: 'Sales skills', value: 'Sales skills' },
  { label: 'Inventory Management', value: 'Inventory Management' },
  { label: 'Mobile App Usage  ', value: 'Mobile App Usage ' },
  { label: 'Payment Handling', value: 'Payment Handling' },

];
const skillsdata = [
  { label: 'Business Strategy ', value: 'Business Strategy' },
  { label: 'Marketing', value: 'Marketing' },
  { label: 'Data Analysis', value: 'Data Analysis' },
  { label: 'Team Lead ', value: 'Team Lead' },
  { label: 'Legal & Compliance', value: 'Legal & Compliance' },

];

const cityStateData = {
  Mumbai: { state: 'Maharashtra', pincode: '400001' },
  Delhi: { state: 'Delhi', pincode: '110001' },
  Bengaluru: { state: 'Karnataka', pincode: '560001' },
  Hyderabad: { state: 'Telangana', pincode: '500001' },
  Chennai: { state: 'Tamil Nadu', pincode: '600001' },
  Kolkata: { state: 'West Bengal', pincode: '700001' },
  Ahmedabad: { state: 'Gujarat', pincode: '380001' },
  Pune: { state: 'Maharashtra', pincode: '411001' },
  Jaipur: { state: 'Rajasthan', pincode: '302001' },
  Lucknow: { state: 'Uttar Pradesh', pincode: '226001' },
  Indore: { state: 'Madhya Pradesh', pincode: '452001' },
  Dhar: { state: 'Madhya Pradesh', pincode: '454001' },
  Ratlam: { state: 'Madhya Pradesh', pincode: '457001' },
  Ujjain: { state: 'Madhya Pradesh', pincode: '456001' },
  "Vijay Nagar": { pincode: "452010", city: "Indore", state: "Madhya Pradesh" },
  "Palasia": { pincode: "452001", city: "Indore", state: "Madhya Pradesh" },
  "Rajwada": { pincode: "452002", city: "Indore", state: "Madhya Pradesh" },
  "Bhawarkua": { pincode: "452001", city: "Indore", state: "Madhya Pradesh" },
  "Scheme No. 54": { pincode: "452010", city: "Indore", state: "Madhya Pradesh" },
  "MR-10 Road": { pincode: "452010", city: "Indore", state: "Madhya Pradesh" },
  "Sudama Nagar": { pincode: "452009", city: "Indore", state: "Madhya Pradesh" },
  "Annapurna": { pincode: "452009", city: "Indore", state: "Madhya Pradesh" },
  "LIG Colony": { pincode: "452008", city: "Indore", state: "Madhya Pradesh" },
  "AB Road": { pincode: "452010", city: "Indore", state: "Madhya Pradesh" },
  "Khajrana": { pincode: "452016", city: "Indore", state: "Madhya Pradesh" },
  "Mhow": { pincode: "453441", city: "Indore", state: "Madhya Pradesh" },
};


const pincodeCountryData = {
  400001: 'India',
  110001: 'India',
  560001: 'India',
  500001: 'India',
  600001: 'India',
  700001: 'India',
  380001: 'India',
  411001: 'India',
  302001: 'India',
  226001: 'India',
  452001: 'India', // Indore
  454001: 'India', // Dhar
  457001: 'India', // Ratlam
  456001: 'India', // Ujjain
  452009: "India",
  453441: "India",
  452016: "India",
  452010: "India",
  452002: "India",
  452008: "India"
};


const SignUp = ({ navigation, route }) => {
  const { latitude, longitude } = route.params || {};
  console.log(latitude, longitude, "latitude, longitude sign up screen.....");
  // setlong(longitude)
  // setlat(latitude)
  const [long, setlong] = useState(latitude ?? fallbackLat);
  const [lat, setlat] = useState(longitude ?? fallbackLong);
  //  const mapRef = useRef();
  const mapRef = useRef();
  useEffect(() => {
    if (lat && long && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        },
        1000
      );
    }
  }, [lat, long]);
  const [image, setimage] = useState();
  const [proofimage, setproofimage] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  // const [proofmodal, setproofmodal] = useState(false);
  const [inputHeight, setInputHeight] = useState((mobileWidth * 30) / 100);
  const [imagePath, setimagePath] = useState('');
  const [proofimagepath, setproofimagePath] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Aadhar, setAadhar] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [gender, setGender] = useState('');
  const [business, setBusiness] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');
  console.log(pincode, "...........pincode");
  const [country, setCountry] = useState('');
  const [tab, settab] = useState('Current');
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    business: '',
    mobile: '',
    address: '',
    city: '',
    gender: '',
    pincode: '',
    image: '',
    Aadhar: '',
    dob: ''
  });
  console.log(errors, "errors................");

  const handleImagePick = (
    source = 'camera',
    cropping = false,
    mediaType = 'photo',
  ) => {
    const options = {
      cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    };

    const picker =
      source === 'camera'
        ? ImagePicker.openCamera(options)
        : ImagePicker.openPicker(options); // gallery

    picker
      .then(image => {
        console.log('Received image:', image);
        setimagePath(image.path);
        setimage(image.path);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          alert('Image selection error: ' + e.message);
        }
      });
  };
  // proof camera and gallery picker code .....
  const proofImagePick = (
    source = 'camera',
    cropping = true,
    mediaType = 'photo',
  ) => {
    const options = {
      cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    };

    const picker =
      source === 'camera'
        ? ImagePicker.openCamera(options)
        : ImagePicker.openPicker(options); 

    picker
      .then(image => {
        console.log('Received image:', image);
        setproofimagePath(image.path);
        setproofimage(image.path);
      })
      .catch(e => {
        if (e.code !== 'E_PICKER_CANCELLED') {
          alert('Image selection error: ' + e.message);
        }
      });
  };

  const handleCityChange = text => {
    setCity(text);
    if (cityStateData[text]) {
      setState(cityStateData[text].state);
      setPincode(cityStateData[text].pincode);
      setCountry(pincodeCountryData[cityStateData[text].pincode] || '');
    } else {
      setState('');
      setPincode('');
      setCountry('');
    }
  };

  const handlePincodeChange = text => {
    setPincode(text);
    const foundCity = Object.entries(cityStateData).find(
      ([, val]) => val.pincode === text,
    );
    if (foundCity) {
      setCity(foundCity[0]);
      setState(foundCity[1].state);
      setCountry(pincodeCountryData[text] || '');
    } else {
      setCity('');
      setState('');
      setCountry('');
    }
  };


  // first function

  const validateForm = async () => {
    const newErrors = {};
    //     const imageError = validateImage(imagePath);
    // if (imageError) return setErrors({ ...newErrors, image: imageError });
    // ============= for image hide some specific resion
    const nameError = validateName(name);
    if (nameError) return setErrors({ ...newErrors, name: nameError });
    const emailError = validateEmail(email);
    if (emailError) return setErrors({ ...newErrors, email: emailError });
    const mobileError = Mobilenumber(mobile);
    if (mobileError) return setErrors({ ...newErrors, mobile: mobileError });
    const genderError = validateGender(gender);
    if (genderError) return setErrors({ ...newErrors, gender: genderError });

    if (tab === 'Current') {
      const businessError = validateBuisness(business);
      if (businessError)
        return setErrors({ ...newErrors, business: businessError });
    }

    const dobError = validatedob(dob);
    console.log(dobError, "......dobError");

    if (dobError)
      return setErrors({ ...newErrors, dob: dobError });

    const AadharError = validateAadhar(Aadhar);
    console.log(AadharError, "AadharError........AadharError");

    if (AadharError)
      return setErrors({ ...newErrors, Aadhar: AadharError });
    const passwordError = validatePassword(password);
    if (passwordError)
      return setErrors({ ...newErrors, password: passwordError });

    if (confirmPassword !== password)
      return setErrors({
        ...newErrors,
        confirmPassword: Lang_chg.Passwordsdonotmatch__[config.language],
      });

    const addressError = validateAddress(address);
    if (addressError) return setErrors({ ...newErrors, address: addressError });

    const pincodeError = validatePincode(pincode);
    if (pincodeError) return setErrors({ ...newErrors, pincode: pincodeError });

    const cityError = validateCity(city);
    if (cityError) return setErrors({ ...newErrors, city: cityError });



    setErrors({});

    // const userData = {
    //   Aadhar,
    //   name,
    //   email,
    //   mobile,
    //   gender,
    //   business,
    //   address,
    //   city,
    //   state,
    //   country,
    //   pincode,
    //   password,
    //   dob,
    //   // imagePath,
    //   // proofimagepath,
    //   latitude: lat,
    //   longitude: long,

    // };


    const userData = {
      Aadhar,
      name,
      email,
      mobile,
      gender,
      business,
      address,
      city,
      state,
      country,
      pincode,
      password,
      dob,
      imagePath,
      proofimagepath,
      latitude: lat,
      longitude: long,
    };

    try {
      if (tab === 'Current') {
        await AsyncStorage.setItem('workerdata', JSON.stringify(userData));
        console.log('workerdata saved!!!!!!!!!!!!!!!!!', userData);
      } else if (tab === 'old') {
        await AsyncStorage.setItem('OwnerData', JSON.stringify(userData));
        console.log('OwnerData saved!', userData);
      }

      Alert.alert(Lang_chg.Registration[config.language]);
      navigation.navigate('Home');

    } catch (error) {
      console.log('Error saving data:', error);

    }
  };


  // it's a manualy provide.. lat long 
  const fallbackLat = 22.7552;
  const fallbackLong = 75.8968;



  const [date, setDate] = useState(new Date(2000, 0, 1)); // default DOB
  console.log(date, "date..date...date");
  
  const [show, setShow] = useState(false);
  const [dob, setDob] = useState('');
  console.log(dob, "dob...........");
  const onChange = (event, selectedDate) => {
    setShow(Platform.OS === 'ios'); // iOS keeps picker open
    if (selectedDate) {
      setDate(selectedDate);
      setDob(moment(selectedDate).format('DD-MM-YYYY')); // or 'YYYY-MM-DD'
    }
  };


  //   const handlePincodeChange = (text) => {
  //   setPincode(text);
  //   const foundCity = Object.entries(cityStateData).find(
  //     ([, val]) => val.pincode === text
  //   );

  //   if (foundCity) {
  //     setCity(foundCity[0]);
  //     setState(foundCity[1].state);
  //     setCountry(pincodeCountryData[text] || '');
  //     setIsPincodeValid(true);
  //   } else {
  //     setCity('');
  //     setState('');
  //     setCountry('');
  //     setIsPincodeValid(false);
  //   }
  // };
  // const handlePincodeChange = (text) => {
  //   setPincode(text);
  //   const foundCity = Object.entries(cityStateData).find(
  //     ([, val]) => val.pincode === text
  //   );

  //   if (foundCity) {
  //     setCity(foundCity[0]);
  //     setState(foundCity[1].state);
  //     setCountry(pincodeCountryData[text] || '');
  //     setIsPincodeValid(true);
  //     setErrors(prev => ({ ...prev, pincode: '' })); // clear error if valid
  //   } else {
  //     setCity('');
  //     setState('');
  //     setCountry('');
  //     setIsPincodeValid(false);
  //     setErrors(prev => ({
  //       ...prev,
  //       pincode: 'Pincode not available'
  //       // pincode: Lang_chg.PincodeNotAvailable[config.language] || 'Pincode not available'
  //     }));
  //   }
  // };
  const [isPincodeValid, setIsPincodeValid] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.statusbar} />

      <ImageBackground
        source={require('../Icons/splashscreen.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ color: '#00000090' }}>
            <View style={styles.CardView}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <TouchableOpacity
                  onPress={() => {
                    handleImagePick('camera'), setModalVisible(!modalVisible);
                  }}
                >
                  <Image
                    style={styles.cameraicon}
                    resizeMode="contain"
                    source={require('../Icons/camera.png')}
                  />
                </TouchableOpacity>
                <View style={styles.verticalLine} />
                <TouchableOpacity
                  onPress={() => {
                    handleImagePick('gallery'), setModalVisible(!modalVisible);
                  }}
                >
                  <Image
                    style={styles.cameraicon}
                    resizeMode="contain"
                    source={require('../Icons/Galleryimage.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={{
                  width: (mobileWidth * 25) / 100,
                  height: (mobileWidth * 10) / 100,
                  backgroundColor: 'transparent',
                  borderRadius: (mobileWidth * 2) / 100,
                  justifyContent: 'center',
                  alignSelf: 'center',
                  marginTop: (mobileWidth * 4) / 100,
                  borderColor: Colors.tabcolor,
                  borderWidth: (mobileWidth * 0.2) / 100,
                }}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text
                  style={[
                    styles.Canceltxt,
                    {
                      color: Colors.tabcolor,
                      marginTop: (mobileWidth * -1) / 100,
                    },
                  ]}
                >
                  {Lang_chg.Cancel[config.language]}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* proof modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={proofmodal}
          onRequestClose={() => {
            setproofmodal(!proofmodal);
          }}
        >
          <View style={{ color: '#00000090' }}>
            <View style={styles.CardView}>
              <View
                style={{ flexDirection: 'row', justifyContent: 'space-around' }}
              >
                <TouchableOpacity
                  onPress={() => {
                    proofImagePick('camera'), setproofmodal(!proofmodal);
                  }}
                >
                  <Image
                    style={styles.cameraicon}
                    resizeMode="contain"
                    source={require('../Icons/camera.png')}
                  />
                </TouchableOpacity>
                <View style={styles.verticalLine} />
                <TouchableOpacity
                  onPress={() => {
                    proofImagePick('gallery'), setproofmodal(!proofmodal);
                  }}
                >
                  <Image
                    style={styles.cameraicon}
                    resizeMode="contain"
                    source={require('../Icons/Galleryimage.png')}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.cancelbutton}
                onPress={() => setproofmodal(!proofmodal)}
              >
                <Text
                  style={[
                    styles.Canceltxt,
                    {
                      color: Colors.tabcolor,
                      marginTop: (mobileWidth * -1) / 100,
                    },
                  ]}
                >
                  Cancle
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
        <ScrollView
          contentContainerStyle={{ paddingBottom: 100 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.signintext}>{Lang_chg.signup[config.language]}</Text>
          <Text style={styles.textt}> {Lang_chg.enterDetailsBelow[config.language]}</Text>
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
                  {Lang_chg.Worker[config.language]}
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
          </View>

          <View
            style={{ alignSelf: 'center', marginTop: (mobileWidth * -2) / 100 }}
          >
            <View style={styles.imageCard}>
              <Image
                style={styles.mavenImage}
                resizeMode="stretch"
                source={image == null ? {} : { uri: image }}
              ></Image>
            </View>
          </View>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={[styles.uploadtxt, { color: Colors.whitetxt }]}>
              {Lang_chg.UploadPhoto[config.language]}
            </Text>
          </TouchableOpacity>
          {/* {errors.image ? (
  <Text style={[styles.errorText,{textAlign:"center",right:mobileWidth*-1/100}]}>{errors.image}</Text>
) : null} */}
          {/* image error  */}
          {/* Input Fields */}
          <View style={{ justifyContent: 'center', paddingLeft: mobileWidth * 5 / 100 }}>
            <Text style={[styles.text]}>{Lang_chg.FullName[config.language]}</Text>

            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.EnterFullName[config.language]}
              placeholderTextColor={Colors.loremtxt}
              maxLength={40}
              value={name}
              onChangeText={text => {
                setName(text);
                setErrors(prev => ({ ...prev, name: '' }));
              }}
            />
            {errors.name ? (
              <Text style={styles.errorText}>{errors.name}</Text>
            ) : null}
            <Text style={[styles.text,]}>{Lang_chg.EmailAddress[config.language]} </Text>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.EnterEmailtxt[config.language]}
              placeholderTextColor={Colors.loremtxt}
              value={email}
              onChangeText={text => {
                setEmail(text);
                setErrors(prev => ({ ...prev, email: '' }));
              }}
            />
            {errors.email ? (
              <Text style={styles.errorText}>{errors.email}</Text>
            ) : null}
            <Text style={[styles.text]}>{Lang_chg.MobileNumber[config.language]}</Text>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.EnterPhoneNumber[config.language]}
              keyboardType="number-pad"
              placeholderTextColor={Colors.loremtxt}
              value={mobile}
              maxLength={10}
              onChangeText={text => {
                setMobile(text);
                setErrors(prev => ({ ...prev, mobile: '' }));
              }}
            />
            {errors.mobile ? (
              <Text style={styles.errorText}>{errors.mobile}</Text>
            ) : null}
            {/* {tab === 'old' ? (
              <> */}
            {/* comment by gaurav */}
            <Text style={[styles.text]}>{Lang_chg.Gender[config.language]} </Text>
            {/* <Dropdown
                  style={styles.inputContainerStyle}
                  data={genderOptions}
                   selectedTextStyle={{
                color: Colors.placeholdertxtcolor,
                left: (mobileWidth * 3) / 100,
                fontSize: (mobileWidth * 3.4) / 100,
              }}
                  labelField="label"
                  valueField="value"
                  placeholderStyle={{ color: Colors.placeholdertxtcolor }}
                  placeholder="   Select Gender"
                  placeholderTextColor={Colors.placeholdertxtcolor}
                  value={gender}
                  onChange={item => {
                    setGender(item.value);
                    setErrors(prev => ({ ...prev, gender: '' }));
                  }}
                /> */}
            <Dropdown
              style={styles.inputContainerStyle}
              data={genderOptions}
              labelField="label"
              valueField="value"
              placeholder={Lang_chg.SelectGender[config.language]}
              placeholderStyle={{ color: Colors.loremtxt }}
              placeholderTextColor={Colors.placeholdertxtcolor}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              value={gender}
              onChange={item => {
                setGender(item.value);
                setErrors(prev => ({ ...prev, gender: '' }));
              }}
              // Optional: use your own icon instead of default arrow
              renderRightIcon={() => (
                <Image
                  source={require('../Icons/dropppp.png')}
                  style={styles.customIcon}
                />
              )}
            />
            {errors.gender ? (
              <Text style={styles.errorText}>{errors.gender}</Text>
            ) : null}
            {/* </>
            ) : null} */}
            {/* comment by gaurav.... */}

            {tab === 'Current' ? (

              <View>
                <Text style={[styles.text]}>{Lang_chg.Skills[config.language]} </Text>
               <Dropdown
              style={styles.inputContainerStyle}
              data={businessOptions}
              labelField="label"
              valueField="value"
              placeholder={Lang_chg.SelectSkills[config.language]}
              placeholderStyle={{ color: Colors.loremtxt }}
              placeholderTextColor={Colors.placeholdertxtcolor}
              selectedTextStyle={styles.selectedTextStyle}
              iconStyle={styles.iconStyle}
              value={business}
              onChange={item => {
                setBusiness(item.value);
                setErrors(prev => ({ ...prev, business: '' }));
              }}
              renderRightIcon={() => (
                <Image
                  source={require('../Icons/dropppp.png')}
                  style={styles.customIcon}
                />
              )}
            />
                {errors.business ? (
                  <Text style={styles.errorText}>{errors.business}</Text>
                ) : null}
              </View>
            ) :
              <></>
            }


            <Text style={[styles.text]}>{Lang_chg.DateOfBirth[config.language]}</Text>
            <View style={[styles.inputContainerStyle, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
              {/* <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onPress={() => setShow(true)} > */}
              <Text
                style={{
                  color: dob ? Colors.whitetxt : Colors.loremtxt,
                  textAlign: 'center',

                }}
              >
                {dob || Lang_chg.Select_Dob[config.language]}

              </Text>
              <TouchableOpacity onPress={() => setShow(true)}>
                <Image style={styles.calender} source={require('../Icons/CalendarBlank.png')} />
              </TouchableOpacity>
              {show && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                  onChange={onChange}
                  maximumDate={new Date()} // DOB should not be future date
                />
              )}

            </View>
            {errors.dob ? (
              <Text style={[styles.errorText]}>{errors.dob}</Text>
            ) : null}
            <Text style={[styles.text, { textAlign: "left" }]}>{Lang_chg.AadharNumber[config.language]}</Text>
            {/* <View style={[styles.inputContainerStyle,{flexDirection:"row",justifyContent:"space-between"}]}>
             <View>
               <Image
                style={styles.proofimage}
                resizeMode="stretch"
                source={proofimage == null ? {} : { uri: proofimage }}
              ></Image>
                {proofimage == null && (
    <Text style={styles.proofPlaceholderText}>Enter ID Proof</Text>
  )}
  </View>
             <TouchableOpacity onPress={() => setproofmodal(true)}>
            <Image style={styles.downerrow} source={require('../Icons/downarrow.png')}/>
          </TouchableOpacity>
                      </View> */}
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.EnterAadharNumber[config.language]}
              placeholderTextColor={Colors.loremtxt}
              keyboardType="numeric"
              maxLength={12}
              value={Aadhar}
              onChangeText={text => {
                setAadhar(text);
                setErrors(prev => ({ ...prev, Aadhar: '' }));
              }}
            />
            {errors.Aadhar ? (
              <Text style={styles.errorText}>{errors.Aadhar}</Text>
            ) : null}

            <Text style={[styles.text]}>{Lang_chg.Password[config.language]} </Text>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.EnterPasswordtxt[config.language]}
              placeholderTextColor={Colors.loremtxt}

              maxLength={20}
              value={password}
              onChangeText={text => {
                setPassword(text);
                setErrors(prev => ({ ...prev, password: '' }));
              }}
            />
            {errors.password ? (
              <Text style={styles.errorText}>{errors.password}</Text>
            ) : null}
            <Text style={[styles.text]}>{Lang_chg.ConfirmPassword[config.language]}  </Text>
            <TextInput
              style={styles.inputContainerStyle}
              placeholder={Lang_chg.ConfirmPassword[config.language]}
              placeholderTextColor={Colors.loremtxt}

              maxLength={20}
              value={confirmPassword}
              onChangeText={text => {
                setConfirmPassword(text);
                setErrors(prev => ({ ...prev, confirmPassword: '' }));
              }}
            />
            {errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : null}

            <Text style={[styles.text]}>{Lang_chg.Address[config.language]}  </Text>

            <TextInput
              style={[styles.inputContainerStyle, { height: inputHeight }]}
              multiline
              placeholderTextColor={Colors.loremtxt}
              placeholder={Lang_chg.Address[config.language]}
              value={address}
              onChangeText={text => {
                setAddress(text);
                setErrors(prev => ({ ...prev, address: '' }));
              }}
              onContentSizeChange={e =>
                setInputHeight(e.nativeEvent.contentSize.height + 20)
              }
            />
            {errors.address ? (
              <Text style={styles.error}>{errors.address}</Text>
            ) : null}
            <View style={[{ flexDirection: 'row', }, Lang_chg.City[config.language] == "City" ? { gap: 120 } : { gap: 125 }]}>
              <Text
                style={[styles.citytext, { fontSize: (mobileWidth * 3.2) / 100, }]}
              >
                {Lang_chg.PinCode[config.language]}
              </Text>
              <Text
                style={[styles.citytext, { left: (mobileWidth * 3) / 100, fontSize: (mobileWidth * 3.2) / 100, }]}
              >
                {Lang_chg.City[config.language]}
              </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <View>
                <TextInput
                  style={[styles.input]}
                  placeholderTextColor={Colors.loremtxt}
                  placeholder={Lang_chg.EnterPinCode[config.language]}
                  value={pincode}
                  keyboardType="number-pad"
                  onChangeText={handlePincodeChange}

                />
                {errors.pincode ? (
                  <Text style={styles.error}>{errors.pincode}</Text>
                ) : null}
              </View>
              <View>


                {/* <TextInput
                  style={[styles.input, { left: (mobileWidth * 4) / 100 }]}
                  placeholderTextColor={Colors.loremtxt}
                  placeholder={Lang_chg.EnterCity[config.language]}
                  value={city}
                  onChangeText={handleCityChange}
                /> */}
                <TextInput
                  style={[styles.input, { left: (mobileWidth * 4) / 100 }]}
                  placeholderTextColor={Colors.loremtxt}
                  placeholder={Lang_chg.EnterCity[config.language]}
                  value={city}
                  onChangeText={handleCityChange}
                  editable={isPincodeValid}
                />
                {errors.city ? (
                  <Text style={styles.error}>{errors.city}</Text>
                ) : null}
              </View>
            </View>
            <View style={[{ flexDirection: 'row', }, Lang_chg.City[config.language] == "City" ? { gap: 115 } : { gap: 125 }]}>
              <Text
                style={[styles.citytext, { fontSize: (mobileWidth * 3.2) / 100, }]}
              >
                {Lang_chg.State[config.language]}
              </Text>
              <Text
                style={[styles.citytext, { left: (mobileWidth * 10) / 100, fontSize: (mobileWidth * 3.2) / 100, }]}
              >
                {Lang_chg.Country[config.language]}
              </Text>
            </View>
            <View style={{ flexDirection: 'row', gap: 20 }}>

              {/* <TextInput
                style={[styles.input]}
                placeholderTextColor={Colors.loremtxt}
                placeholder= {Lang_chg.SelectState[config.language]}
                value={state}
                editable={false}
              /> */}
              <TextInput
                style={[styles.input]}
                placeholderTextColor={Colors.loremtxt}
                placeholder={Lang_chg.SelectState[config.language]}
                value={state}
                editable={false}
              />

              {/* <TextInput
                style={[styles.input]}
                placeholderTextColor={Colors.loremtxt}
                placeholder={Lang_chg.SelectCountry[config.language]}
                value={country}
                editable={false}
              /> */}
              <TextInput
                style={[styles.input]}
                placeholderTextColor={Colors.loremtxt}
                placeholder={Lang_chg.SelectCountry[config.language]}
                value={country}
                editable={false}
              />
            </View>
            <View
              style={{
                borderRadius: 10,
                borderWidth: 1,
                width: "90%",
                justifyContent: "center",
                overflow: 'hidden',
                alignSelf: 'center',
                marginVertical: 20,
                marginRight: 35
              }}
            >

              <MapView
                ref={mapRef}
                style={{ width: mobileWidth * 0.87, height: mobileWidth * 0.42, borderRadius: 10, marginRight: 10 }}
                initialRegion={{
                  latitude: lat || fallbackLat,
                  longitude: long || fallbackLong,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                region={{
                  latitude: lat || 22.7552,
                  longitude: long || 75.8968,
                  latitudeDelta: 0.005,
                  longitudeDelta: 0.005,
                }}
                mapType="standard"
                showsUserLocation={true}
                zoomEnabled={true}
                scrollEnabled={true}
                showsBuildings={true}
                showsPointsOfInterest={true}
              >
                {/* Conditionally render marker */}


                {lat && long && (
                  <Marker
                    coordinate={{ latitude: lat, longitude: long }}
                    image={require('../Icons/Location.png')}
                    title="Code Tech Infosystem Pvt Ltd."
                  />
                )}
              </MapView>

            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.emailloginbutton}
              onPress={validateForm}
            >
              <Text style={styles.mobileemailtext}>{Lang_chg.Register[config.language]} </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: Colors.validatecolor,
    marginLeft: 4,
    fontSize: mobileWidth * 4 / 100,
    marginTop: mobileWidth * 2 / 100
  },
  dobBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 14,
    borderRadius: 6,
  },
  customIcon: {
    width: mobileWidth * 2.2 / 100,
    height: mobileWidth * 2.2 / 100,
    right: mobileWidth * 4 / 100
  },
  proofPlaceholderText: {
    color: Colors.placeholdertxtcolor,
    marginTop: mobileWidth * -4 / 100,
    left: mobileWidth * 3 / 100,

  },
  cancelbutton: {
    width: (mobileWidth * 25) / 100,
    height: (mobileWidth * 10) / 100,
    backgroundColor: 'transparent',
    borderRadius: (mobileWidth * 2) / 100,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: (mobileWidth * 4) / 100,
    borderColor: Colors.tabcolor,
    borderWidth: (mobileWidth * 0.2) / 100,
  },
  downerrow: {
    width: mobileWidth * 3 / 100,
    height: mobileWidth * 3 / 100,
    tintColor: Colors.placeholdertxtcolor,
    margin: mobileWidth * 2 / 100,
    marginTop: mobileWidth * 3 / 100
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginVertical: 16,
  },
  button: {
    backgroundColor: Colors.buttoncolor,
    padding: 14,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  background: {
    width: '100%',
    height: '100%',
  },
  cameraicon: {
    width: (mobileWidth * 20) / 100,
    height: (mobileWidth * 20) / 100,
  },
  emailloginbutton: {
    width: (mobileWidth * 90) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 2) / 100,
    backgroundColor: Colors.tabcolor,
    justifyContent: 'center',
    marginTop: (mobileWidth * 4) / 100,
  },
  calender: {
    width: mobileWidth * 5 / 100,
    height: mobileWidth * 5 / 100,
    tintColor: Colors.whitetxt,
    right: mobileWidth * 3 / 100
  },
  mobileemailtext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 4) / 100,
    textAlign: 'center',
  },
  verticalLine: {
    width: (mobileWidth * 0.1) / 100,
    height: (mobileWidth * 20) / 100,
    backgroundColor: Colors.placeholdertxtcolor,
  },
  input: {
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: (mobileWidth * 2) / 100,
    width: (mobileWidth * 40) / 100,
    marginTop: (mobileWidth * 2) / 100,
    color: Colors.whitetxt,
  },
  uploadtxt: {
    color: Colors.blacktxt,
    fontSize: (mobileWidth * 3) / 100,
    textAlign: 'center',
    marginTop: (mobileWidth * 2) / 100,
    fontWeight: '700',
  },
  Canceltxt: {
    color: Colors.blacktxt,
    fontSize: (mobileWidth * 4) / 100,
    textAlign: 'center',
    marginTop: (mobileWidth * 2) / 100,
  },
  imageCard: {
    width: (mobileWidth * 24) / 100,
    height: (mobileWidth * 24) / 100,
    borderRadius: (mobileWidth * 12) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    borderColor: Colors.tabcolor,
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop:mobileW*-2/100
  },
  mavenImage: {
    width: (mobileWidth * 23) / 100,
    height: (mobileWidth * 23) / 100,
    borderRadius: (mobileWidth * 12) / 100,
    backgroundColor: 'white',
    // tintColor:Colors.themecolor
  },
  proofimage: {
    width: (mobileWidth * 10) / 100,
    height: (mobileWidth * 7) / 100,
    marginTop: mobileWidth * 1 / 100,
    borderRadius: mobileWidth * 2 / 100,
    left: mobileWidth * 2 / 100
  },

  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0) / 100,
    // backgroundColor: Colors.bgColor, // adjust if needed
  },

  text: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3.2) / 100,
    marginTop: (mobileWidth * 3) / 100,

  },
  textt: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3.5) / 100,
    marginTop: (mobileWidth * 2) / 100,
    textAlign: 'center',
    // left:mobileWidth*8/100
  },
  citytext: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 4) / 100,
    marginTop: (mobileWidth * 5) / 100,
    right: (mobileWidth * 0) / 100,
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
    fontWeight: '700',
    marginTop: (mobileWidth * 10) / 100,
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
    fontSize: (mobileWidth * 3) / 100,
    marginTop: (mobileWidth * 2) / 100,
    left: (mobileWidth * 2) / 100,
  },
  inputContainerStyle: {
    color: Colors.whitetxt,
    borderColor: Colors.placeholdertxtcolor,
    // backgroundColor:'#FAFAFA',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 10) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 3) / 100,
    paddingLeft: 10
  },
  inputaddressContainerStyle: {
    color: Colors.whitetxt,
    borderColor: Colors.placeholdertxtcolor,
    // backgroundColor:'#FAFAFA',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 30) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 2) / 100,
  },
  selectedTextStyle: {
    color: Colors.whitetxt,
    fontSize: (mobileWidth * 3) / 100,
    left: mobileWidth * 2 / 100
  },
  dropdown: {
    borderColor: Colors.placeholdertxtcolor,
    // backgroundColor:'#FAFAFA',
    width: (mobileWidth * 88) / 100,
    height: (mobileWidth * 11) / 100,
    borderRadius: (mobileWidth * 3) / 100,
    borderWidth: (mobileWidth * 0.2) / 100,
    marginTop: (mobileWidth * 3) / 100,
  },
  placeholderStyle: {
    fontSize: (mobileWidth * 3) / 100,
    marginHorizontal: (mobileWidth * 1) / 100,
    color: Colors.placeholdertxtcolor,
  },
  inputSearchStyle: {
    height: (mobileWidth * 10) / 100,
    fontSize: (mobileWidth * 3.5) / 100,
  },
  CardView: {
    width: (mobileWidth * 85) / 100,
    height: (mobileWidth * 45) / 100,
    borderRadius: (mobileWidth * 4) / 100,
    elevation: (mobileWidth * 3) / 100,
    backgroundColor: Colors.whitetxt,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default SignUp;


// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Alert,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import axios from 'axios';
// import moment from 'moment';

// const SignUp = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [Aadhar, setAadhar] = useState('');
//   const [pincode, setPincode] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [state, setState] = useState('');
//   const [country, setCountry] = useState('');
//   const [date, setDate] = useState(new Date());
//   const [gender, setGender] = useState('Male');
//   const [business, setBusiness] = useState('');
//   const [lat, setLat] = useState('');
//   const [long, setLong] = useState('');
//   const [tab, setTab] = useState('Current'); // Worker = 'Current', Owner = 'Owner'

//   const handleSignUp = async () => {
//     try {
//       const role = tab === 'Current' ? 0 : 1;

//       const payload = {
//         user: {
//           email: email,
//           password: password,
//           role: role,
//         },
//         profile: {
//           name: name,
//           mobile: mobile,
//           aadhar_number: Aadhar,
//           pincode: pincode,
//           address: address,
//           city: city,
//           state: state,
//           country: country,
//           date_of_birth: moment(date).format('YYYY-MM-DD'),
//           gender: gender === 'Male' ? 0 : 1,
//           skill: business, // assuming backend accepts skill as string (e.g. 'Plumbing')
//           latitude: lat,
//           longitude: long,
//         },
//       };

//       const response = await axios.post('http://13.235.73.245:3000/api/v1/signup', payload);

//       const data = response.data;

//       if (role === 0) {
//         await AsyncStorage.setItem('workerdata', JSON.stringify(data));
//       } else {
//         await AsyncStorage.setItem('OwnerData', JSON.stringify(data));
//       }

//       Alert.alert('Success', 'Registration successful');
//       navigation.navigate('Home');
//     } catch (error) {
//       console.log('Signup error:', error?.response?.data || error.message);
//       Alert.alert('Error', error?.response?.data?.message || 'Something went wrong');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.heading}>Sign Up</Text>

//       <View style={styles.tabContainer}>
//         <TouchableOpacity
//           onPress={() => setTab('Current')}
//           style={[styles.tab, tab === 'Current' && styles.activeTab]}>
//           <Text style={styles.tabText}>Worker</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={() => setTab('Owner')}
//           style={[styles.tab, tab === 'Owner' && styles.activeTab]}>
//           <Text style={styles.tabText}>Owner</Text>
//         </TouchableOpacity>
//       </View>

//       <TextInput placeholder="Email" style={styles.input} value={email} onChangeText={setEmail} />
//       <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={setPassword} secureTextEntry />
//       <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
//       <TextInput placeholder="Mobile" style={styles.input} value={mobile} onChangeText={setMobile} keyboardType="phone-pad" />
//       <TextInput placeholder="Aadhar" style={styles.input} value={Aadhar} onChangeText={setAadhar} keyboardType="number-pad" />
//       <TextInput placeholder="Pincode" style={styles.input} value={pincode} onChangeText={setPincode} keyboardType="number-pad" />
//       <TextInput placeholder="Address" style={styles.input} value={address} onChangeText={setAddress} />
//       <TextInput placeholder="City" style={styles.input} value={city} onChangeText={setCity} />
//       <TextInput placeholder="State" style={styles.input} value={state} onChangeText={setState} />
//       <TextInput placeholder="Country" style={styles.input} value={country} onChangeText={setCountry} />
//       <TextInput placeholder="Latitude" style={styles.input} value={lat} onChangeText={setLat} keyboardType="decimal-pad" />
//       <TextInput placeholder="Longitude" style={styles.input} value={long} onChangeText={setLong} keyboardType="decimal-pad" />
//       <TextInput placeholder="Skill (e.g., Plumbing)" style={styles.input} value={business} onChangeText={setBusiness} />

//       <TouchableOpacity onPress={handleSignUp} style={styles.submitButton}>
//         <Text style={styles.submitText}>Submit</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   heading: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     alignSelf: 'center',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#aaa',
//     borderRadius: 6,
//     padding: 10,
//     marginVertical: 8,
//   },
//   submitButton: {
//     backgroundColor: '#007bff',
//     padding: 15,
//     marginTop: 20,
//     borderRadius: 6,
//     alignItems: 'center',
//   },
//   submitText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   tabContainer: {
//     flexDirection: 'row',
//     marginBottom: 15,
//     justifyContent: 'center',
//   },
//   tab: {
//     paddingVertical: 8,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//     marginHorizontal: 5,
//     backgroundColor: '#ccc',
//   },
//   activeTab: {
//     backgroundColor: '#007bff',
//   },
//   tabText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });
