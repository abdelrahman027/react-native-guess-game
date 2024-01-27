import { Image, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import Colors from '../util/colors'
import PrimaryButton from '../components/PrimaryButton'

const GameOverScreen = ({ roundsNumber, userNumber, onRestart }) => {
    const { width, height } = useWindowDimensions();


    let imageSize = 300;
    if (width < 370)
    {
        imageSize = 150
    };
    if (height < 400)
    {
        imageSize = 100;
    };
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };
    console.log("width:", width)
    console.log("height:", height)
    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over</Title>
                <View style={[styles.imageContainer, imageStyle]}>
                    <Image style={styles.imageStyle} source={require('../assets/images/success.png')} />
                </View>
                <Text style={styles.summaryText} >Your phone needed <Text style={styles.highlighted}>{roundsNumber} </Text>Rounds to guess number <Text style={styles.highlighted}>{userNumber}.</Text></Text>
                <PrimaryButton onPress={onRestart} >Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    )
}

export default GameOverScreen;


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: 'center'

    },
    imageContainer: {
        overflow: 'hidden',
        borderWidth: 3,
        borderColor: Colors.primary500,
        margin: 36,
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlighted: {
        fontFamily: "Aboreto_400Regular",
        color: Colors.primary400,
    }
})