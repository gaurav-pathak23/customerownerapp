import { View, Text, Image, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '../../components/Header'
import { Colors } from '../../themestyle/Color'
import Select from '../../components/Select'
import AdditionalServiceCard from '../../components/AdditionalServiceCard'

const AdditionalServicesData = [
  {
    id: 1,
    title: "Bartender",
    price: 250,
    source: require("../../icons/Bartender.png")
  },
  {
    id: 2,
    title: "Waiter",
    price: 350,
    source: require("../../icons/Waiter.png")
  },
]

const Booking = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          {/* //Welcome Location */}
          <View style={styles.welcomeContainer}>
            <View style={styles.centeredView}>
              <Text style={styles.helloText}>HELLO RAJ</Text>
              <Image source={require("../../icons/HandsClapping.png")} />
            </View>
            <View style={styles.centeredView}>
              <Image source={require("../../icons/locationindicator.png")} />
              <Text style={styles.locationText}>Indore, India </Text>
              <Image source={require("../../icons/down.png")} />
            </View>
          </View>
          {/* //Welcome Location */}
          <View>
            <Text style={styles.heading}>Party</Text>
          </View>
          {/* Select */}
          <View style={styles.selectContainer} >
            <Select lable="Food Serving Time" innerText="Select food serving time" />
            <Select lable="Number of people" innerText="Select number of people" />
            <Select lable="Items" innerText="Select items" />
            <Select lable="Occasion" innerText="Select Occasion" />
          </View>
          {/* Select */}

          {/* Additional Services */}
          <View style={styles.addServiceContainer}>
            <View style={styles.subHeading}>
              <Text style={styles.subHeadingText}>Select Additional Services</Text>
              <Text style={{ color: Colors.themcolortxt, fontWeight: 500 }}>View All</Text>
            </View>
            <FlatList
              data={AdditionalServicesData}
              keyExtractor={item => item.id}
              scrollEnabled={false}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between", marginBottom: 16 }}
              renderItem={({ item }) => <AdditionalServiceCard
                title={item.title} price={item.price} source={item.source} />}
            />
          </View>
          {/* Additional Services */}
          {/* Additional Details */}
          <View style={styles.additionalDetails} >
            <View>
              <Text style={{ fontWeight: 600, color: Colors.txtgray }}>Please fill the details</Text>
              <Text style={{ fontSize: 12, color: Colors.txtgray }}>Payable Amount (DETAILS)</Text>
            </View>
            <TouchableOpacity activeOpacity={0.9} style={styles.continueBtn}>
              <Text style={styles.continueBtnText}> Continue</Text>
            </TouchableOpacity>
          </View>
          {/* Additional Details */}
        </View>
      </ScrollView>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 15
  },
  welcomeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10
  },
  helloText: {
    color: Colors.statictext,
    fontWeight: 500,
    fontSize: 12
  },
  locationText: {
    color: Colors.blacktxt
  },
  centeredView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6
  },
  heading: {
    color: Colors.blacktxt,
    fontWeight: 700,
    fontSize: 24,
  },
  selectContainer: {
    gap: 25,
    marginVertical: 20
  },
  addServiceContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  subHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15
  },
  subHeadingText: {
    color: Colors.blacktxt,
    fontSize: 16,
    fontWeight: 500
  },
  additionalDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100
  },
  continueBtn: {
    backgroundColor: Colors.themcolortxt,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  continueBtnText: {
    color: Colors.whitetxt,
  }
})