import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, Image, ImageBackground, Text, TouchableOpacity, Linking } from "react-native";
import ButonDailyPlanner from "../components/ButonDailyPlanner";
import FullBody from "./FullBody.js";

const WorkoutsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <ImageBackground

          source={require("../assets/images/background_workouts.jpg")};
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect}>
            <Text style={styles.chooseYourWorkout}>CHOOSE TODAY'S WORKOUT</Text>
            

            <View style={styles.button1}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Upper Body Workouts')}
              style={styles.buttonRectangle1}
            >
              <Text style={styles.buttonText}>Upper Body</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.button2}>
          <TouchableOpacity
              onPress={() => navigation.navigate('Lower Body Workouts')}
              style={styles.buttonRectangle1}
            >
              <Text style={styles.buttonText}>Lower Body</Text>
            </TouchableOpacity>
              </View>

          <View style={styles.button3}>
          <TouchableOpacity
              onPress={() => navigation.navigate('Full Body Workouts')}
              style={styles.buttonRectangle1}
            >
              <Text style={styles.buttonText}>Full Body</Text>
            </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "rgba(201,75,75,0)",
  },
  group: {
    width: 530,
    height: 900,
    marginTop: -125,
    marginLeft: -80,
  },

  butonDailyPlanner2: {
    height: 100,
    width: 215,
    backgroundColor: "rgb(154,142,149)",
    borderRadius: 35,
    marginTop: 53,
    marginLeft: 10,
  },

  buttonText: {
    // fontFamily: "roboto-700",
    color: "white",
    fontSize: 20,
    height: 30,
    width: 150,
    marginTop: 0,
    marginLeft: 10,
    textAlign: "center",
  },
  
  group2: {
    width: 215,
    height: 126,
    marginTop: 80,
    marginLeft: 80,
    textAlign: "center",
    fontSize: 40
  },
  image: {
    width: 530,
    height: 975,
    marginLeft: 0,
    marginTop: 5,
  },
  image_imageStyle: {},
  rect: {
    width: 450,
    height: 820,
    shadowColor: "rgba(242,224,224,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 180,
    shadowOpacity: 1,
    shadowRadius: 60,
    backgroundColor: "rgba(230, 230, 230,0.17)",
    marginTop: 123,
    marginLeft: 85,
  },
  chooseYourWorkout: {
    color: "rgb(255,255,255)",
    fontSize: 35,
    height: 100,
    width: 300,
    marginTop: 75,
    marginLeft: 50,
    textAlign: "center",
  },
  
  butonDailyPlanner: {
    height: 100,
    width: 215,
    backgroundColor: "rgba(100,178,188,255)",
    borderRadius: 35,
    marginTop: -150,
    marginLeft: 10,
  },
  butonDailyPlanner1: {
    height: 100,
    width: 215,
    backgroundColor: "rgb(197,132,138)",
    borderRadius: 35,
    marginTop: 41,
    marginLeft: 10,
  },
  
  buttonText: {
    // fontFamily: "roboto-700",
    color: "white",
    fontSize: 26,
    height: 30,
    width: 150,
    marginTop: 0,
    marginLeft: 10,
    textAlign: "center",
  },

  group: {
    width: 530,
    height: 1048,
    marginTop: -10,
    marginLeft: 0,
  },
  image: {
    width: 530,
    height: 980,
    marginLeft: -70,
    marginTop: -100,
  },
  image_imageStyle: {},
  rect: {
    width: 420,
    height: 787,
    shadowColor: "rgba(242,224,224,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },

    elevation: 180,
    shadowOpacity: 1,
    shadowRadius: 60,
    backgroundColor: "rgba(230, 230, 230,0.17)",
    marginTop: 100,
    marginLeft: 70,
  },

  button1: {
    marginTop: 40,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: "#e7bbbc",
  },

  button2: {
    marginTop: 50,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: "#bbd3e7",
  },

  button3: {
    marginTop: 55,
    marginLeft: 110,
    borderRadius: 100,
    marginRight: 110,
    padding: 20,
    backgroundColor: "#e7e6bb",
  },

});

export default WorkoutsPage;
