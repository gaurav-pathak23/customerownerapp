import { View, Text ,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

import Header from '../../components/Header'
const  Profile =({navigation})=> {
  return (
    <View>
      <Header/>
     
<TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Text style={styles.profileText}>Profile (Tap to Open Drawer)</Text>
      </TouchableOpacity>
    </View>
  )
}
export default Profile;
const styles = StyleSheet.create({

})