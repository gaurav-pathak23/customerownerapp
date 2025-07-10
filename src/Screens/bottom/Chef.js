import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { Colors } from '../../Colorfont/Color';
const mobileWidth = Dimensions.get('window').width;
const Vendordata = [
  {
    id: '1',
    family: 'Chef de Cuisine',
    ex: '4+',
    image: require('../../Icons/safeimage.png'),
    rating: '5',
    txt: 'seiqua. Ut enim ad minim veniam, qu aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    id: '2',
    family: 'Head cheaf',
    ex: '4+',
    image: require('../../Icons/Headchef.png'),
    txt: 'Ut enim ad minim veniam, quist aliquip ex ea commodo consequat. ure dolor in reprehenderit',
    rating: '3',
  },
  {
    id: '3',
    family: 'Master chef',
    ex: '4+',
    rating: '3.8',
    image: require('../../Icons/safeimage.png'),
    txt: 'sed do eiusmod tempo trud exercitation ullamco laboris nisi ut aliquipirure dolor in reprehenderit',
  },
  {
    id: '4',
    family: 'David chef',
    ex: '4+',
    rating: '4',
    image: require('../../Icons/Headchef.png'),
    txt: 'sed do eiusmod m, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
];
const Chef = ({ navigation }) => {
  return (
    <View style={styles.MAinview}>
      <Header />
      <ScrollView style={{ padding: (mobileWidth * 3) / 100 }}>
        <View style={styles.bottomviewmanage}>
          <Text style={styles.cooktext}> Cook</Text>
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
                <View style={{ padding: (mobileWidth * 3) / 100 }}>
                  <View style={styles.Vendordatamanageview}>
                    <View style={{ padding: (mobileWidth * 1) / 100 }}>
                      <Text style={styles.familytxt}>{item.family}</Text>
                      <Text
                        style={{
                          color: Colors.layercolor,
                          fontSize: (mobileWidth * 3.5) / 100,
                          marginTop: (mobileWidth * 1) / 100,
                        }}
                      >
                        {item.txt}
                      </Text>
                    </View>

                    <Text style={styles.exptxt}>
                      {' '}
                      {item.ex}
                      {'\n'}
                      <Text style={styles.perPlate}> Exp.</Text>
                    </Text>
                  </View>

                  <View style={styles.starRow}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Image
                        key={i}
                        source={
                          i < item.rating
                            ? require('../../Icons/satrfull.png') // Red or colored star
                            : require('../../Icons/starrrr.png')
                        }
                        style={styles.starIcon}
                      />
                    ))}
                    <Text style={styles.ratingText}>{item.rating}/5</Text>
                    <TouchableOpacity style={styles.bookbutton}>
                      <Text style={styles.booktxt}>Book Now</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Chef;
const styles = StyleSheet.create({
  usertxt: {
    fontSize: (mobileWidth * 4) / 100,
    color: Colors.statictext,
  },
  MAinview: { flex: 1, backgroundColor: Colors.whitetxt },
  starRow: {
    flexDirection: 'row',
    marginTop: (mobileWidth * 1) / 100,
    alignItems: 'center',
  },
  Vendordatamanageview: {
    flexDirection: 'row',
    width: (mobileWidth * 60) / 100,
  },
  bottomviewmanage: { marginBottom: '70%' },
  exptxt: {
    marginTop: (mobileWidth * 4) / 100,
    fontWeight: '700',
    left: (mobileWidth * 8) / 100,
    fontSize: (mobileWidth * 4.5) / 100,
    color: Colors.blacktxt,
  },
  familytxt: { fontSize: (mobileWidth * 4) / 100, fontWeight: '700' },
  booktxt: {
    color: Colors.whitetxt,
    textAlign: 'center',
    fontSize: (mobileWidth * 4) / 100,
  },
  image: {
    width: (mobileWidth * 85) / 100,
    height: (mobileWidth * 45) / 100,
    resizeMode: 'cover',
    borderTopRightRadius: (mobileWidth * 5) / 100,
    borderTopLeftRadius: (mobileWidth * 5) / 100,
    alignSelf: 'center',
  },
  perPlate: {
    fontSize: (mobileWidth * 3) / 100,
    fontWeight: '500',
  },
  cooktext: { fontSize: mobileWidth * 0.06, fontWeight: 'bold' },

  starIcon: {
    width: (mobileWidth * 4) / 100,
    height: (mobileWidth * 4) / 100,
    margin: (mobileWidth * 1) / 100,
    resizeMode: 'contain',
  },
  maincard: {
    margin: (mobileWidth * 2.5) / 100,
    borderColor: '#EFF2F1',
    borderWidth: (mobileWidth * 0.3) / 100,
    borderRadius: (mobileWidth * 5) / 100,
    justifyContent: 'center',
    backgroundColor: Colors.whitetxt,
    marginTop: (mobileWidth * 0) / 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0 },
    width: (mobileWidth * 85) / 100,
    padding: (mobileWidth * 0) / 100,
    elevation: (mobileWidth * 0.4) / 100,
  },
  ratingText: {
    fontSize: (mobileWidth * 3.5) / 100,
    color: Colors.blacktxt,
    fontWeight: '500',
  },
  bookbutton: {
    width: (mobileWidth * 25) / 100,
    height: (mobileWidth * 7) / 100,
    left: (mobileWidth * 17) / 100,
    borderRadius: (mobileWidth * 5) / 100,
    backgroundColor: Colors.tabcolor,
    justifyContent: 'center',
  },
});
