
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground  } from 'react-native';

import { TextInput } from "react-native";

 function  LoginScreen () {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const emailHandler = (email) => setEmail(email);
  // const passwordHandler = (password )=> setPassword(password);
  return (
   <View style={styles.container}>
    <ImageBackground
    source={require('../assets/photo_bg.jpg')}
    style={styles.img}>

    </ImageBackground>
   
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#000000'
      },
      img:{
        flex:1,
       resizeMode:'cover',
       justifyContent: 'center'
      },
  
});

export default LoginScreen;