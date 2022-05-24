import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Alert,
  TouchableOpacity
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native-web";

var RNFS = require("react-native-fs");
var path = "../assets/trainer/trainerMenusAndWorkouts.txt";

function addListener(eventName) {}

const TrainerPage=({navigation}) => {
  const [selectedWorkout, setSelectedWorkout] = useState();
  const [workoutLink, setWorkoutLink] = useState();
  const [menu, setMenu] = useState();

  function writeFile() {
    const stringToWrite = "";
    if (menu !== null) stringToWrite += "\nMenu: " + menu;

    if (workoutLink !== null)
      stringToWrite +=
        "\nSelected Workout" + selectedWorkout + "\nLink: " + workoutLink;

    if (stringToWrite !== null) {
      RNFS.writeFile(path, stringToWrite, "utf8")
        .then(success => {
          console.log("FILE WRITTEN!");
        })
        .catch(err => {
          console.log(err.message);
        });
    } else {
      Alert.alert("Please complete each text input!");
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
          <View style={styles.group}>
            <ImageBackground
              source={require("../assets/images/TrainerPageBkd.jpg")}
              resizeMode="contain"
              style={styles.image}
              imageStyle={styles.image_imageStyle}
            >
              <Text style={styles.title}>Add Your Workouts &amp; Menus</Text>
              <TextInput
                placeholder="Add A Menu"
                placeholderTextColor="rgba(0,0,0,1)"
                multiline={true}
                value={menu}
                onChangeText={value => setMenu(value)}
                style={styles.placeholder}
              ></TextInput>
            </ImageBackground>
          </View>
          <TextInput
            placeholder="Insert Workout Link"
            placeholderTextColor="rgba(0,0,0,1)"
            multiline={false}
            value={workoutLink}
            onChangeText={value => setWorkoutLink(value)}
            style={styles.placeholder1}
          ></TextInput>
          <Picker
            selectedValue={selectedWorkout}
            onValueChange={itemValue => {
              setSelectedWorkout(itemValue);
            }}
            style={styles.workoutsPicker}
          >
            <Picker.Item
              color="#121212"
              label="Upper Body"
              value="upper_body"
            />
            <Picker.Item
              color="#121212"
              label="Lower Body"
              value="lower_body"
            />
            <Picker.Item color="#121212" label="Full Body" value="full_body" />
          </Picker>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => writeFile()}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  group: {
    width: 254,
    height: 166,
    marginTop: 85,
    marginLeft: 61,
  },
  image: {
    width: 520,
    height: 850,
    marginTop: -104,
    marginLeft: -167,
  },
  image_imageStyle: {},
  title: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 166,
    width: 254,
    fontSize: 40,
    marginTop: 104,
    marginLeft: 167,
  },
  placeholder: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 50,
    width: 282,
    fontSize: 20,
    textAlign: "left",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#000000",
    borderWidth: 4,
    marginTop: 40,
    marginLeft: 153,
  },
  placeholder1: {
    //fontFamily: "roboto-regular",
    color: "#121212",
    height: 52,
    width: 282,
    fontSize: 20,
    textAlign: "left",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderColor: "#000000",
    borderWidth: 4,
    marginTop: 130,
    marginLeft: 47,
  },
  workoutsPicker: {
    marginTop: -30,
  },
  submitButton: {
    top: 480,
    left: 102,
    width: 274,
    height: 49,
    position: "absolute",
  },
  submitText: {
    //fontFamily: "roboto-700",
    color: "#1f7ed3",
    fontSize: 20,
    height: 41,
    width: 160,
    marginTop: 10,
    marginLeft: "25%",
    alignItems: "center",
  },
});

export default TrainerPage;
