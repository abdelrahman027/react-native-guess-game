import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../util/colors'

const PrimaryButton = ({ children, onPress }) => {

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable style={({ pressed }) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} android_ripple={{ color: Colors.primary500 }} onPress={onPress}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonOuterContainer: {
        overflow: 'hidden',
        margin: 4,
        borderRadius: 28,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.primary400,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: .75
    }
})