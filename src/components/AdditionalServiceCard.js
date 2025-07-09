import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../Colorfont/Color'

export default function AdditionalServiceCard({ title, price, source }) {
    const [count, setCount] = useState(1)
    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image style={styles.img} source={source} />
            </View>
            <View style={{ gap: 4 }}>
                <Text style={styles.label} >{title} </Text>
                <Text style={styles.price}>{`₹${price}/${title}`}</Text>
            </View>
            <View style={styles.countContainer}>
                <TouchableOpacity disabled={count==1} activeOpacity={0.9} onPress={()=>setCount(count-1)}>
                    <Image source={require("../Icons/Minus.png")} />
                </TouchableOpacity>
                <Text style={styles.count}>{count} </Text>
                <TouchableOpacity activeOpacity={0.9} onPress={()=>setCount(count+1)}>
                    <Image source={require("../Icons/Plus.png")} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 240,
        width: "48%",
        borderWidth: 1,
        borderRadius: 16,
        borderColor: "#0A0A0B1A",
        alignItems: "center",
        gap: 10,
        justifyContent: "center",
    },
    imgContainer: {
        width: 164,
        height: 120,
        overflow: "hidden"
    },
    img: {
        width: "100%"
    },
    countContainer: {
        height: 32,
        width: 96,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",
        borderWidth: 1,
        borderColor: "#C8D0FD",
        borderRadius: 100,
    },
    label: {
        color: Colors.statictext,
        textAlign: "center",
        fontWeight: 600
    },
    price: {
        color: "#4D4D4D"
    },
    count: {
        color: "#283891"
    }
})