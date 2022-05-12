import React, { Component, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput,
  Switch,
} from "react-native";

function CreateProfilePage(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [selectedGoal, setSelectedGoal] = useState();

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
                    onValueChange={toggleSwitch}
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
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

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
  image1: {
    top: 0,
    left: 0,
    width: 602,
    height: 1194,
    position: "absolute",
  },
  image1_imageStyle: {},
  createYourProfile: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    fontSize: 33,
    textAlign: "center",
    marginTop: 280,
    marginLeft: 0,
  },
  data: {
    width: 243,
    height: 55,
    marginTop: 6,
    marginLeft: 164,
  },
  firstName: {
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-300",
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
    fontFamily: "roboto-300",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-regular",
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
    fontFamily: "roboto-300",
    color: "rgba(255,255,255,1)",
    height: 30,
    width: 243,
    fontSize: 23,
    marginTop: 30,
    marginBottom: 0,
  },
  picker: {
    marginTop: -25,
    fontFamily: "system",
  },
});

export default CreateProfilePage;
