import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';

export default CreateAccount = ({ navigation }) => {

  const handleSignUp = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(textEmail, textPassword)
      .then(() => signUp())
      .catch(error => alert(error))
  }

  const { signUp } = React.useContext(AuthContext)
  const [textName, setTextName] = React.useState('')
  const [textEmail, setTextEmail] = React.useState('')
  const [textPassword, setTextPassword] = React.useState('')

  return (
    <View style={styles.container}>
      <Image 
        source={require('../assets/icon.png')}
        style={styles.logo}
      />
       
      <TextInput 
        style={styles.input}
        onChangeText={text => setTextName(text)}
        value={textName} 
        placeholder="Nome"
      />

      <TextInput 
        style={styles.input}
        onChangeText={text => setTextEmail(text.toLowerCase())}
        value={textEmail} 
        placeholder="Email"
      />

      <TextInput 
        style={styles.input}
        onChangeText={text => setTextPassword(text)}
        value={textPassword} 
        secureTextEntry={true}
        placeholder="Senha"
      />
      
      <TouchableOpacity 
      style={styles.botao}
      onPress={() => handleSignUp()}
      >
      <Text style={styles.botaoText}>Criar Conta</Text>        
      </TouchableOpacity>

      <TouchableOpacity 
      style={styles.navAccount}
      onPress={() => navigation.push("SignIn")}
      >
      <Text style={styles.navAccountText}>Já tenho conta</Text>        
      </TouchableOpacity>
    </View>
  )
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
  textContainer:{
    fontSize: 40,
    fontWeight: '500',
    marginTop: 30,
    color:"#FFF",
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
    backgroundColor: "#6495ED",
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
  navAccount: {
    marginTop: 30,
    color:"#FFF",
  },
  navAccountText:{
    fontSize: 16,
    fontWeight: "bold",
    color:"#FFF",
  },  
});

