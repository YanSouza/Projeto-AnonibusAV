import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { } from './styles';


export default HomeDetails = ({ route }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>HOMEDETAILS</Text>
      {route.params &&
        <Text style={styles.textContainer}>{route.params.name}</Text>
      }

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
    color:"#FFF",
    alignSelf : "center",
  },
});

