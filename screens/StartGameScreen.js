import { Alert, StyleSheet, Text, TextInput, View, Dimensions, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../util/colors';
import Title from '../components/Title';
import Card from '../components/Card';

const StartGameScreen = ({ onPickNumber }) => {
    const [enteredNumber, setEnteredNumber] = useState('');

    function handleInputChange(enteredText) {
        setEnteredNumber(enteredText)
    };

    function resetInputHandler() {
        setEnteredNumber('')
    }
    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 | chosenNumber > 99)
        {
            Alert.alert('Invalid Number', 'Number has to be between 1 to 99', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }])
            return;
        }
        onPickNumber(chosenNumber)
    };

    return (
        <ScrollView style={styles.screen}>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={styles.startGameContainer}>
                    <Title>Guess my Number</Title>
                    <Card>
                        <Text style={styles.instructionText}>Enter a Number</Text>
                        <TextInput style={styles.numberInput} maxLength={2} keyboardType='number-pad' value={enteredNumber} onChangeText={handleInputChange} />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler} >Reset</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer} >
                                <PrimaryButton onPress={confirmInputHandler} >Confirm</PrimaryButton>
                            </View>
                        </View>
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
    )
}

export default StartGameScreen
const deviceHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    startGameContainer: {
        flex: 1,
        marginTop: deviceHeight > 500 ? 100 : 50,
        alignItems: 'center'
    },
    instructionText: {
        color: Colors.secondary500,
        fontSize: 24,
    },
    numberInput: {
        width: 50,
        height: 50,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    }
})