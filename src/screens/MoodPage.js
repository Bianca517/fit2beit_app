import { NavigationContainer} from "@react-navigation/native";
import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  Button,
  TouchableOpacity,
  Text,
} from "react-native";


const MoodPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.chooseMood}>How are you feeling today?</Text>

            <TouchableOpacity onPress={() => Alert.alert ('Quote','You have to fight through some bag days to earn the best days of your life.')}>
                <Image
                    source={require("../assets/images/happy.jpg")}
                    style={styles.happyface}
                    resizeMode="stretch"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert ('Quote',"When you can't find the sunshine, be the sunshine.")}>
                <Image
                    source={require("../assets/images/meh.jpg")}
                    style={styles.mehface}
                    resizeMode="stretch"
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Alert.alert ('Quote','Believe in yourself and anything is possible.')}>
                <Image
                    source={require("../assets/images/sad.jpg")}
                    style={styles.sadface}
                    resizeMode="stretch"
                />
            </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 0,
    backgroundColor: "white",
  },

  happyface: {
    marginTop: 30,
    marginLeft: 140,
    marginRight: 140,
    padding: 60,
    width: 100,
    height: 100,
    alignItems: 'center'
  },

  mehface: {
    marginTop: 50,
    marginLeft: 140,
    marginRight: 140,
    padding: 60,
    width: 100,
    height: 100,
    alignItems: 'center'
  },

  sadface: {
    marginTop: 60,
    marginLeft: 140,
    marginRight: 140,
    padding: 60,
    width: 100,
    height: 100,
    alignItems: 'center'
  },

  chooseMood: {
    color: "black",
    fontSize: 35,
    height: 100,
    width: 300,
    marginTop: 30,
    marginLeft: 50,
    textAlign: 'center',
  }

});

export default MoodPage;
