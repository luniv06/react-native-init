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
import ButtonClicker from './components/buttonClicker';
import FlexPractice from './components/FlexPractice';

const App = () => {
  return (
    <>
      {/* <ButtonClicker /> */}
      <FlexPractice />
    </>
  );
};

export default App;
