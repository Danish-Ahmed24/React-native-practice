import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Increamenter from './Increamenter';
import BuyButton from './BuyButton';

export default function BottomCard() {
  return (
    <View>
      <View style={styles.whiteBox}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Sleep 30</Text>
          <Text style={styles.headingText}>Dissolvable Wafers</Text>
          <Text style={styles.weight}>250 mg</Text>
        </View>
        <View>
          <View style={styles.pricing}>
            <Text style={styles.priceDollar}>$25.50</Text>
            <View style={styles.Increase}>
              <Increamenter sign="+" />
              <Text style={styles.number}>1</Text>
              <Increamenter sign="-" />
            </View>
          </View>
          <BuyButton />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  whiteBox: {
    // alignItems: 'center',
    padding: 30,
    backgroundColor: '#fff',
    height: 300,
    elevation: 10,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  headingText: {
    fontSize: 30,
    fontWeight: '500',
  },
  weight: {
    color: '#aaa',
    marginTop: 15,
    fontSize: 16,
  },
  Increase: {
    flexDirection: 'row',
    gap: 25,
  },
  number: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  priceDollar: {
    fontSize: 30,
    fontFamily: 'arial',
    fontWeight: '700',
  },
  pricing: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
