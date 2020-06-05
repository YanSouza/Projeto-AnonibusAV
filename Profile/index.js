import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { } from './styles';

import { AuthContext } from '../context';

import firebase from 'firebase';


export default Profile = () => {

  
  const { signOut } = React.useContext(AuthContext)

  const handleSignOut = () => {
    firebase.auth().signOut().then(function () {
      // Sign-out successful.
      signOut();
    }).catch(function (error) {
      alert(error)
    });
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Bem Vindo!</Text>

      <View style={styles.params}>
      <TouchableOpacity 
      style={styles.botao} 
      onPress={() => handleSignOut()}>
      <Text style={styles.botaoText}>LogOut</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  textContainer:{
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30,
    color:"#FFF",
    alignSelf : "center",
  },
  actions: {
    marginTop: 15,
    flexDirection:"row",
    justifyContent:"space-between"
   },
   action:{
    backgroundColor: "#1E90FF",
    borderRadius: 8,
    height: 50,
    width: "48%",
    justifyContent: "center",
    alignItems: "center",
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
});

