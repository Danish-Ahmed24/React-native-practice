import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

export default function ImageRed() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require('../assets/pictures/Jar-red.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  img: {
    top: 175,
    transform: [{rotate: '2deg'}],
    position: 'absolute',
    elevation: 5,
    shadowColor: '#ffffff',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowRadius: 15,
    width: 130,
    height: 260,
  },
});
