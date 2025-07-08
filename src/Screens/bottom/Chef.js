import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
 import Header from '../../components/Header';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../Colorfont/Color';
const mobileWidth = Dimensions.get('window').width;
const Vendordata = [
  {
    id: '1',
    family: 'Chef de Cuisine',
    ex:"4+",
    image: require('../../Icons/safeimage.png'),
    rating:"5",
    txt:"seiqua. Ut enim ad minim veniam, qu aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit",
  },
  {
    id: '2',
    family: 'Head cheaf',
      ex:"4+",
   image: require('../../Icons/Headchef.png'),
  txt:"Ut enim ad minim veniam, quist aliquip ex ea commodo consequat. ure dolor in reprehenderit",
rating:"3"
   
  },
  {
    id: '3',
    family: 'Master chef',
      ex:"4+",
      rating:"3.8",
   image: require('../../Icons/safeimage.png'),
  txt:"sed do eiusmod tempo trud exercitation ullamco laboris nisi ut aliquipirure dolor in reprehenderit"

  },
  {
    id: '4',
    family: 'David chef',
    ex:"4+",
    rating:"4",
    image: require('../../Icons/Headchef.png'),
    txt:"sed do eiusmod m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit"

  },
];
const  Chef =({navigation})=> {
  return (
    <View style={{flex:1,backgroundColor:Colors.whitetxt}}>
      <Header/>
       <ScrollView style={{padding:mobileWidth*3/100,}}>
       <View style={{marginBottom:"70%"}}>
          <Text style={{fontSize: mobileWidth * 0.06,
    fontWeight: 'bold',}}> Cook</Text>
                <FlatList
        data={Vendordata}
       
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          marginTop: mobileWidth * 0.04,
        }}
        // columnWrapperStyle={{
        //   justifyContent: 'space-around',
        //   marginBottom: mobileWidth * 0.03,
        // }}
        renderItem={({ item }) => (
           <View style={styles.maincard}>
      <Image source={item.image} style={styles.image} />
      <View style={{padding:mobileWidth*3/100}}>
      <View style={{flexDirection:"row",width:mobileWidth*60/100,}}>
        <View style={{padding:mobileWidth*1/100}}>
           <Text style={{fontSize:mobileWidth*4/100,fontWeight:"700"}}>{item.family}</Text>
          <Text  style={{color:Colors.layercolor,fontSize:mobileWidth*3.5/100,marginTop:mobileWidth*1/100}}>{item.txt}</Text>
          </View>

<Text style={{marginTop:mobileWidth*4/100,fontWeight:"700",
    left:mobileWidth*8/100,fontSize:mobileWidth*4.5/100,color:Colors.blacktxt}}>  {item.ex}{'\n'}
          <Text style={styles.perPlate}>   Exp.</Text>
        </Text>
      </View>
     
     
      
      
      <View style={styles.starRow}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          source={
            i < item.rating
              ? require('../../Icons/satrfull.png')   // Red or colored star
              :  require('../../Icons/starrrr.png')
          }
          style={styles.starIcon}
        />
          
      ))}
      <Text style={styles.ratingText}>{item.rating}/5</Text>
      <TouchableOpacity style={{width:mobileWidth*25/100,height:mobileWidth*7/100,left:mobileWidth*17/100,
        borderRadius:mobileWidth*5/100,backgroundColor:Colors.tabcolor,justifyContent:"center"}}>
      <Text style={{color:Colors.whitetxt,textAlign:"center",fontSize:mobileWidth*4/100}}>Book Now</Text>
      </TouchableOpacity>
    
    </View>
      </View>
      </View>
           )}
      />
      </View>
      </ScrollView>
    </View>
  )
}
export default Chef ;
const styles = StyleSheet.create({
  usertxt: {
    fontSize: (mobileWidth * 4) / 100,
    color: Colors.statictext,
  },
   starRow:{
   flexDirection:"row",
   marginTop:mobileWidth*1/100,
   alignItems:"center"
   
  },
  image: {
    width: mobileWidth * 85/100,
    height: mobileWidth * 45/100,
    resizeMode:"cover",
    borderTopRightRadius: mobileWidth*5/100,
    borderTopLeftRadius:mobileWidth*5/100,
   alignSelf:"center"
  },
   perPlate:{
     fontSize:mobileWidth*3/100,
     fontWeight:"500",
     
    
  },
   
  starIcon:{
   width:mobileWidth*4/100,
   height:mobileWidth*4/100,
   margin:mobileWidth*1/100,
   resizeMode:"contain"
  },
    maincard:{
     margin: mobileWidth * 2.5/ 100,
    borderColor: '#EFF2F1',
    borderWidth: mobileWidth * 0.3 / 100,
    borderRadius: mobileWidth * 5 / 100,
    justifyContent: "center",
    backgroundColor: Colors.whitetxt,
    marginTop: mobileWidth * 0 / 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, },
    width:mobileWidth*85/100,
    padding:mobileWidth*0/100,
    elevation:mobileWidth*0.4/100
},
ratingText:{
  fontSize:mobileWidth*3.5/100,
  color:Colors.blacktxt,
  fontWeight:"500"
}
})