import { ImageBackground, SafeAreaView, StyleSheet, View } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './util/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts, Aboreto_400Regular } from '@expo-google-fonts/aboreto';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0)
  let [fontsLoaded] = useFonts({
    Aboreto_400Regular,
  });
  if (!fontsLoaded)
  {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber)
    setGameIsOver(false);
  };

  function restartGameHandler() {
    setUserNumber(null),
      setGameIsOver(true);
    setGuessRounds(0)
  }
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds)
  };
  if (userNumber)
  {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  };
  if (gameIsOver && userNumber)
  {
    screen = <GameOverScreen userNumber={userNumber} onRestart={restartGameHandler} roundsNumber={guessRounds} />
  }

  return (
    <LinearGradient colors={[Colors.primary400, Colors.secondary500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage} >
        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.20
  }
});
