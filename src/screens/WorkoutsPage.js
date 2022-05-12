import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";
import ButonDailyPlanner from "../components/ButonDailyPlanner";

const WorkoutsPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <ImageBackground
          source={require("../assets/images/workouts_background.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <View style={styles.rect}>
            <Text style={styles.chooseYourWorkout}>CHOOSE TODAY'S WORKOUT</Text>
            <View style={styles.group2}>
              <ButonDailyPlanner
                button="Upper Body"
                style={styles.butonDailyPlanner}
              ></ButonDailyPlanner>
              <ButonDailyPlanner
                button="Lower Body"
                style={styles.butonDailyPlanner1}
              ></ButonDailyPlanner>
              <ButonDailyPlanner
                button="Full Body"
                style={styles.butonDailyPlanner2}
              ></ButonDailyPlanner>
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
    fontSize: 27,
    height: 100,
    width: 300,
    marginTop: 50,
    marginLeft: 50,
    textAlign: "center",
  },
  group2: {
    width: 215,
    height: 126,
    marginTop: 150,
    marginLeft: 80,
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
  butonDailyPlanner2: {
    height: 100,
    width: 215,
    backgroundColor: "rgb(154,142,149)",
    borderRadius: 35,
    marginTop: 53,
    marginLeft: 10,
  },
});

export default WorkoutsPage;
