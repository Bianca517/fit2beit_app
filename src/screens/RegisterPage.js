import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

import CreateProfilePage from "./CreateProfilePage";

const RegisterPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.rectStack}>
          <View style={styles.rect}></View>
          <ImageBackground
            source={require("../assets/images/RegisterBkd.jpg")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <Text style={styles.rEGISTER2}>R E G I S T E R</Text>
            <View style={styles.textInputs}>
              <View style={styles.passwordColumn}>
                <TextInput
                  placeholder="Password"
                  textBreakStrategy="simple"
                  dataDetector="address"
                  placeholderTextColor="rgba(255,255,255,1)"
                  clearTextOnFocus={true}
                  secureTextEntry={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  style={styles.password}
                ></TextInput>
                <TextInput
                  placeholder="Confirm Password"
                  textBreakStrategy="simple"
                  dataDetector="address"
                  placeholderTextColor="rgba(255,255,255,1)"
                  clearTextOnFocus={true}
                  secureTextEntry={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  style={styles.confirmPassword}
                ></TextInput>
              </View>
              <TextInput
                placeholder="Email Address"
                textBreakStrategy="simple"
                dataDetector="address"
                placeholderTextColor="rgba(255,255,255,1)"
                clearTextOnFocus={true}
                selectionColor="rgba(230, 230, 230,1)"
                style={styles.emailAddress}
              ></TextInput>
            </View>
            <TouchableOpacity style={styles.loginButton1}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Create Profile")}
                style={styles.buttonRectangle1}
                title="S U B M I T"
                color="white"
              >
                <Text style={styles.nEXT}>N E X T</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161513",
  },
  background: {
    width: 602,
    height: 1194,
    marginTop: -225,
    marginLeft: -110,
  },
  rect: {
    top: 219,
    left: 105,
    width: 394,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(53,46,46,1)",
    opacity: 0.43,
  },
  image: {
    top: 0,
    left: 0,
    width: 602,
    height: 1194,
    position: "absolute",
  },
  image_imageStyle: {},
  rEGISTER2: {
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 35,
    marginTop: 372,
    marginLeft: 192,
  },
  textInputs: {
    width: 283,
    height: 46,
    marginTop: 109,
    marginLeft: 159,
  },
  password: {
    //fontFamily: "roboto-700",
    color: "#121212",
    height: 46,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  confirmPassword: {
    //fontFamily: "roboto-700",
    color: "#121212",
    height: 60,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 25,
  },
  passwordColumn: {
    marginTop: 80,
  },
  emailAddress: {
    //fontFamily: "roboto-700",
    color: "#121212",
    height: 60,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    flex: 1,
    marginTop: -90,
  },
  loginButton1: {
    width: 283,
    height: 49,
    marginTop: 211,
    marginLeft: 159,
  },
  buttonRectangle1: {
    backgroundColor: "#10100f",
    borderRadius: 27,
    flex: 1,
  },
  nEXT: {
    // fontFamily: "roboto-700",
    color: "rgba(241,222,222,1)",
    fontSize: 25,
    height: 41,
    width: 97,
    marginTop: 8,
    marginLeft: 93,
  },
  rectStack: {
    width: 602,
    height: 1194,
  },
});

export default RegisterPage;
