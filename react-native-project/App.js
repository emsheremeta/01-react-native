
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App () {
  return (
    <View style={styles.view}>
      {/* <RegistrationScreen /> */}
      <LoginScreen />
    </View>
  )
};
const styles = StyleSheet.create ({
view:{
  flex:1
}
})