import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../util/colors'


const Card = ({ children }) => {
    return (
        <View style={styles.inputContainer}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        alignItems: 'center',
        marginHorizontal: 24,
        marginTop: 36,
        padding: 16,
        backgroundColor: Colors.primary500,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})