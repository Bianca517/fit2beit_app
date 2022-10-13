import React, { Component, useState } from "react";
import { Asset } from "expo";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { db } from "../../firebase";

const fileUri = "../assets/trainer/text.txt";

const TrainerPage = ({ navigation }) => {
  const [selectedWorkout, setSelectedWorkout] = useState();
  const [workoutLink, setWorkoutLink] = useState();
  const [menu, setMenu] = useState();

  function addTrainerInput() {
    if (workoutLink !== undefined)
      db.collection("Workouts")
        .doc(selectedWorkout)
        .set({
          workoutLink: workoutLink,
        })
        .then(success => console.log(success))
        .catch(err => {
          alert(err);
        });
    if (menu !== undefined) {
      const noMenus = 0;
      db.collection("Menus")
        .get()
        .then(documents => {
          db.collection("Menus")
            .doc("Menu" + documents.size)
            .set({
              menu: menu,
            })
            .then(success => console.log(success))
            .catch(err => {
              alert(err);
            });
        })
        .catch(err => 0);

      if (workoutLink.length > 0 || menu.length > 0)
        Alert.alert("Succesfully added workouts!");
      //else Alert.alert("You cannout submit both entry fields!");
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
              <Text style={styles.title}>Add Your Workouts</Text>
              <TextInput
            placeholder="Insert Workout Link"
            placeholderTextColor="rgba(0,0,0,1)"
            multiline={false}
            value={workoutLink}
            onChangeText={value => setWorkoutLink(value)}
            style={styles.placeholder1}
          ></TextInput>
              <View style={styles.button5}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Log In")}
                  style={styles.buttonRectangle1}
                >
                  <Text style={styles.buttonText2}>Log Out</Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
          
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
            onPress={() => {
              addTrainerInput();
            }}
            style={styles.submitButton}
          >
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
  },
  group: {
    width: 250,
    height: 60,
    marginTop: 80,
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
    fontSize: 35,
    marginTop: 104,
    marginLeft: 290,
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
    marginTop: 10,
    marginLeft: 175,
  },
  workoutsPicker: {
    marginTop: 140,
    marginLeft: -5,
  },
  submitButton: {
    marginTop: 480,
    left: 125,
    width: 130,
    height: 49,
    position: "absolute",
    backgroundColor: "#E6E6E6",
    borderRadius: 50,
    alignContent: "center",
    alignSelf: "center",
  },
  submitText: {
    //fontFamily: "roboto-700",
    color: "#000",
    fontSize: 21,
    height: 41,
    width: 160,
    marginTop: 10,
    marginLeft: "24.5%",
    alignItems: "center",
  },
  button5: {
    marginTop: 350,
    marginLeft: 370,
    borderRadius: 100,
    marginRight: 50,
    padding: 10,
    backgroundColor: "#a3bacf",
    alignItems: "center",
  },
  buttonText2: {
    // fontFamily: "roboto-700",
    color: "#1f7ed3",
    fontSize: 20,
    height: 30,
    width: 150,
    marginTop: 0,
    marginLeft: 0,
    textAlign: "center",
  },
});

export default TrainerPage;
