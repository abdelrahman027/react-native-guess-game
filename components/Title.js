import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../util/colors'

const Title = ({ children }) => {
    return (
        <View>
            <Text style={styles.title}>{children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Aboreto_400Regular',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        // maxWidth: '80%',
        // width: 300,
    }
})