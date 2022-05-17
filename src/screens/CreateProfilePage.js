import React, { Component, useState, useEffect } from "react";
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
} from "react-native";

import { Alert } from "react-native-web";
import { getActiveChildNavigationOptions } from "react-navigation";

import { auth, db } from "../../firebase";

const CreateProfilePage = ({ route, navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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

  function fSetGender(isEnabled) {
    if (isEnabled === true) setGender("F");
  }

  return (
    <View style={styles.container}>
      <View style={styles.background1}>
        <View style={styles.rect1Stack}>
          <View style={styles.rect1}></View>
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
                onChangeText={value => setFirstName(value)}
                //multiline={true}
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
                //multiline={true}
                style={styles.secondName}
              ></TextInput>
              <View style={styles.ageRow}>
                <TextInput
                  placeholder="Age"
                  textBreakStrategy="simple"
                  dataDetector="address"
                  placeholderTextColor="rgba(255,255,255,1)"
                  clearTextOnFocus={true}
                  selectionColor="rgba(230, 230, 230,1)"
                  onChangeText={value => setAge(value)}
                  //multiline={true}
                  style={styles.age}
                ></TextInput>
                <View style={styles.masculinStack}>
                  <Text style={styles.masculin}>M</Text>
                  <Switch
                    //value={true}
                    trackColor={{
                      true: "rgba(131,255,56,1)",
                      false: "#0f0f0f",
                    }}
                    //disabled={false}
                    thumbColor="rgba(230, 230, 230,1)"
                    onValueChange={value => {
                      fSetGender(value), toggleSwitch;
                    }}
                    value={isEnabled}
                    style={styles.switch}
                  ></Switch>
                </View>
                <Text style={styles.feminin}>F</Text>
              </View>
              <TextInput
                placeholder="Weight (kg)"
                textBreakStrategy="simple"
                dataDetector="address"
                placeholderTextColor="rgba(255,255,255,1)"
                clearTextOnFocus={true}
                selectionColor="rgba(230, 230, 230,1)"
                //multiline={true}
                onChangeText={value => setWeight(value)}
                style={styles.secondName2}
              ></TextInput>
              <TextInput
                placeholder="Height (cm)"
                textBreakStrategy="simple"
                dataDetector="address"
                placeholderTextColor="rgba(255,255,255,1)"
                clearTextOnFocus={true}
                selectionColor="rgba(230, 230, 230,1)"
                //multiline={true}
                onChangeText={value => setHeight(value)}
                style={styles.secondName1}
              ></TextInput>
              <Text style={styles.selectYourGoal}>Select Your Goal:</Text>
              <Picker
                selectedValue={selectedGoal}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedGoal(itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item
                  color="rgba(255,255,255,1)"
                  label="Lose Weight"
                  value="java"
                />
                <Picker.Item
                  color="rgba(255,255,255,1)"
                  label="Gain Muscle"
                  value="js"
                />
                <Picker.Item
                  color="rgba(255,255,255,1)"
                  label="Maintainance"
                  value="rn"
                />
              </Picker>
            </View>
            <TouchableOpacity style={styles.loginButton1}>
              <TouchableOpacity
                onPress={() => {
                  addUserDetails();
                  navigation.navigate("Log In");
                }}
                style={styles.buttonRectangle1}
              >
                <Text style={styles.submit}>S U B M I T</Text>
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
    justifyContent: "center",
  },
  background1: {
    width: 602,
    height: 1194,
    alignSelf: "center",
  },
  rect1: {
    top: 219,
    left: 105,
    width: 394,
    height: 812,
    position: "absolute",
    backgroundColor: "rgba(53,46,46,1)",
    opacity: 0.43,
  },

  loginButton1: {
    width: 283,
    height: 49,
    marginTop: 510,
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
    top: 0,
    left: 0,
    width: 602,
    height: 1194,
    position: "absolute",
  },
  image1_imageStyle: {},
  createYourProfile: {
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    textAlign: "center",
    marginTop: 240,
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
    color: "#121212",
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
    color: "#121212",
    height: 55,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 28,
  },
  age: {
    //fontFamily: "Roboto",
    color: "#121212",
    height: 48,
    width: 122,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  masculin: {
    top: 0,
    left: 0,
    position: "absolute",
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    height: 50,
    width: 40,
    fontSize: 30,
  },
  switch: {
    position: "absolute",
    top: 8,
    left: 35,
    width: 45,
    height: 23,
  },
  masculinStack: {
    width: 80,
    height: 50,
    marginLeft: 18,
    marginTop: 10,
  },
  feminin: {
    //fontFamily: "Roboto",
    color: "rgba(255,255,255,1)",
    height: 50,
    width: 40,
    fontSize: 30,
    marginLeft: 12,
    marginTop: 10,
  },
  ageRow: {
    height: 60,
    flexDirection: "row",
    marginTop: 32,
    marginRight: -29,
  },
  secondName2: {
    //fontFamily: "Roboto",
    color: "#121212",
    height: 50,
    width: 243,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 15,
    marginLeft: 0,
  },
  secondName1: {
    //fontFamily: "Roboto",
    color: "#121212",
    height: 50,
    width: 243,
    fontSize: 23,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderBottomWidth: 4,
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    marginTop: 15,
    marginLeft: 0,
  },
  rect1Stack: {
    width: 602,
    height: 1194,
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
  picker: {
    marginTop: -80,
    //fontFamily: "Roboto",
  },
});

export default CreateProfilePage;
