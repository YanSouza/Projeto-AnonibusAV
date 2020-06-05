import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { } from './styles';


export default Home = ({ navigation }) => {

  return (
      <View style={styles.paramList}>
      <View style={styles.paramcontainer}>
      <Text style={styles.textContainer}>Tela Principal</Text>

      <View style={styles.params}>
      <TouchableOpacity 
      style={styles.botao} 
      onPress={() => navigation.push('HomeDetails', {name: 'Isso é um teste' })}>
      <Text style={styles.botaoText}>Sem Parâmetro</Text>
      </TouchableOpacity>
  
      <TouchableOpacity 
      style={styles.botao} 
      onPress={() =>  navigation.push('HomeDetails')}>
      <Text style={styles.botaoText}>Com Parâmetro</Text>
      </TouchableOpacity>
      </View>
    </View>
  </View>
  )
  }

const styles = StyleSheet.create({
  paramList: {
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

