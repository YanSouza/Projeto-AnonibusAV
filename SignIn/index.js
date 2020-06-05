import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import PasswordInputText from 'react-native-hide-show-password-input';

import { AuthContext } from '../context';

import { } from './styles';

import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook'


export default SignIn = ({ navigation }) => {

  const { signIn } = React.useContext(AuthContext)
  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(textEmail, textPassword)
      .then(() => signIn())
      .catch(error => alert(error))

  }
  //Login com Facebook
  FacebookLogIn = async () => {
    Facebook.initializeAsync('697013134419993', 'AnonibusUni-822')
    const{type, token} = await Facebook.logInWithReadPermissionsAsync('697013134419993', 
    {permissions:['public_profile'] })      
    if (type == 'success') {
        const credential = firebase.auth.FacebookAuthProvider.credential(token)
        firebase.auth().signInWithCredential(credential)
            .then(() => signIn())
            .catch((error) => alert(error.toString()))
    }
}

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/icon.png')}
        style={styles.logo}
      />

      <TextInput 
        style={styles.input}
        onChangeText={text => setTextEmail(text.toLowerCase())}
        value={textEmail}
        placeholder="Email"
      />

      <TextInput 
        style={styles.input}
        secureTextEntry={true}
        onChangeText={text => setTextPassword(text)}
        value={textPassword}
        placeholder="Senha"
      />

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => handleSignIn()}
      >
      <Text style={styles.botaoText}>Login</Text>        
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botaoLoginFacebook}
      onPress={() => FacebookLogIn()}
      >
      <Text style={styles.botaoText}>Login com Facebook</Text>        
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.register}
      onPress={() => navigation.push('CreateAccount')}
      >
      <Text style={styles.registerText}>Criar conta gratuita</Text>        
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.botaoForgotPasswordText}
      onPress={() => navigation.push('ForgotPassword')}
      >
      <Text style={styles.forgotPasswordText}>Esqueceu Senha?</Text>        
      </TouchableOpacity>
    </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000000",
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius:50
  },
  input:{ 
    marginTop: 30,
    padding: 10,
    width: 300,
    backgroundColor: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
    borderRadius: 7,
  },
  botao:{
    width: 300,
    height: 42,
    backgroundColor: "#696969",
    marginTop: 30,
    borderRadius: 4,
    alignItems:"center",
    justifyContent: "center",
  },  
    botaoLoginFacebook:{
    width: 300,
    height: 42,
    backgroundColor: "#6495ED",
    marginTop: 20,
    borderRadius: 4,
    alignItems:"center",
    justifyContent: "center",
  },
  botaoText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
  },
  register: {
    marginTop: 30,
    color:"#FFF",
  },
  registerText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
  }, 
  botaoForgotPasswordText: {
   color:"#FFF",
   marginVertical: 7,
  },
  forgotPasswordText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
    marginTop: 10,
  }, 
});

