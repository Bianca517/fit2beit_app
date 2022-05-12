import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  Button
} from "react-native";

import HomePage from "./HomePage";
import RegisterPage from "./RegisterPage";


const LoginPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../assets/images/StartPage_Banner.jpg")}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.goToSignUp}>
              <View style={styles.containerSignUp}>
                <View style={styles.newMemberStack}>
                  <Text style={styles.newMember}>New Member ?</Text>
                  <View style={styles.signUp}>
                  <Button 
                  title = "Sign In"
                  color = "rgba(255,0,70,1)"
                  onPress={() => navigation.navigate('Register')}
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
              clearTextOnFocus={true}
              secureTextEntry={true}
              selectionColor="rgba(230, 230, 230,1)"
              style={styles.emailAddress}
            ></TextInput>
            <TextInput
              placeholder="Email Address"
              textBreakStrategy="simple"
              dataDetector="address"
              placeholderTextColor="rgba(255,255,255,1)"
              clearTextOnFocus={true}
              selectionColor="rgba(230, 230, 230,1)"
              style={styles.password}
            ></TextInput>
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.buttonRectangle}
            >
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 0.41,
    backgroundColor: "rgba(15,15, 15,0.47)",
  },
  background: {
    width: 445,
    height: 790,
    marginTop: -10,
    marginLeft: -47,
  },
  image: {
    left: 0,
    position: "absolute",
    height: 790,
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
    top: 7,
    left: 15,
    position: "absolute",
    //fontFamily: "roboto-700",
    color: "rgba(255,0,70,1)",
    height: 150,
    width: 150,
    fontSize: 20,
  },
  signUp: {
    top: 0,
    left: 210,
    //position: "absolute",
    //fontFamily: "roboto-700",
    color: "rgba(255,0,109,1)",
    height: 47,
    width: 74,
    fontSize: 50,
    marginTop: -3,
    marginLeft: 3,
    fontSize: 25,
    padding: 2,
    backgroundColor: "pink",
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
    color: "rgba(46,255,0,1)",
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
    color: "rgba(46,255,0,1)",
    height: 120,
    width: 126,
    fontSize: 55,
  },
  it: {
    top: 70,
    left: 157,
    position: "absolute",
   // fontFamily: "roboto-700",
    color: "rgba(20,255,0,1)",
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
    color: "#121212",
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
  loginButton: {
    top: 493,
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
    color: "rgba(255,0,70,1)",
    fontSize: 25,
    height: 41,
    width: 78,
    marginTop: 7,
    marginLeft: "40%",
  },
  imageStack: {
    height: 790,
  },
});

export default LoginPage;