import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";

import { AuthContext } from '../context';

import { } from './styles';

import firebase from 'firebase';



export default goToForgotPassword = ({ navigation }) => {

  const { goToForgotPassword } = React.useContext(AuthContext)
  const [textEmail, setTextEmail] = React.useState('')
  
  //Recuperação de Senha Perdida
  const handlePasswordReset = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(textEmail)
      .then(function(){
          window.alert('Enviamos um email para redefinir a sua senha!');
      })
      .catch(error => alert('Email não cadastrado!'))
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

      <TouchableOpacity 
      style={styles.botao}
      onPress={() => handlePasswordReset()}
      >
      <Text style={styles.botaoText}>Enviar Email</Text>        
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.ForgPass}
      onPress={() => navigation.push('SignIn')}
      >
      <Text style={styles.forgPassText}>Ir para LogIn</Text>        
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
  botaoText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
  },
  ForgPass: {
    marginTop: 30,
    color:"#FFF",
  },
  forgPassText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
  },
});

