import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../Colorfont/Color';

const MenuItem = ({ id, title, icon }) => {
  return (
    <TouchableOpacity
      key={id}
      activeOpacity={0.9}
      style={styles.menuItem}>
      <View style={styles.menuItemLeft}>
        <View style={{width:30,alignItems :"center"}}>
          <Image source={icon} />
        </View>
        <Text style={styles.menuItemText}>{title}</Text>
      </View>
      <Image source={require("../../Icons/rightArrow.png")} />
    </TouchableOpacity>
  )
}

const Profile = ({ navigation }) => {
  const profileData = {
    name: 'Josh Hazelwood',
    phoneNumber: '+91 1234567890',
    profileImage: 'https://placehold.co/100x100/E0E0E0/333333?text=Profile',
  };
  const menuItems = [
    { id: '1', title: 'Manage Address', icon: require("../../Icons/locationindicator.png") },
    { id: '2', title: 'My Payments', icon: require("../../Icons/wallet.png") },
    { id: '3', title: 'Refer & Earn', icon: require("../../Icons/share.png") },
    { id: '4', title: 'Rate Us', icon: require("../../Icons/star.png") },
    { id: '5', title: 'About HaathSaath', icon: require("../../Icons/logoicon.png") },
    { id: '6', title: 'Logout', icon: require("../../Icons/logout.png") },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={styles.profileInfoContainer}>
        <View >
          <Image
            style={styles.profileImage}
            source={require("../../Icons/profilepic.png")} />
        </View>
        <View style={styles.profileTextContainer}>
          <Text style={styles.profileName}>{profileData.name}</Text>
          <Text style={styles.profilePhone}>{profileData.phoneNumber}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.9} style={styles.editButton}>
          <Image source={require("../../Icons/edit.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.menuContainer}>
        {menuItems.map((item) => (
          <MenuItem {...item} />
        ))}
      </View>
    </View>
  )
}
export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 30
  },
  header: {
    paddingTop: 50,
    paddingBottom: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 700,
    color: Colors.layercolor,
  },
  profileInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#EBEBEB",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileTextContainer: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 600,
    color: '#172C32',
  },
  profilePhone: {
    fontSize: 12,
    fontWeight: 500,
    color: '#172C32',
    marginTop: 4,
  },
  editButton: {
    width: 45,
    height: 45,
    borderRadius: "50%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuContainer: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    gap: 10
  },
  menuItemText: {
    fontSize: 16,
     fontWeight: 500,
    color: '#4D4D4D',
  },
})