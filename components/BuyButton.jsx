import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function BuyButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>Buy Now</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    backgroundColor: '#F3B63A',
    padding: 12,
    borderRadius: 30,
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 14,
  },
});
