import { View, Text ,StyleSheet ,Dimensions ,Image ,ImageBackground, TouchableOpacity} from 'react-native'
import React ,{useState}from 'react'
import { Colors, Font } from '../Colorfont/Color';
import { Dropdown } from 'react-native-element-dropdown';

const mobileW = Dimensions.get('window').width;
const mobileH = Dimensions.get('window').height;
   const data2 = [
  { label: 'Hindi', value: '1' },
  { label: 'English', value: '2' },
  { label: 'Dutch', value: '3' },
];
const Language =({navigation})=> {
 
const [isFocus, setIsFocus] = useState(false);
  const [value, setValue] = useState();
  console.log(value,"...................value");
  
  return (
    <View>
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
            <TouchableOpacity onPress={()=>navigation.navigate('SignIn')}>
             <Text style={styles.Language}>Choose Your Language</Text>
             </TouchableOpacity>
                   <View>
                      <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: Colors.whitetxt }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        placeholder="Select Language"
                        iconStyle={styles.iconStyle}
                        placeholderTextColor={Colors.placeholdertxtcolor}
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
                          navigation.navigate('SignIn')
                        }}
                        
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
      }
})
