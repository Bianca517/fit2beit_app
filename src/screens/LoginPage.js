import React, { Component, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  Alert,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Keyboard,
  LogBox,
  TouchableWithoutFeedback,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import TrainerPage from "./TrainerPage.js";
import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";
//import { Alert } from "react-native-web";
import { auth } from "../../firebase";

const LoginPage = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native"]);
    LogBox.ignoreLogs([
      "AsyncStorage has been extracted from react-native core",
    ]);
  }, []);

  function handleLoginButtonClient() {
    if (email === "sportacus@gmail.com") {
      Alert.alert("Please log in as a trainer!");
    } else {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(cred => {
          navigation.navigate("Home");
        })
        .catch(err => alert(err.message));
    }
  }

  function handleLoginButtonTrainer() {
    if (email === "sportacus@gmail.com") {
      auth
        .signInWithEmailAndPassword(email, password)
        .then(cred => {
          navigation.navigate("Trainer");
        })
        .catch(err => alert("aici" + err.message));
    } else {
      Alert.alert("You do not have the rights to log in as a trainer!");
    }
  }

  return (
    <KeyboardAwareScrollView
      behavior="padding"
      style={styles.keyboardAwareScrollView}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.background}>
            <View style={styles.imageStack}>
              <ImageBackground
                source={require("../assets/images/loginbackground.jpeg")}
                resizeMode="cover"
                style={styles.image}
                imageStyle={styles.image_imageStyle}
                blurRadius={2}
              >
                <View style={styles.goToSignUp}>
                  <View style={styles.containerSignUp}>
                    <View style={styles.newMemberStack}>
                      <Text style={styles.newMember}>New Member ?</Text>
                      <View style={styles.signUp}>
                        <Button
                          title="Sign In"
                          color="#1f7ed3"
                          onPress={() => navigation.navigate("Register")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
              <View style={styles.title}>
                <View style={styles.fitStack}>
                  <Text style={styles.fit}>FIT</Text>
                  <Text style={styles.toBe}>2BE</Text>
                  <Text style={styles.it}>IT</Text>
                </View>
              </View>
              <View style={styles.textInputs}>
                <TextInput
                  placeholder="Password"
                  textBreakStrategy="simple"
                  dataDetector="address"
                  placeholderTextColor="rgba(255,255,255,1)"
                  color="rgba(255,255,255,1)"
                  clearTextOnFocus={true}
                  secureTextEntry={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  onChangeText={value => setPassword(value)}
                  style={styles.emailAddress}
                ></TextInput>
                <TextInput
                  placeholder="Email Address"
                  color="rgba(255,255,255,1)"
                  textBreakStrategy="simple"
                  dataDetector="address"
                  placeholderTextColor="rgba(255,255,255,1)"
                  clearTextOnFocus={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  onChangeText={value => setEmail(value)}
                  style={styles.password}
                ></TextInput>
              </View>
              <TouchableOpacity style={styles.loginButton1}>
                <TouchableOpacity
                  style={styles.buttonRectangle}
                  onPress={() => {
                    handleLoginButtonClient();
                  }}
                  testId="loginButtonclient"
                >
                  <Text style={styles.loginText}>Login as a Client</Text>
                </TouchableOpacity>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginButton2}>
                <TouchableOpacity
                  style={styles.buttonRectangle}
                  onPress={() => handleLoginButtonTrainer()}
                  testId="loginButtontrainer"
                >
                  <Text style={styles.loginText}>Login as a Trainer</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //opacity: 0.41,
    backgroundColor: "rgba(15,15, 15,0.47)",
  },
  background: {
    width: 450,
    height: 700,
    marginTop: -10,
    marginLeft: -45,
  },
  image: {
    left: 0,
    position: "absolute",
    height: 825,
    top: 0,
    backgroundColor: "rgba(15,15, 15,1)",
    right: 0,
  },
  image_imageStyle: {},
  goToSignUp: {
    height: 47,
    marginTop: 674,
    marginLeft: 47,
    marginRight: 23,
  },
  containerSignUp: {
    backgroundColor: "rgba(230,230,230,0.9)",
    flex: 1,
    marginRight: -25,
  },
  newMember: {
    marginTop: 8,
    left: 15,
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    height: 150,
    width: 150,
    fontSize: 20,
  },
  signUp: {
    left: 200,
    //position: "absolute",
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    height: 40,
    width: 80,
    fontSize: 70,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 3,
    padding: 2,
    fontWeight: "bold",
    textDecorationLine: "underline",
    backgroundColor: "#a3bacf",
    borderRadius: 50,
  },
  newMemberStack: {
    width: 250,
    height: 35,
    marginTop: 3,
    marginLeft: 38,
  },
  title: {
    top: 130,
    left: 98,
    width: 212,
    height: 135,
    position: "absolute",
    overflow: "visible",
  },
  fit: {
    top: 0,
    left: 0,
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    height: 135,
    width: 212,
    //lineHeight: 50,
    fontSize: 120,
  },
  toBe: {
    top: 15,
    left: 157,
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    height: 120,
    width: 126,
    fontSize: 55,
  },
  it: {
    top: 70,
    left: 157,
    position: "absolute",
    // fontFamily: "roboto-700",
    color: "#1f7ed3",
    height: 45,
    width: 110,
    fontSize: 45,
  },
  fitStack: {
    width: 283,
    height: 160,
    marginTop: -25,
    marginLeft: 21,
  },
  textInputs: {
    top: 291,
    left: 93,
    width: 283,
    height: 46,
    position: "absolute",
  },
  emailAddress: {
    //fontFamily: "roboto-700",
    color: "white",
    height: 46,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 80,
  },
  password: {
    //fontFamily: "roboto-700",
    color: "white",
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    flex: 1,
    marginTop: -126,
  },
  loginButton1: {
    top: 480,
    left: 102,
    width: 274,
    height: 49,
    position: "absolute",
  },
  loginButton2: {
    top: 550,
    left: 102,
    width: 274,
    height: 49,
    position: "absolute",
  },
  buttonRectangle: {
    backgroundColor: "#E6E6E6",
    borderRadius: 27,
    flex: 1,
  },
  loginText: {
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    fontSize: 20,
    height: 41,
    width: 160,
    marginTop: 10,
    marginLeft: "25%",
    alignItems: "center",
  },
  imageStack: {
    height: 790,
  },
});

export default LoginPage;
