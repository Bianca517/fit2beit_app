import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Svg, { Ellipse } from "react-native-svg";

function LoginPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <View style={styles.rectStack}>
          <ImageBackground
            style={styles.rect}
            imageStyle={styles.rect_imageStyle}
            //source={require("../assets/images/Gradient_HMzezys.png")}
          >
            <View style={styles.group2}>
              <View style={styles.fitStack}>
                <Text style={styles.fit}>FIT</Text>
                <Text style={styles.loremIpsum}>2BE</Text>
                <Text style={styles.it2}>IT</Text>
              </View>
            </View>
            <View style={styles.group4}>
              <View style={styles.rect2}>
                <View style={styles.icon2Row}>
                  <EntypoIcon name="mail" style={styles.icon2}></EntypoIcon>
                  <Text style={styles.emailAddress}>Email Address</Text>
                </View>
              </View>
              <View style={styles.rect3}>
                <View style={styles.iconRow}>
                  <MaterialCommunityIconsIcon
                    name="key-variant"
                    style={styles.icon}
                  ></MaterialCommunityIconsIcon>
                  <Text style={styles.password}>Password</Text>
                </View>
              </View>
            </View>
            <View style={styles.group5}>
              <TouchableOpacity style={styles.button2}>
                <Text style={styles.login}>Login</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <ImageBackground
            source={require("../assets/images/StartPage_Banner.jpg")}
            resizeMode="cover"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <View style={styles.group6}>
              <View style={styles.rect4}>
                <View style={styles.newMemberStack}>
                  <Text style={styles.newMember}>New Member ?</Text>
                  <Text style={styles.signUp}>Sign up</Text>
                </View>
              </View>
              <Svg viewBox="0 0 4.58 1" style={styles.ellipse}>
                <Ellipse
                  stroke="rgba(230, 230, 230,1)"
                  strokeWidth={0}
                  fill="rgba(230, 230, 230,1)"
                  cx={2}
                  cy={1}
                  rx={2}
                  ry={1}
                ></Ellipse>
              </Svg>
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
    opacity: 0.41,
    backgroundColor: "rgba(15,15, 15,0.47)",
  },
  group: {
    width: 445,
    height: 790,
    marginTop: 33,
    marginLeft: -35,
  },
  rect: {
    left: 35,
    width: 410,
    height: 909,
    position: "absolute",
    top: 0,
    overflow: "scroll",
  },
  rect_imageStyle: {},
  group2: {
    width: 212,
    height: 135,
    overflow: "visible",
    marginTop: 132,
    marginLeft: 51,
  },
  fit: {
    top: 25,
    left: 0,
    position: "absolute",
    fontFamily: "verdana-regular",
    color: "rgba(46,255,0,1)",
    height: 135,
    width: 212,
    lineHeight: 50,
    fontSize: 105,
  },
  loremIpsum: {
    top: 0,
    left: 178,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(46,255,0,1)",
    height: 113,
    width: 126,
    fontSize: 50,
  },
  it2: {
    top: 49,
    left: 178,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(20,255,0,1)",
    height: 36,
    width: 110,
    fontSize: 40,
  },
  fitStack: {
    width: 304,
    height: 160,
    marginTop: -25,
  },
  group4: {
    width: 263,
    height: 49,
    marginTop: 46,
    marginLeft: 71,
  },
  rect2: {
    width: 292,
    height: 49,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 3,
    borderStyle: "solid",
    flexDirection: "row",
    marginLeft: -21,
  },
  icon2: {
    color: "rgba(254,254,254,1)",
    fontSize: 27,
    height: 29,
    width: 27,
    marginTop: 2,
  },
  emailAddress: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 49,
    width: 209,
    fontSize: 25,
    marginLeft: 8,
  },
  icon2Row: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 21,
  },
  rect3: {
    width: 292,
    height: 49,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 3,
    borderStyle: "solid",
    flexDirection: "row",
    marginTop: 25,
    marginLeft: -21,
  },
  icon: {
    color: "rgba(255,255,255,1)",
    fontSize: 30,
    height: 33,
    width: 30,
    marginTop: 1,
  },
  password: {
    fontFamily: "roboto-regular",
    color: "rgba(255,255,255,1)",
    height: 49,
    width: 209,
    fontSize: 25,
    marginLeft: 5,
  },
  iconRow: {
    height: 49,
    flexDirection: "row",
    flex: 1,
    marginRight: 27,
    marginLeft: 21,
  },
  group5: {
    width: 274,
    height: 49,
    marginTop: 126,
    marginLeft: 59,
  },
  button2: {
    width: 274,
    height: 49,
    backgroundColor: "#E6E6E6",
    borderRadius: 27,
  },
  login: {
    fontFamily: "roboto-regular",
    color: "rgba(255,0,70,1)",
    height: 40,
    width: 85,
    fontSize: 25,
    marginTop: 9,
    marginLeft: 97,
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
  group6: {
    width: 375,
    height: 47,
    marginTop: 676,
    marginLeft: 35,
  },
  rect4: {
    height: 47,
    backgroundColor: "rgba(230,230,230,0.9)",
  },
  newMember: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "rgba(255,0,109,1)",
    height: 35,
    width: 199,
    fontSize: 26,
  },
  signUp: {
    top: 4,
    left: 188,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "rgba(255,0,109,1)",
    height: 35,
    width: 121,
    fontSize: 25,
  },
  newMemberStack: {
    width: 309,
    height: 39,
    marginTop: 5,
    marginLeft: 38,
  },
  ellipse: {
    width: 5,
    height: 1,
    marginTop: 26,
    marginLeft: -185,
  },
  rectStack: {
    height: 909,
  },
});

export default Login;
