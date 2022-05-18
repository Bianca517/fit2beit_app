import React, { Component, useState, useEffect, Dimensions } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Switch,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Touchable,
  Keyboard,
} from "react-native";

import { Alert, TouchableWithoutFeedback } from "react-native-web";
import { getActiveChildNavigationOptions } from "react-navigation";

import { auth, db } from "../../firebase";
import { ScreenStackHeaderRightView } from "react-native-screens";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const CreateProfilePage = ({ route, navigation }) => {
  const [selectedGoal, setSelectedGoal] = useState();
  const [firstName, setFirstName] = useState();
  const [secondName, setSecondName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();

  const { uid, email, password } = route.params;

  function addUserDetails() {
    return db
      .collection("Users")
      .doc(uid)
      .set({
        firstName: firstName,
        secondName: secondName,
        age: age,
        gender: gender,
        weight: weight,
        height: height,
      })
      .then(() => alert("Account created successfully!"))
      .catch(err => alert(err));
  }

  return (
    <KeyboardAwareScrollView behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.background1}>
            <View style={styles.rect1Stack}>
              <ImageBackground
                source={require("../assets/images/RegisterBkd.jpg")}
                resizeMode="contain"
                style={styles.image1}
                imageStyle={styles.image1_imageStyle}
              >
                <Text style={styles.createYourProfile}>
                  CREATE YOUR{"\n"}PROFILE
                </Text>
                <View style={styles.data}>
                  <TextInput
                    placeholder="First Name"
                    textBreakStrategy="simple"
                    dataDetector="address"
                    placeholderTextColor="rgba(255,255,255,1)"
                    clearTextOnFocus={true}
                    value={firstName}
                    onChangeText={value => {
                      if (value.length != 0) setFirstName(value);
                      console.warn(firstName);
                    }}
                    selectionColor="rgba(255,255,255,1)"
                    style={styles.firstName}
                  ></TextInput>
                  <TextInput
                    placeholder="Second Name"
                    textBreakStrategy="simple"
                    dataDetector="address"
                    placeholderTextColor="rgba(255,255,255,1)"
                    clearTextOnFocus={true}
                    selectionColor="rgba(230, 230, 230,1)"
                    onChangeText={value => setSecondName(value)}
                    style={styles.secondName}
                  ></TextInput>
                  <TextInput
                    placeholder="Age"
                    keyboardType="numeric"
                    textBreakStrategy="simple"
                    dataDetector="address"
                    placeholderTextColor="rgba(255,255,255,1)"
                    clearTextOnFocus={true}
                    selectionColor="rgba(230, 230, 230,1)"
                    onChangeText={value => setAge(value)}
                    style={styles.age}
                  ></TextInput>
                  <Text style={styles.selectYourGender}>Gender:</Text>
                  <Picker
                    selectedValue={gender}
                    onValueChange={(itemValue, itemIndex) =>
                      setGender(itemValue)
                    }
                    style={styles.genderPicker}
                  >
                    <Picker.Item
                      color="rgba(255,255,255,1)"
                      label="Masculin"
                      value="M"
                    />
                    <Picker.Item
                      color="rgba(255,255,255,1)"
                      label="Feminin"
                      value="F"
                    />
                  </Picker>
                  <TextInput
                    placeholder="Weight (kg)"
                    keyboardType="numeric"
                    textBreakStrategy="simple"
                    dataDetector="address"
                    placeholderTextColor="rgba(255,255,255,1)"
                    clearTextOnFocus={true}
                    selectionColor="rgba(230, 230, 230,1)"
                    onChangeText={value => setWeight(value)}
                    style={styles.weightTextInput}
                  ></TextInput>
                  <TextInput
                    placeholder="Height (cm)"
                    keyboardType="numeric"
                    textBreakStrategy="simple"
                    dataDetector="address"
                    placeholderTextColor="rgba(255,255,255,1)"
                    clearTextOnFocus={true}
                    selectionColor="rgba(230, 230, 230,1)"
                    onChangeText={value => setHeight(value)}
                    style={styles.heightTextInput}
                  ></TextInput>
                  <Text style={styles.selectYourGoal}>Select Your Goal:</Text>
                  <Picker
                    selectedValue={selectedGoal}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedGoal(itemValue)
                    }
                    style={styles.goalPicker}
                  >
                    <Picker.Item
                      color="rgba(255,255,255,1)"
                      label="Lose Weight"
                      value="lose_weight"
                    />
                    <Picker.Item
                      color="rgba(255,255,255,1)"
                      label="Gain Muscle"
                      value="gain_muscle"
                    />
                    <Picker.Item
                      color="rgba(255,255,255,1)"
                      label="Maintainance"
                      value="maintainance"
                    />
                  </Picker>
                </View>
                <TouchableOpacity style={styles.loginButton1}>
                  <TouchableOpacity
                    onPress={() => {
                      addUserDetails();
                    }}
                    style={styles.buttonRectangle1}
                  >
                    <Text style={styles.submit}>S U B M I T</Text>
                  </TouchableOpacity>
                </TouchableOpacity>
              </ImageBackground>
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  background1: {
    width: 602,
    height: 900,
    alignSelf: "center",
  },
  rect1: {
    top: 219,
    left: 105,
    width: 394,
    height: 680,
    position: "absolute",
    backgroundColor: "rgba(53,46,46,1)",
    opacity: 0.43,
  },
  loginButton1: {
    width: 283,
    height: 49,
    marginTop: 630,
    marginLeft: 155,
  },
  buttonRectangle1: {
    backgroundColor: "#10100f",
    borderRadius: 50,
    flex: 1,
  },
  submit: {
    //fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    fontSize: 25,
    height: 41,
    width: 120,
    marginTop: 10,
    marginLeft: 90,
  },
  image1: {
    top: -600,
    left: 0,
    width: 602,
    height: 2094,
    position: "absolute",
  },
  createYourProfile: {
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    textAlign: "center",
    marginTop: 630,
    marginLeft: 0,
  },
  data: {
    width: 243,
    height: 55,
    marginTop: 6,
    marginLeft: 164,
  },
  firstName: {
    //fontFamily: "Roboto",
    color: "white",
    height: 55,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 27,
  },
  secondName: {
    //fontFamily: "Roboto",
    color: "white",
    height: 55,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 15,
  },
  age: {
    //fontFamily: "Roboto",
    color: "white",
    height: 48,
    width: 122,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 15,
  },
  selectYourGender: {
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 243,
    fontSize: 23,
    marginTop: 20,
    marginBottom: 0,
  },
  genderPicker: {
    marginTop: -80,
  },
  weightTextInput: {
    //fontFamily: "Roboto",
    color: "white",
    height: 50,
    width: 243,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: -40,
    marginLeft: 0,
  },
  heightTextInput: {
    //fontFamily: "Roboto",
    color: "white",
    height: 50,
    width: 243,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 20,
    marginLeft: 0,
  },
  rect1Stack: {
    width: 602,
    //height: 1194,
  },
  selectYourGoal: {
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 243,
    fontSize: 23,
    marginTop: 30,
    marginBottom: 0,
  },
  goalPicker: {
    marginTop: -70,
    //fontFamily: "Roboto",
  },
  ScrollView: {
    height: "1%",
    backgroundColor: "black",
    automaticallyAdjustsScrollIndicatorInsets: true,
  },
});

export default CreateProfilePage;
