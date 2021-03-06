import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function ButonDailyPlanner(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.button}>{props.button || "BUTTON"}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  button: {
    color: "#fff",
    fontSize: 25,
    //fontFamily: "roboto-700italic",
    textAlign: "center"
  }
});

export default ButonDailyPlanner;
