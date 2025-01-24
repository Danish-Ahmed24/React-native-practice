import {
  Image,
  LogBox,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.logoPart}>
        <Image
          style={styles.logoPic}
          source={require('../assets/pictures/logo.png')}
        />
        <Text style={styles.logoText}>Xefag</Text>
      </View>

      <View style={styles.icon}>
        <View style={styles.black}>A</View>
        <View style={styles.notificationWhite}>
          <View style={styles.number}>6</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  logoPart: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    position: 'absolute',
    left: 15,
    top: 15,
  },
  logoPic: {
    width: 70,
    height: 70,
  },
  logoText: {
    fontFamily: 'serif',
    color: '#ffffff',
    fontSize: 29,
  },
});
