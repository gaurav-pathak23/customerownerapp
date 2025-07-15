import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import Header from './components/Header';
const mobileWidth = Dimensions.get('window').width;
import { Colors } from './themestyle/Color';
const peopleOptions = [
  '2-3',
  '4-6',
  '7-9',
  '10-20',
  '21-30',
  '31-40',
  '41-50',
  '51-60',
  '61-70',
  '71-80',
  '81-90',
  '91-100',
];

const Menudetails = ({ route }) => {
  const { item, selected } = route.params; // You get full item here
  console.log(item, selected, 'item .............................');
  const [value, setvalue] = useState(selected);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <Header />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#00000040',
          }}
        >
          <View
            style={{
              maxHeight: '70%',
              width: mobileWidth * 0.95,
              backgroundColor: Colors.whitetxt,
              borderRadius: mobileWidth * 0.05,
              padding: mobileWidth * 0.03,
              elevation: 3,
            }}
          >
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setModalVisible(false)}
              style={{ alignSelf: 'flex-end' }}
            >
              <Image
                source={require('../src/icons/cross.png')}
                style={{
                  width: mobileWidth * 0.08,
                  height: mobileWidth * 0.08,
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>

            <Text style={styles.headerText}>No. of People (5+ Years)</Text>
            <Text style={styles.subText}>
              We'll allow up to two extra people for free in case of any
              last-minute changes
            </Text>

            <FlatList
              data={peopleOptions}
              numColumns={3}
              keyExtractor={(item, index) => index.toString()}
              showsVerticalScrollIndicator={true}
              contentContainerStyle={{
                marginTop: mobileWidth * 0.04,
              }}
              columnWrapperStyle={{
                justifyContent: 'space-around',
                marginBottom: mobileWidth * 0.03,
              }}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.option,
                    value?.toString() === item?.toString() && styles.value,
                  ]}
                  onPress={() => setvalue(item)}
                >
                  <Text
                    style={[
                      styles.text,
                      value?.toString() === item?.toString() &&
                        styles.selectedText,
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: (mobileWidth * 8) / 100,
          paddingLeft: (mobileWidth * 8) / 100,
        }}
      >
        <Text style={styles.title}>{item.family}</Text>

        <TouchableOpacity
          style={{
            borderWidth: (mobileWidth * 0.1) / 100,
            width: (mobileWidth * 25) / 100,
            borderRadius: (mobileWidth * 2) / 100,
            alignItems: 'center',
            alignSelf: 'center',
            height: (mobileWidth * 7) / 100,
            flexDirection: 'row',
            marginTop: (mobileWidth * 1) / 100,
          }}
        >
          <Text
            style={[
              {
                left: (mobileWidth * 2) / 100,
                fontSize: (mobileWidth * 2.7) / 100,
                marginTop: (mobileWidth * -0.2) / 100,
              },
              value ? { left: (mobileWidth * 3) / 100 } : null,
            ]}
          >
            {value ? value : 'Up to 9 persons'}
          </Text>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={[
                {
                  left: (mobileWidth * 2) / 100,
                },
                value ? { left: (mobileWidth * 10) / 100 } : null,
              ]}
              source={require('../src/icons/down.png')}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.maincard}>
        <Image source={item.image} style={styles.image} />
        <View style={{ padding: (mobileWidth * 3) / 100 }}>
          <View
            style={{ flexDirection: 'row', width: (mobileWidth * 60) / 100 }}
          >
            <View style={{ padding: (mobileWidth * 1) / 100 }}>
              <Text
                style={{ fontSize: (mobileWidth * 4) / 100, fontWeight: '700' }}
              >
                {item.platerupees}
              </Text>
              <Text
                style={{
                  color: Colors.layercolor,
                  fontSize: (mobileWidth * 3.5) / 100,
                  marginTop: (mobileWidth * 2) / 100,
                }}
              >
                {item.name}
              </Text>
            </View>

            <Text
              style={{
                marginTop: (mobileWidth * 4) / 100,
                fontWeight: '700',
                left: (mobileWidth * 4) / 100,
                fontSize: (mobileWidth * 4.5) / 100,
                color: Colors.blacktxt,
              }}
            >
              {' '}
              {item.rupees}
              {'\n'}
              <Text style={styles.perPlate}>per Plate</Text>
            </Text>
          </View>

          <View style={styles.starRow}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Image
                key={i}
                source={
                  i < item.rating
                    ? require('../src/icons/satrfull.png') 
                    : require('../src/icons/starrrr.png') 
                }
                style={styles.starIcon}
              />
            ))}
            <TouchableOpacity
              style={{
                width: (mobileWidth * 17) / 100,
                height: (mobileWidth * 7) / 100,
                left: (mobileWidth * 32) / 100,
                borderRadius: (mobileWidth * 5) / 100,
                backgroundColor: Colors.tabcolor,
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  color: Colors.whitetxt,
                  textAlign: 'center',
                  fontSize: (mobileWidth * 4) / 100,
                }}
              >
                View
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Menudetails;

const styles = StyleSheet.create({
  container: {
    padding: mobileWidth * 0.05,
    alignItems: 'center',
  },
  maincard: {
    margin: (mobileWidth * 8) / 100,
    borderColor: '#EFF2F1',
    borderWidth: (mobileWidth * 0.3) / 100,
    borderRadius: (mobileWidth * 5) / 100,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: (mobileWidth * 0) / 100,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0 },
    width: (mobileWidth * 85) / 100,
    padding: (mobileWidth * 0) / 100,
    elevation: (mobileWidth * 1) / 100,
  },

  perPlate: {
    fontSize: (mobileWidth * 3) / 100,
    fontWeight: '400',
  },
  option: {
    backgroundColor: '#f2f2f2',
    borderRadius: (mobileWidth * 2.5) / 100,
    width: (mobileWidth * 25) / 100,
    height: (mobileWidth * 12) / 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.placeholdertxtcolor,
    margin: (mobileWidth * 1) / 100,
    borderWidth: (mobileWidth * 0.5) / 100,
  },
  image: {
    width: (mobileWidth * 85) / 100,
    height: (mobileWidth * 45) / 100,
    resizeMode: 'cover',
    borderTopRightRadius: (mobileWidth * 5) / 100,
    borderTopLeftRadius: (mobileWidth * 5) / 100,
    alignSelf: 'center',
  },
  title: {
    fontSize: mobileWidth * 0.06,
    fontWeight: 'bold',
    marginVertical: mobileWidth * 0.04,
  },
  text: {
    fontSize: mobileWidth * 0.045,
    textAlign: 'center',
  },
  starRow: {
    flexDirection: 'row',
    marginTop: (mobileWidth * 3.5) / 100,
  },

  starIcon: {
    width: (mobileWidth * 4) / 100,
    height: (mobileWidth * 4) / 100,
    margin: (mobileWidth * 1) / 100,
    resizeMode: 'contain',
  },
  selectedText: {
    color: '#0fa78f',
    fontWeight: '600',
    fontSize: (mobileWidth * 4) / 100,
  },
  headerText: {
    fontSize: (mobileWidth * 4.3) / 100,
    fontWeight: '600',
  },
  subText: {
    color: Colors.subtxtcolor,
    fontSize: (mobileWidth * 3.5) / 100,
  },
});
