import { View, Text ,StyleSheet ,Dimensions ,Image ,ImageBackground, TouchableOpacity, StatusBar} from 'react-native'
import React ,{useState}from 'react'
import { Colors, Font } from '../themestyle/Color';
import { Dropdown } from 'react-native-element-dropdown';
import { Lang_chg } from '../language/Language_provider';
import { config } from '../language/configProvider';
const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;
   const data2 = [
  { label: 'English', value: '0' },  // index 0
  { label: 'Hindi', value: '1' },    // index 1
];
const Language =({navigation})=> {
 const [language, setlanguage] = useState('Select language*');
const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();
  console.log(value,"...................value");
//Abhi
  //  language selection code 
//   const setSelectedIndex1 = (item ,index) => {
// console.log('-----------------',item);
//     for(let i=0;i<=languages.length;i++){
//       if(item.code=="en"){
//         config.language = 0
//         setlanguage('English') 
//       } if(item.code=="hi"){
//         config.language = 1
//         setlanguage('हिंदी') 
//       }
//     }
//     languages.forEach((elem) => {
//       elem.toggle = false
//       if (elem.id === item.id) {
//         elem.toggle = true
//         // setlanguage(elem.name)
//         setlanguageId(elem.id)  } })

//     setlanguages([...languages]);
//   }; 
  
  return (
    <View>
          <ImageBackground
            source={require('../icons/splashscreen.png')}
            style={styles.background}
            resizeMode="cover"
          >
             <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.layercolor} />
            <Image
              resizeMode="contain"
              style={styles.image}
              source={require('../icons/haathsath.png')}/>
             <Text style={styles.Language}>Choose Your Language</Text>
          
                   <View>
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: Colors.whitetxt }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Language"
                        iconStyle={styles.iconStyle}
                        placeholderTextColor={Colors.loremtxt}
                        data={data2}
                        search
                        Mode={"outlined"}
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        
                        searchPlaceholder=" Select Language"
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                          setValue(item.value);
                          setIsFocus(false);
                          config.language = Number(item.value);
                          navigation.navigate('SignIn')
                        }}
                        renderRightIcon={() => (
                                <Image
                                  source={require('../icons/dropppp.png')}
                                  style={styles.customIcon}
                                />
                              )}
                        
                      />
                    </View>
          </ImageBackground>
        </View>
  )
}
export default Language ;
const styles = StyleSheet.create({
text:{
width:mobileW*5/100
},
background: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  image: {
    alignSelf: 'center',
    width: mobileW * 40/100,
    height: mobileW * 40/100,
  },
  selectedTextStyle:{
    color:Colors.whitetxt,
    fontSize:mobileW*3/100
  },
   dropdown: {
  height: mobileW * 10 / 100,
    width: mobileW * 82 / 100,
    alignSelf: 'center',
    borderWidth: mobileW * 0.2 / 100,
    borderColor: Colors.whitetxt,
    borderRadius: mobileW * 2 / 100,
    paddingHorizontal: mobileW * 3 / 100,
   },
    placeholderStyle: {
    fontSize: mobileW * 3/ 100,
    marginHorizontal: mobileW * 1 / 100,
    color:Colors.placeholdertxtcolor
  },
  inputSearchStyle: {
    height: mobileW * 10 / 100,
    fontSize: mobileW * 3.5 / 100,
    
  },
  Language:{
    color:Colors.whitetxt,
    fontSize:mobileW*5/100,
    fontFamily:Font.Fonttext,
    textAlign:"center",
     padding:mobileW*3/100,
     fontWeight:"500",
     marginTop:mobileW*3/100
      },
      customIcon:{
   width:mobileW*2.2/100,
   height:mobileW*2.2/100,
   right:mobileW*4/100
  },
})
