import { NavigationContainer } from "@react-navigation/native";
import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Alert,
  Button,
  TouchableOpacity,
  Text,
  Animated,
  Dimensions,
} from "react-native";

function MoodPage(props) {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const { height } = Dimensions.get("window");

  const Images = [
    require("../assets/images/quotes/quote1.jpeg"),
    require("../assets/images/quotes/quote2.jpeg"),
    require("../assets/images/quotes/quote3.jpeg"),
    require("../assets/images/quotes/quote4.jpg"),
    require("../assets/images/quotes/quote6.jpg"),
    require("../assets/images/quotes/quote7.jpg"),
    require("../assets/images/quotes/quote8.jpg"),
    require("../assets/images/quotes/quote9.jpg"),
    require("../assets/images/quotes/quote10.jpg"),
    require("../assets/images/quotes/quote11.jpg"),
    require("../assets/images/quotes/quote12.jpg"),
    require("../assets/images/quotes/quote13.png"),
  ];

  const color = animation.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.8)",
    ],
  });

  const openModal = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const saveModal = animation.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const modalTrigger = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const open = {
    transform: [{ scale: openModal }, { translateY: saveModal }],
  };

  const background = {
    backgroundColor: color,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.chooseMood}>How are you feeling today?</Text>
      <TouchableOpacity onPress={{ modalTrigger }}>
        <Image
          source={require("../assets/images/happy.jpg")}
          style={styles.happyface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={modalTrigger}>
        <Image
          source={require("../assets/images/meh.jpg")}
          style={styles.mehface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={modalTrigger}>
        <Image
          source={require("../assets/images/sad.jpg")}
          style={styles.sadface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <Animated.View style={open}>
        <View style={styles.wrap}>
          <ImageBackground
            source={Images[Math.floor(Math.random() * Images.length)]}
            resizeMode="stretch"
          >
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.closeButton} onPress={close}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>
    </View>
  );
}

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
    alignItems: "center",
  },

  mehface: {
    marginTop: 50,
    marginLeft: 140,
    marginRight: 140,
    padding: 60,
    width: 100,
    height: 100,
    alignItems: "center",
    position: "relative",
  },

  sadface: {
    marginTop: 60,
    marginLeft: 140,
    marginRight: 140,
    padding: 60,
    width: 100,
    height: 100,
    alignItems: "center",
  },

  chooseMood: {
    color: "black",
    fontSize: 35,
    height: 100,
    width: 300,
    marginTop: 30,
    marginLeft: 50,
    textAlign: "center",
  },

  wrap: {
    width: "85%",
    height: 400,
    padding: 10,
    margin: 50,
    marginLeft: 30,
    marginTop: -400,
    borderRadius: 50,
    elevation: 10,
    position: "absolute",
    shadowColor: "#171717",
    shadowOffset: { width: -15, height: 15 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  closeButton: {
    backgroundColor: "trasnparent",
    borderRadius: 100,
    borderColor: "black",
    marginTop: 230,
    marginLeft: 5,
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 0,
    paddingRight: 0,
    marginHorizontal: 250,
    marginVertical: 10,
    flex: 1,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  background: {
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },

  closeText: {
    fontSize: 15.5,
    color: "black",
    textAlign: "center",
  },
});

export default MoodPage;
