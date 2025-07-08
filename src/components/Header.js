import React from 'react';
import { View, Text, StyleSheet ,Dimensions, Image,SafeAreaView ,StatusBar ,TextInput ,TouchableOpacity } from 'react-native';
import { Colors } from '../Colorfont/Color';
import { useNavigation, DrawerActions } from '@react-navigation/native';

const mobileWidth = Dimensions.get('window').width;
// import { useNavigation } from '@react-navigation/native';
const Header = ({ title ,value, onChangeText, placeholder = "Search..."}) => {
    console.log(title,"title.......")
      const navigation = useNavigation();
  return (
    <View>
         <SafeAreaView >
                <StatusBar barStyle="light-content" hidden={false} backgroundColor={Colors.bottomcardColor} />
    <View style={styles.container}>
       
        <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:mobileWidth*10/100}}>
        

         <TouchableOpacity  onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
 <Image style={styles.headerlineimage} source={require('../Icons/line.png')}/>
            </TouchableOpacity>
            
            <Image style={styles.headerimages} source={require('../Icons/haathsath.png')}/>

            <Image style={styles.headerbellimage} source={require('../Icons/Bell.png')}/>
        </View>
        <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <View style={styles.searchContainer}>
      <Image
        source={require('../Icons/search.png')}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.whitetxt}
    
      />
    </View>
 <Image style={styles.filterIcon} source={require('../Icons/filtericon.png')}/>

    </View>
      
    </View>
    </SafeAreaView>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop:mobileWidth*0/100,
    height: mobileWidth*35/100,
    backgroundColor:Colors.bottomcardColor,
    justifyContent: 'center',
  
    elevation: 4,
    borderBottomRightRadius:mobileWidth*8/100,
    borderBottomLeftRadius:mobileWidth*8/100
  },
  headerimage:{
      width:mobileWidth*8/100,
      height:mobileWidth*8/100,
      resizeMode:"contain",
      tintColor:Colors.whitetxt,
      flexDirection:"row",
      
  },
  headerimages:{
      width:mobileWidth*10/100,
      height:mobileWidth*10/100,
      resizeMode:"cover",
      
      flexDirection:"row",
      justifyContent:"center"
  },
  headerbellimage:{
      width:mobileWidth*8/100,
      height:mobileWidth*8/100,
      resizeMode:"contain",
      left:mobileWidth*5/100,
      flexDirection:"row",
      justifyContent:"center"
  },
  headerlineimage:{
      width:mobileWidth*8/100,
      height:mobileWidth*8/100,
      resizeMode:"contain",
      right:mobileWidth*5/100,
      flexDirection:"row",
      justifyContent:"center"
  },
  title: {
    color: '#fff',
    fontSize: mobileWidth*3/100,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Colors.bottomcardColor,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
    width:mobileWidth*67/100,
  },
  searchIcon: {
    width: mobileWidth*5/100,
    height:mobileWidth*5/100,
    tintColor:Colors.whitetxt,
    left: mobileWidth*5/100,
  },
  input: {
    flex: 1,
    fontSize: mobileWidth*2/100,
    color:Colors.whitetxt,
    left:mobileWidth*8/100
    
  },
  filterIcon:{
    width:mobileWidth*14/100,
    height:mobileWidth*12/100,
    resizeMode:"contain",
    right:mobileWidth*3/100
  }
});
