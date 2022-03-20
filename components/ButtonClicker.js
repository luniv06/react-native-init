import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

const ButtonClicker = () => {
  const [counter, setCounter] = useState(0);

  const onButtonClick = () => {
    // Linking.openURL('https://www.twitch.tv/valorantesports3');
    setCounter(counter + 1);
  };

  const onButtonReset = () => {
    // Linking.openURL('https://www.twitch.tv/valorantesports3');
    setCounter(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Button Click Counter</Text>
      <Text style={styles.counter}> {counter} </Text>
      <Button title="Update Count" onPress={onButtonClick}>
        {'  '}
      </Button>
      <Text
        style={{color: 'white', fontSize: 15, marginTop: 40, marginBottom: 20}}>
        You clicked the button {counter} times
      </Text>
      <Button title="Reset Count" onPress={onButtonReset}>
        {'  '}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#320f06',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 15,
    margin: 5,
  },
  counter: {
    color: 'lightblue',
    fontSize: 25,
    margin: 10,
    fontStyle: 'italic',
  },
});

export default ButtonClicker;
