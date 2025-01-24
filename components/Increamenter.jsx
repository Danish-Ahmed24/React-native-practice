import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function Increamenter({sign}) {
  return (
    <TouchableOpacity style={styles.out}>
      <View style={styles.in}>
        <Text style={styles.sign}>{sign}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  out: {
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  in: {
    width: 25,
    height: 25,
    borderRadius: 7.5,
    borderWidth: 1,
    borderColor: '#F3B431',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sign: {
    fontSize: 18,
    color: '#F3B431',
    fontWeight: '200',
    textAlign: 'center',
  },
});
