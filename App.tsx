import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ImageRed from './components/Image';
import BottomCard from './components/BottomCard';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.upper}>
        <ImageRed />
      </View>
      <View style={styles.bottom}>
        <BottomCard />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#AE1438',
  },
  upper: {
    flex: 1,
  },
  bottom: {},
});
