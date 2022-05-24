import React, { Component, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Picker,
} from "react-native";

function TrainerPage(props) {
  const [selectedWorkout, setSelectedWorkout] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <ImageBackground
          source={require("../assets/images/TrainerPageBkd1.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <Text style={styles.title}>Add Your Workouts &amp; Menus</Text>
          <TextInput
            placeholder="Add A Menu"
            placeholderTextColor="rgba(0,0,0,1)"
            multiline={true}
            style={styles.placeholder}
          ></TextInput>
        </ImageBackground>
      </View>
      <TextInput
        placeholder="Insert Workout Link"
        placeholderTextColor="rgba(0,0,0,1)"
        multiline={false}
        style={styles.placeholder1}
      ></TextInput>
      <Picker
        selectedValue={selectedWorkout}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedWorkout(itemValue);
        }}
        style={styles.goalPicker}
      >
        <Picker.Item
          color="rgba(255,255,255,1)"
          label="Upper Body"
          value="upper_body"
        />
        <Picker.Item
          color="rgba(255,255,255,1)"
          label="Lower Body"
          value="lower_body"
        />
        <Picker.Item
          color="rgba(255,255,255,1)"
          label="Full Body"
          value="full_body"
        />
      </Picker>
    </View>
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
    width: 482,
    height: 850,
    marginTop: -104,
    marginLeft: -167,
  },
  image_imageStyle: {},
  title: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 166,
    width: 254,
    fontSize: 40,
    marginTop: 104,
    marginLeft: 167,
  },
  placeholder: {
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
});

export default TrainerPage;
