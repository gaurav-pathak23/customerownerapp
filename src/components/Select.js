import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../Colorfont/Color'

const Select = ({ lable, innerText }) => {
    return (
        <View style={styles.container} >
            <Text style={styles.label} >{lable} </Text>
            <View style={styles.selectWrapper}>
                <Text style={styles.innerText}>{innerText}</Text>
                <Image source={lable == "Food Serving Time" ? require("../Icons/Clock.png") : require("../Icons/down.png")} />
            </View>
            {
                lable == "Food Serving Time" && <View style={styles.bottom}>
                    <Text style={styles.bottomText}>
                        Our chef arrives well in advance of serving time to ensure
                        the timely preparation of your food.
                    </Text>
                </View>
            }
        </View>
    )
}

export default Select;

const styles = StyleSheet.create({
    container: {
        gap: 10
    },
    label: {
        color: Colors.blacktxt,
        fontSize: 16,
        fontWeight: 500
    },
    innerText: {
        color: Colors.innerText,
    },
    selectWrapper: {
        height: 40,
        borderWidth: 1,
        borderColor: Colors.border,
        borderRadius: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 15
    },
    bottom: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        backgroundColor: "lightgray",
        borderWidth: 1,
        borderColor: "lightgray",
        borderRadius: 4,
    },
    bottomText: {
        color: Colors.blacktxt,
        fontSize: 12,
    }
})