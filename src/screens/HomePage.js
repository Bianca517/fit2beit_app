import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Alert, Button, TouchableOpacity, Text } from "react-native";
import ButonDailyPlanner from "../components/ButonDailyPlanner";
import WorkoutsPage from "./WorkoutsPage";


const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <ImageBackground
          source={require("../assets/images/homepage_background.jpeg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect}>
          <View style={styles.button1}>
          <TouchableOpacity
                onPress={() => navigation.navigate('Workouts')}
                style={styles.buttonRectangle1}
              >
                <Text style={styles.buttonText}>WORKOUTS</Text>
              </TouchableOpacity>
                </View>

                  <View style={styles.button2}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Workouts')}
                style={styles.buttonRectangle1}
              >
                <Text style={styles.buttonText}>MENUS</Text>
              </TouchableOpacity>
           </View>
           
                  <View style={styles.button3}>
                  <TouchableOpacity
                onPress={() => navigation.navigate('Workouts')}
                style={styles.buttonRectangle1}
              >
                <Text style={styles.buttonText}>DAILY PLANNER</Text>
              </TouchableOpacity>
            </View>
            </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "rgba(201,75,75,0)"
  },

  buttonText: {
    // fontFamily: "roboto-700",
     color: 'black',
     fontSize: 20,
     height: 30,
     width: 150,
     marginTop: 0,
     marginLeft: 10,
     textAlign: "center",
   },

  group: {
    width: 530,
    height: 1048,
    marginTop: 0,
    marginLeft: 0
  },
  image: {
    width: 530,
    height: 980,
    marginLeft: -70,
    marginTop: -100
  },
  image_imageStyle: {},
  rect: {
    width: 420,
    height: 787,
    shadowColor: "rgba(242,224,224,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },

    elevation: 180,
    shadowOpacity: 1,
    shadowRadius: 60,
    backgroundColor: "rgba(230, 230, 230,0.17)",
    marginTop: 100,
    marginLeft: 70
  },
  
  button1: {
    marginTop: 130,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: 'white'
  },

  button2: {
    marginTop: 50,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: 'white'
  },

  button3: {
    marginTop: 55,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: 'white'
  }
});

export default HomePage;
