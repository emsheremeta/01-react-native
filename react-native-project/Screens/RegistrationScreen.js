import React from "react";
import {Text,TextInput, StyleSheet, View, ImageBackground, TouchableOpacity, Platform, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView} from "react-native";
import { useState } from "react";

export default function RegistrationScreen()  {
  const initialState ={
    email: '',
    password: ''
};
const [isShowKeyboard, setIsShowKeyboard ] = useState(false);
const [state, setState] = useState(initialState);

const keyboardHide = () =>{
  setIsShowKeyboard(false);
  Keyboard.dismiss();
  console.log(state);
  setState(initialState)
}

return (
  <View style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
<ImageBackground source={require('../assets/photo_bg.jpg')}  style={styles.img}>
<KeyboardAvoidingView 
 keyboardVerticalOffset = {380} 
 behavior={Platform.OS === "ios" ? "padding" : ""} >

  <View style={styles.textBackground} >
<View style={styles.inputWrapper}>
    
    <View style={styles.titlePadding}>
    <Text  style={styles.title} >Register</Text>
    </View>

<TextInput
style={styles.input}
placeholder='Type login here'
onFocus={()=>setIsShowKeyboard(true)}
value={state.login}
onChangeText={(value) => setState((prevState) => ({...prevState, login: value}))}
/>
<TextInput
style={styles.input}
placeholder='Type email here'
onFocus={()=>setIsShowKeyboard(true)}
value={state.email}
onChangeText={(value) => setState((prevState) => ({...prevState, email: value}))}
/>
<TextInput
style={styles.input}
placeholder='Type password here'
secureTextEntry ={true}
onFocus={()=>setIsShowKeyboard(true)}
value={state.password}
onChangeText={(value) => setState((prevState) => ({...prevState, password: value}))}
/>
<TouchableOpacity style={styles.btn} onPress={keyboardHide}>
  <Text style={styles.btnText}>Register now</Text>
</TouchableOpacity>
<Text style={styles.textInfo}>Already have an account? SING IN</Text>

</View>
</View>
</KeyboardAvoidingView>
</ImageBackground>
</TouchableWithoutFeedback>
  </View>
)
};

const styles = StyleSheet.create ({
  container:{
flex:1,
backgroundColor:'#000000'
  },
  img:{
    flex:1,
   resizeMode:'cover',
   justifyContent: 'center'
  },
  textBackground:{
    backgroundColor:'#FFFFFF',
    height:600,
    width:Platform.OS === 'ios'? 415 : 395,
    borderRadius:25,
    position:'absolute',
    top:Platform.OS === 'ios'? -100 : -120,
    
  },
  titlePadding:{
    paddingTop:92,
    paddingLeft:96,
    paddingRight:95,
  },
  title:{
    color:'#212121',
    width: 184,
    height: Platform.OS === 'ios'? 35 : 40,
    fontWeight:500,
    fontSize:30,
    marginBottom:33,
    textAlign: 'center',
 
  },
  inputWrapper:{
    flex:1,
    alignItems: 'center',
    marginBottom:33,
    

  },

  input:{
    width:Platform.OS === 'ios'? 380 : 360,
    height: 50,
    backgroundColor:'#E8E8E8',
    borderRadius:8,
    paddingLeft:16,
    marginBottom:16
  },
  btn:{
    width: Platform.OS === 'ios'? 380 : 360,
    height:50,
    backgroundColor:'#FF6C00',
    borderRadius:100,
    paddingLeft:93.5,
    paddingRight:93.5,
    paddingTop:16,
    alignItems: 'center',
    marginTop:20,
    
  },
  btnText:{
    color:'#FFFFFF',
    fontWeight:400,
    fontSize:16,

  },
  textInfo:{
    color:'#1B4371',
    fontSize:16,
    fontWeight:400,
    marginTop:16,
    paddingLeft:73,
    paddingRight:73,
    marginBottom:66
  }
 
})