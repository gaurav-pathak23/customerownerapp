import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Modal,
  ScrollView,SafeAreaView
} from 'react-native';
import React, { useState ,useEffect} from 'react';
import Header from '../../components/Header';
import { Dropdown } from 'react-native-element-dropdown';
import ImagePicker from 'react-native-image-crop-picker';
import { Colors } from '../../themestyle/Color';
 import { AirbnbRating } from 'react-native-elements';
 import AsyncStorage from '@react-native-async-storage/async-storage';
const mobileWidth = Dimensions.get('window').width;
const Additionalservicesdata = [
  {
    id: '1',
    work: 'Waiters',
    image: require('../../icons/UserCircle.png'),
  },
  {
    id: '2',
    work: 'cleenerss/\nHouse keeping staff',
    image: require('../../icons/Broom.png'),
  },
  {
    id: '3',
    work: 'Dishwashers',
    image: require('../../icons/WashingMachine.png'),
  },
  {
    id: '4',
    work: 'Bartenders',
    image: require('../../icons/BeerStein.png'),
  },
  {
    id: '55',
    work: 'Car ',
    image: require('../../icons/CassetteTape.png'),
  },
  {
    id: '13',
    work: 'Dishwashers',
    image: require('../../icons/WashingMachine.png'),
  },
  {
    id: '14',
    work: 'Beer',
    image: require('../../icons/BeerStein.png'),
  },
  {
    id: '015',
    work: 'bike',
    image: require('../../icons/CassetteTape.png'),
  },
  {
    id: '115',
    work: 'Decoration',
    image: require('../../icons/CassetteTape.png'),
  },
];
const Vendordata = [
  {
    id: '1',
    family: 'Family and friends',
    image: require('../../icons/family.png'),
    name:"relevant section of Cicero as printed in th in brackets were added to Lorem ipsum ",
    rating:"4.75",
    rupees:"₹649",
   platerupees:"52 items/plate"
  },
  {
    id: '2',
    family: 'Party',
    image: require('../../icons/party.png'),
    name:"relevant section of Cicero as printed in the sour brackets were added to Lorem ipsum ",
    rating:"4.75",
    rupees:"₹349 ",
       platerupees:"21 items/plate"

  },
  {
    id: '3',
    family: 'occasions',
    image: require('../../icons/occasions.png'),
    name:"relevant section of Cicero as printed in the low in Lorem ipsum highlighted. Letters in brackets were added to Lorem ipsum ",
    rating:"4.75",
    rupees:"₹149",
       platerupees:"22 items/plate"

  },
  {
    id: '4',
    family: 'Anniversary',
    image: require('../../icons/Anniversary.png'),
    name:"relevant section of Cicero as printed in the source is reproduced belod in Lorem ipsum highlighted. Letters in brackets were added to Lorem ipsum ",
    rating:"4.75",
    rupees:"₹649 ",
       platerupees:"12 items/plate"

  },
];
const Menudata = [
  {
    id: '1',
    maincourse: 'maincourse',
    image: require('../../icons/Plate.png'),
  },
  {
    id: '2',
    maincourse: 'Starters',
    image: require('../../icons/staters.png'),
  },
  {
    id: '3',
    maincourse: 'Cakes',
    image: require('../../icons/cupcake.png'),
  },
  {
    id: '48',
    maincourse: 'Pasta',
    image: require('../../icons/staters.png'),
  },
  {
    id: '56',
    maincourse: 'Starters',
    image: require('../../icons/staters.png'),
  },
  {
    id: '13',
    maincourse: 'Cakes',
    image: require('../../icons/cupcake.png'),
  },
  {
    id: '14',
    maincourse: 'Pasta',
    image: require('../../icons/staters.png'),
  },
  {
    id: '12',
    maincourse: 'Starters',
    image: require('../../icons/staters.png'),
  },
];
const Otherpartydata = [
  {
    id: '1',
    zepimage: require('../../icons/Zepto.png'),
  },
  {
    id: '2',
    zepimage: require('../../icons/blinkit.png'),
  },
  
  
];
const BookedServices = [
  {
    id: '1',
    zepimage: require('../../icons/ac.png'),
    star: require('../../icons/starrrr.png'),
    name:"zet a-c in available",
    rating:"4.75",
    rupees:"₹649",
    miliun:"(1.6M)"
  },
  {
    id: '2',
    zepimage: require('../../icons/cleanerr.png'),
    star: require('../../icons/starrrr.png'),
    name:"instense clining   ",
    rating:"4.78",
    rupees:"₹789",
    miliun:"(3.9M)"
  },
  {
    id: '3',
    zepimage: require('../../icons/lady.png'),
    star: require('../../icons/starrrr.png'),
    name:"Instense clining",
    rating:"4.71",
    rupees:"₹789",
    miliun:"(3.6M)"
  },
  
  
];
const Reviews = [
  {
    id: '1',
    boyimage: require('../../icons/woman.png'),
    name:"the release of Letraset sheets containing Lorem Ipsum pas sages, and more rec ently with desk shing softwa",
    rating: 4,
  },
  {
    id: '2',
    boyimage: require('../../icons/boy.png'),
    name:"the release of Letras oftware like Aldus Page Maker including vers ions of Lorem Ipsum.",
     rating: 3,
  },
 
  
  
];
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

const initialDisplayCount = 5;
const Home = ({ navigation }) => {
  const [expandedId, setExpandedId] = useState(null);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  console.log(selected, '....');

  const [modalVisible, setModalVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [username,setusername] = useState('')
  console.log(username,"customerstoredata/............");
  

    useEffect(() => {
  const fetchData = async () => {
    try {
      const vendorData = await AsyncStorage.getItem('vendorData');
      console.log(vendorData,"vendorData...................");
      
      const customerData = await AsyncStorage.getItem('customerData');
      console.log(customerData,"customerData");
      
      setusername(vendorData.name)
      setusername(customerData.name)

      if (vendorData) {
        console.log('Loaded Vendor Data home screen:', JSON.parse(vendorData));
      }
      if (customerData) {
        console.log('Loaded Customer Data home screen:', JSON.parse(customerData));
      }
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  fetchData();
}, []);
  const displayedServices = showAll
    ? Additionalservicesdata
    : [
        ...Additionalservicesdata.slice(0, initialDisplayCount),
        {
          id: 'see_all',
          work: 'See All',
          image: require('../../icons/righterrow.png'),
          isSeeAll: true,
        },
      ];

  const handlePress = item => {
    if (item.isSeeAll) {
      setShowAll(true);
    } else {
      console.log('Pressed:', item.work);
    }
  };



  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }} edges={['top']} />
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000040',
  }}>
    <View style={{
      maxHeight: '70%',
      width: mobileWidth * 0.95,
      backgroundColor: Colors.whitetxt,
      borderRadius: mobileWidth * 0.05,
      padding: mobileWidth * 0.03,
      elevation: 3,
    }}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setModalVisible(false)}
        style={{ alignSelf: 'flex-end' }}
      >
        <Image
          source={require('../../icons/cross.png')}
          style={{
            width: mobileWidth * 0.08,
            height: mobileWidth * 0.08,
          }}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={styles.headerText}>No. of People (5+ Years)</Text>
      <Text style={styles.subText}>
        We'll allow up to two extra people for free in case of any last-minute changes
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
              selected?.toString() === item?.toString() && styles.selected,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text
              style={[
                styles.text,
                selected?.toString() === item?.toString() && styles.selectedText,
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

      <Header navigation={navigation} />
      {/* <ScrollView style={{marginBottom:mobileWidth*38/100}}> */}
      <ScrollView
  showsVerticalScrollIndicator={false}
  contentContainerStyle={{ paddingBottom:"26%", flexGrow: 1 }}
>
        <View style={{ padding: (mobileWidth * 3.6) / 100 }}>
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
          >
            <Text style={styles.usertxt}>..{username}</Text>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: (mobileWidth * 2) / 100,
            }}
          >
            <Text
              style={[
                styles.usertxt,
                {
                  color: Colors.blacktxt,
                  fontWeight: '700',
                  fontSize: (mobileWidth * 3.7) / 100,
                },
              ]}
            >
              Our Services
            </Text>
            <Text style={[styles.usertxt, { color: Colors.tabcolor,right:mobileWidth*1/100 }]}>
              See All
            </Text>
          </View>
          <FlatList
            data={Vendordata}
            numColumns={2}
            renderItem={({ item, index }) => (
              <View
                style={{
                  borderWidth: (mobileWidth * 0.01) / 100,
                  backgroundColor: Colors.whitetxt,
                  padding: (mobileWidth * 0) / 100,
                  elevation: 0,
                  borderRadius: (mobileWidth * 5) / 100,
                  width: (mobileWidth * 45) / 100,
                  minHeight: (mobileWidth * 53) / 100,
                  margin: mobileWidth*1/100,
                  shadowColor: '#000',
                  shadowOffset: { width: 0 },
                  shadowOpacity: 0.1,
                }}
              >
                <Image
                  resizeMode="cover"
                  style={{
                    width: (mobileWidth * 37) / 100,
                    height: (mobileWidth * 29) / 100,
                    borderRadius: (mobileWidth * 2) / 100,
                    padding: (mobileWidth * 2) / 100,
                    marginTop:mobileWidth*2/100,
                    alignSelf:"center",
                    
                  }}
                  source={item.image}
                ></Image>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: (mobileWidth * 3.5) / 100,
                    fontWeight: '500',
                    marginTop:mobileWidth*1/100}}>
                  {item.family}
                </Text>
                <TouchableOpacity
                  style={{
                    borderWidth: (mobileWidth * 0.1) / 100,
                    width: (mobileWidth * 30) / 100,
                    borderRadius: (mobileWidth * 2) / 100,
                    alignItems: 'center',
                    alignSelf: 'center',
                    height: (mobileWidth * 7) / 100,
                    flexDirection: 'row',
                    marginTop:mobileWidth*1/100
                  }}
                >
                  <Text
                    style={[
                      {
                        left: (mobileWidth * 2) / 100,
                        fontSize: (mobileWidth * 3) / 100,
                      },
                      selected ? { left: (mobileWidth * 8) / 100 } : null,
                    ]}
                  >
                    {selected ? selected : 'Up to 9 persons'}
                  </Text>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image
                      style={[
                        {
                          left: (mobileWidth * 4) / 100,
                        },
                        selected ? { left: (mobileWidth * 15) / 100 } : null,
                      ]}
                      source={require('../../icons/down.png')}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Menudetails', { item,selected} )}
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: (mobileWidth * 1) / 100,
                  }}
                >
                  <Text style={{ color: Colors.tabcolor }}>Go to the Menu</Text>
                  <Image
                    style={{
                      alignSelf: 'center',
                      left: (mobileWidth * 2) / 100,
                    }}
                    source={require('../../icons/errrroorw.png')}
                  />
                </TouchableOpacity>
              </View>
            )}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: (mobileWidth * 2) / 100,
            }}
          >
            <Text
              style={[
                styles.usertxt,
                {
                  color: Colors.blacktxt,
                  fontWeight: '700',
                  fontSize: (mobileWidth * 3) / 100,
                },
              ]}
            >
              Menu Categories
            </Text>
            <Text style={[styles.usertxt, { color: Colors.tabcolor,right:mobileWidth*1/100 }]}>
              See All
            </Text>
          </View>

          <FlatList
            data={Menudata}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ right:mobileWidth*2/100,marginTop:mobileWidth*1/100,alignItems:"center" }}
            renderItem={({ item, index }) => (
              <View>
                <Image
                  resizeMode="contain"
                  style={{
                    width: (mobileWidth * 26) / 100,
                    height: (mobileWidth * 22) / 100,
                    borderRadius: (mobileWidth * 2) / 100,
                    margin: (mobileWidth * 0) / 100,
                  }}
                  source={item.image}
                ></Image>
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: (mobileWidth * 3.2) / 100,
                    fontWeight: '000',
                    marginTop:mobileWidth*1/100
                  }}
                >
                  {item.maincourse}
                </Text>
              </View>
            )}
          />
        </View>
        <View
          style={{
            backgroundColor: '#DEF6EF',
            marginBottom: (mobileWidth * 2) / 100,
            minHeight: (mobileWidth * 14) / 100,
            padding: (mobileWidth * 0) / 100,
          }}
        >
          <Text style={styles.heading}>Additional Services</Text>

          <FlatList
            data={displayedServices}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              alignItems: 'center',
              padding: (mobileWidth * 0) / 100,
              paddingHorizontal: (mobileWidth * 3) / 100,
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignItems: 'center',
                  margin: (mobileWidth * 3) / 100,
                }}
              >
                <TouchableOpacity
                  onPress={() => handlePress(item)}
                  style={{
                    width: (mobileWidth * 9) / 100,
                    left: (mobileWidth * 0) / 100,
                    height: (mobileWidth * 9) / 100,
                    justifyContent: 'center',
                    borderRadius: (mobileWidth * 8) / 100,
                    backgroundColor: Colors.tabcolor,
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: (mobileWidth * 6) / 100,
                      height: (mobileWidth * 6) / 100,
                      borderRadius: (mobileWidth * 2) / 100,
                      margin: (mobileWidth * 0) / 100,
                      alignSelf: 'center',
                    }}
                    source={item.image}
                  ></Image>
                </TouchableOpacity>
                <Text
                  style={{
                    textAlign: 'center',
                    alignItems: 'center',
                    fontSize: (mobileWidth * 3) / 100,
                  }}
                >
                  {item.work}
                </Text>
              </View>
            )}
          />
        </View>
        <View style={{ padding: (mobileWidth * 0) / 100 }}>
        <Text style={styles.heading}>Other Parties</Text>
       
         <FlatList
            data={Otherpartydata}
             numColumns={2}
             showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{
              // alignItems: 'center',
              padding: (mobileWidth * 0) / 100,
              paddingHorizontal: (mobileWidth * 2) / 100,
              marginBottom:mobileWidth*0/100
            }}
            renderItem={({ item, index }) => (
              <View
                style={{
                  alignItems: 'center',
                  margin: (mobileWidth * 2) / 100,
                }}
              >
                <TouchableOpacity
                 
                  style={{
                    width: (mobileWidth * 42) / 100,
                    left: (mobileWidth * 0) / 100,
                    height: (mobileWidth * 13) / 100,
                    justifyContent: 'center',
                    borderRadius: (mobileWidth * 3) / 100,
                    backgroundColor: Colors.whitetxt,
                    borderWidth:mobileWidth*0.4/100,
                   borderColor:Colors.placeholdertxtcolor
                  }}
                >
                  <Image
                    resizeMode="contain"
                    style={{
                      width: (mobileWidth * 25) / 100,
                      height: (mobileWidth * 18) / 100,
                      borderRadius: (mobileWidth * 2) / 100,
                      margin: (mobileWidth * 0) / 100,
                      alignSelf: 'center',
                    }}
                    source={item.zepimage}
                  ></Image>
                </TouchableOpacity>
                
              </View>
            )}
          />
                  <Text style={styles.heading}>Most Booked Services</Text>
                  <FlatList
            data={BookedServices}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingHorizontal: mobileWidth*5/100,
              marginTop:mobileWidth*2/100, }}
            renderItem={({ item, index }) => (
              <View style={{marginBottom:mobileWidth*5/100}}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: (mobileWidth * 35) / 100,
                    height: (mobileWidth * 25) / 100,
                    borderRadius: (mobileWidth * 2) / 100,
                    margin: (mobileWidth * 0) / 100,
                  }}
                  source={item.zepimage}
                ></Image>
                <Text style={{textAlign:"center"}}>{item.name}</Text>
               
                <View style={{flexDirection:"row",left:mobileWidth*3/100}}>
                 <Image
                  resizeMode="contain"
                  style={{
                    width: (mobileWidth * 3) / 100,
                    height: (mobileWidth * 3) / 100,
                    borderRadius: (mobileWidth * 2) / 100,
                    margin: (mobileWidth * 0) / 100,
                    alignSelf:"center",
                    tintColor:"gray"
                  }}
                  source={item.star}
                />
                <Text style={[styles.rupesstxt,{left:mobileWidth*2/100}]}>{item.rating}</Text>
                 <Text style={[styles.rupesstxt,{left:mobileWidth*4/100}]}>
                  {item.miliun}</Text>
                </View>
                <Text style={styles.rupesstxt}>{item.rupees}</Text>
              </View>
            )}
          />
                  <Text style={styles.heading}>Reviews</Text>
                

<FlatList 
  data={Reviews}
  numColumns={2}
  showsHorizontalScrollIndicator={false}
  keyExtractor={item => item.id}
  contentContainerStyle={{ paddingHorizontal: mobileWidth*5/100 ,justifyContent:"center"}}
  renderItem={({ item }) => (
    <View style={{ marginBottom: mobileWidth * 1 / 100,margin:mobileWidth*2/100}}>
      <Image
        resizeMode="contain"
        style={{
          width: (mobileWidth * 40) / 100,
          height: (mobileWidth * 35) / 100,
          borderTopLeftRadius: (mobileWidth * 2) / 100,
          borderTopRightRadius:mobileWidth*2/100,
          right:mobileWidth*0/100
        }}
        source={item.boyimage}
      />
      <View style={{minHeight:mobileWidth*35/100,borderBottomLeftRadius:mobileWidth*2/100,borderBottomRightRadius:mobileWidth*2/100,
      elevation:mobileWidth*0.1/100,padding:mobileWidth*1/100,
        backgroundColor:Colors.cardbackgroungcolor,marginTop:mobileWidth*0/100,margin:mobileWidth*0/100,width:mobileWidth*40/100}}>
      <Text numberOfLines={0} style={{ margin:mobileWidth*1/100}}>{item.name}</Text>
      <View style={styles.starRow}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Image
          key={i}
          source={
            i < item.rating
              ? require('../../icons/satrfull.png')    // Red or colored star
              : require('../../icons/starrrr.png')  // Gray or empty star
          }
          style={styles.starIcon}
        />
      ))}
    </View>
    </View>

     
    </View>
  )}
/>

                  
 
        </View>
      </ScrollView>

      {/* <BottomNavigator/> */}
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  usertxt: {
    fontSize: (mobileWidth * 3.7) / 100,
    color: Colors.statictext,

  },
  rupesstxt:{
  fontSize:mobileWidth*3.5/100,
  left:mobileWidth*3/100
  },
  starRow:{
   flexDirection:"row",
   padding:mobileWidth*1/100
  },
  starIcon:{
   width:mobileWidth*4/100,
   height:mobileWidth*4/100,
   margin:mobileWidth*0.1/100,
   resizeMode:"contain"
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
  selected: {
    backgroundColor: '#d9f2ef', // light teal like in your image
    borderColor: Colors.placeholdertxtcolor,
  },
  text: {
    fontSize: (mobileWidth * 4) / 100,
    color: '#222',
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
  heading: {
    fontSize: (mobileWidth * 3.7) / 100,
    fontWeight: '700',
    color: Colors.blacktxt,
    left:mobileWidth*4/100,
    marginTop: (mobileWidth * 3) / 100,
    marginBottom:mobileWidth*2/100
  },
});
