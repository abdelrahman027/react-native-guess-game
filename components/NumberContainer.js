import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../util/colors'

const NumberContainer = ({ children }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText} >{children}</Text>
        </View>
    )
}

export default NumberContainer
const deviceWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Colors.secondary500,
        padding: deviceWidth < 450 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 450 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    numberText: {
        color: Colors.secondary500,
        fontSize: 36,
        fontWeight: 'bold'
    },
})