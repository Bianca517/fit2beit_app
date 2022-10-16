import { NavigationContainer } from "@react-navigation/native";
import { set } from "lodash";
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
import { pureFinalPropsSelectorFactory } from "react-redux/es/connect/selectorFactory";

import quote1 from "../assets/images/quotes/quote1.jpeg";
import quote2 from "../assets/images/quotes/quote2.jpeg";
import quote3 from "../assets/images/quotes/quote3.jpeg";
import quote4 from "../assets/images/quotes/quote4.jpg";
import quote6 from "../assets/images/quotes/quote6.jpg";
import quote7 from "../assets/images/quotes/quote7.jpg";
import quote8 from "../assets/images/quotes/quote8.jpg";
import quote9 from "../assets/images/quotes/quote9.jpg";
import quote10 from "../assets/images/quotes/quote10.jpg";
import quote11 from "../assets/images/quotes/quote11.jpg";
import quote12 from "../assets/images/quotes/quote12.jpg";
import quote13 from "../assets/images/quotes/quote13.png";

function MoodPage(props) {
  var isHappy = 0;
  var isMeh = 0;
  var isSad = 0;

  const [animation1, setAnimation1] = useState(new Animated.Value(0));
  const [animation2, setAnimation2] = useState(new Animated.Value(0));
  const [animation3, setAnimation3] = useState(new Animated.Value(0));

  //[isHappy, setIsHappy] = useState(0);
  //[isMeh, setIsMeh] = useState(0);
  //[isSad, setIsSad] = useState(0);

  const { height } = Dimensions.get("window");

  const Images_happy = [
    require("../assets/images/quotes/quote7.jpg"),
    require("../assets/images/quotes/quote8.jpg"),
    require("../assets/images/quotes/quote10.jpg"),
    require("../assets/images/quotes/quote12.jpg"),
  ];

  const Images_meh = [
    require("../assets/images/quotes/quote1.jpeg"),
    require("../assets/images/quotes/quote4.jpg"),
    require("../assets/images/quotes/quote6.jpg"),
    require("../assets/images/quotes/quote11.jpg"),
  ];

  const Images_sad = [
    require("../assets/images/quotes/quote2.jpeg"),
    require("../assets/images/quotes/quote3.jpeg"),
    require("../assets/images/quotes/quote9.jpg"),
    require("../assets/images/quotes/quote13.png"),
  ];

  const color1 = animation1.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.8)",
    ],
  });

  const color2 = animation2.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.8)",
    ],
  });

  const color3 = animation3.interpolate({
    inputRange: [0, 0.2, 1.8, 2],
    outputRange: [
      "rgba(255,255,255,0.0)",
      "rgba(45,57,82,0.5)",
      "rgba(45,57,82,0.8)",
      "rgba(255,255,255,0.8)",
    ],
  });

  const openModal1 = animation1.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const openModal2 = animation2.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const openModal3 = animation3.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  const saveModal1 = animation1.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const saveModal2 = animation2.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const saveModal3 = animation3.interpolate({
    inputRange: [1, 2],
    outputRange: [0, -height],
    extrapolate: "clamp",
  });

  const modalTrigger1 = () => {
    Animated.timing(animation1, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const modalTrigger2 = () => {
    Animated.timing(animation2, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const modalTrigger3 = () => {
    Animated.timing(animation3, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close1 = () => {
    Animated.timing(animation1, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close2 = () => {
    Animated.timing(animation2, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const close3 = () => {
    Animated.timing(animation3, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const open1 = {
    transform: [{ scale: openModal1 }, { translateY: saveModal1 }],
  };

  const open2 = {
    transform: [{ scale: openModal2 }, { translateY: saveModal2 }],
  };

  const open3 = {
    transform: [{ scale: openModal3 }, { translateY: saveModal3 }],
  };

  const background1 = {
    backgroundColor: color1,
  };

  const background2 = {
    backgroundColor: color2,
  };

  const background3 = {
    backgroundColor: color3,
  };

  function display_aux() {
    console.warn("aici " + isHappy + " " + isMeh + " " + isSad);
  }

  function getImageSource(mood) {
    //console.warn("in function");
    var path_of_quote_to_load = "";

    if (mood === 1) {
      path_of_quote_to_load =
        Images_happy[Math.floor(Math.random() * Images_happy.length)];
    } else if (mood === 2) {
      path_of_quote_to_load =
        Images_meh[Math.floor(Math.random() * Images_meh.length)];
    } else {
      path_of_quote_to_load =
        Images_sad[Math.floor(Math.random() * Images_sad.length)];
    }

    //console.warn("path " + path_of_quote_to_load);
    return path_of_quote_to_load;
  }

  function set_moods(mood1, mood2, mood3) {
    isHappy = mood1;
    isMeh = mood2;
    isSad = mood3;
    //setIsHappy(mood1);
    //setIsMeh(mood2);
    //setIsSad(mood3);
    //display_aux();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.chooseMood}>How are you feeling today?</Text>
      <TouchableOpacity
        onPress={() => {
          modalTrigger1();
          set_moods(1, 0, 0);
        }}
      >
        <Image
          source={require("../assets/images/happy.jpg")}
          style={styles.happyface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          modalTrigger2();
          set_moods(0, 1, 0);
        }}
      >
        <Image
          source={require("../assets/images/meh.jpg")}
          style={styles.mehface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          modalTrigger3();
          set_moods(0, 0, 1);
        }}
      >
        <Image
          source={require("../assets/images/sad.jpg")}
          style={styles.sadface}
          resizeMode="stretch"
        />
      </TouchableOpacity>

      <Animated.View style={open1}>
        <View style={styles.wrap}>
          <ImageBackground source={getImageSource(1)} resizeMode="cover">
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.closeButton} onPress={close1}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>

      <Animated.View style={open2}>
        <View style={styles.wrap}>
          <ImageBackground source={getImageSource(2)} resizeMode="cover">
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.closeButton} onPress={close2}>
                <Text style={styles.closeText}>Close</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </Animated.View>

      <Animated.View style={open3}>
        <View style={styles.wrap}>
          <ImageBackground source={getImageSource(3)} resizeMode="cover">
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity style={styles.closeButton} onPress={close3}>
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
    backgroundColor: "white",
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

  background1: {
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  background2: {
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  background3: {
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
