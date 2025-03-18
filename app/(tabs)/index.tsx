import React, { useState } from 'react';
import { registerRootComponent } from 'expo';


import { View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar, 
  FlatList, 
  TextInput, 
  Button,
  KeyboardAvoidingView
} from "react-native";




function App() {

  const [userName, setUsername] = useState("");
  const [userPassword, setPassword] = useState("");
  const [erros, setErrors] = useState<{userName?: string; userPassword?: string }>({});


const validateForm = () => {
  let errors: {userName?: string; userPassword?: string} = {};
  if(!userName) erros.userName = "User name is required!";
  if(!userPassword) erros.userPassword = "Password is required!"

  setErrors(errors);

  return Object.keys(errors).length === 0;
  
}


  return (
   <KeyboardAvoidingView style={styles.container}>
    <View style={styles.form}>
      <Text style={styles.label}>Username: {userName}</Text>
      <TextInput 
      style={styles.input}
      value={userName}
      onChangeText={setUsername}
      placeholder='Enter your name' />
      <Text style={styles.label}>Password:</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter your password' 
      secureTextEntry/>

      <Button title='Login' onPress={() => {}}/>
    </View>
   </KeyboardAvoidingView>
  )
}

// Register the root component with Expo
registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "red",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16
  },
  form: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    shadowColor: "black",
    textShadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5
  },
  label:{
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5
  }

})