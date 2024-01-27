import { Alert, FlatList, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import NumberContainer from '../components/NumberContainer';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../util/colors';
import Card from '../components/Card';
import { Ionicons } from '@expo/vector-icons'
import GuessLogItem from '../components/GuessLogItem';





function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude)
    {
        return generateRandomBetween(min, max, exclude);
    } else
    {
        return rndNum;
    }
}
let minBoundary = 1;
let maxBoundary = 100;
const GameScreen = ({ userNumber, onGameOver }) => {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);
    const { width, height } = useWindowDimensions()

    useEffect(() => {
        if (currentGuess === userNumber)
        {
            onGameOver(guessRounds.length)
        }
    }, [currentGuess, userNumber, onGameOver])
    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(action) {

        if ((action === 'lower' && currentGuess < userNumber) || (action === 'higher' && currentGuess > userNumber))
        {
            Alert.alert("Don't Lie", 'You know this is wrong...', [{ text: 'Sorry', style: 'cancel' }])
            return;
        }

        //Handle Infinite Loop
        if (action == 'lower')
        {
            maxBoundary = currentGuess;
        } else
        {
            minBoundary = currentGuess + 1
        }
        const newRandom = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRandom)
        setGuessRounds((prevArray) => [newRandom, ...prevArray])
    }
    console.log(guessRounds)
    const guessRoundsLength = guessRounds.length;;

    let content = <>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <Text style={styles.actionText} >Higher or Lower?</Text>
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="remove-sharp" size={24} color={'white'} />
                    </PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="add-sharp" size={24} color={'white'} />
                    </PrimaryButton>
                </View>
            </View>
        </Card>
    </>
    if (height < 420)
    {
        content = <>
            <View style={styles.buttonsContainerWide}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                        <Ionicons name="remove-sharp" size={24} color={'white'} />
                    </PrimaryButton>
                </View>
                <NumberContainer>{currentGuess}</NumberContainer>

                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                        <Ionicons name="add-sharp" size={24} color={'white'} />
                    </PrimaryButton>
                </View>
            </View>
        </>
    }
    return (

        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {content}
            <View style={styles.listContainer}>
                {/* {guessRounds.map((round) => <Text key={round} >{round}</Text>)} */}
                <FlatList data={guessRounds} keyExtractor={(item) => item} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsLength - itemData.index} guess={itemData.item} />} />
            </View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    screen: {
        flex: 1,
        padding: 24,
        alignItems: 'center'
    },
    actionText: {
        textAlign: 'center',
        fontSize: 24,
        color: Colors.secondary500,
        paddingBottom: 12,

    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    buttonsContainerWide: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
    },
    buttonContainer: {
        flex: 1
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }


})