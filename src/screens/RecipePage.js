import React, { Component, useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";

//import { BlurView } from "react-native-community/blur";
import recipes from "../assets/recipes/recipes.js";

const HEADER_HEIGHT = 350;
const { WIDTH, HEIGHT } = Dimensions.get("window");

const RecipePage = ({ navigation, route }) => {
  //const [selectedRecipe, setSelectedRecipe] = useState("");
  const scrollY = useRef(new Animated.Value(0)).current;

  const selectedRecipe = route.params;

  function renderRecipeCardHeader() {
    return (
      <View style={styles.viewHeader}>
        {/* Background Image */}
        <Animated.Image
          source={recipes[selectedRecipe]["image"]}
          resizeMode="contain"
          style={{
            height: HEADER_HEIGHT,
            width: "200%",
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75],
                }),
              },
              {
                scale: scrollY.interpolate({
                  inputRange: [-HEADER_HEIGHT, 0, HEADER_HEIGHT],
                  outputRange: [2, 1, 0.75],
                }),
              },
            ],
          }}
        />
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgb(0,0,0)",
            opacity: scrollY.interpolate({
              inputRange: [HEADER_HEIGHT - 100, HEADER_HEIGHT - 70],
              outputRange: [0, 1],
            }),
          }}
        />
      </View>
    );
  }

  function renderRecipeInfo() {
    const details =
      recipes[selectedRecipe]["duration"] +
      " | " +
      recipes[selectedRecipe]["serving"] +
      " Servings";
    return (
      <View style={styles.viewHeaderRecipe}>
        {/* Recipe */}
        <View style={styles.recipeHeader}>
          <Text style={styles.h2}>{recipes[selectedRecipe]["name"]}</Text>
          <Text style={styles.headerDetails}>{details}</Text>
        </View>
      </View>
    );
  }

  function renderIngredientHeader() {
    return (
      <View styles={styles.viewIngredientHeader}>
        <Text style={{ flex: 1, fontSize: 18, marginLeft: 25 }}>
          {" "}
          Ingredients{" "}
        </Text>
        <Text
          style={{
            color: "#D3D3D3",
            fontSize: 14,
            textAlign: "right",
            marginRight: 25,
          }}
        >
          {recipes[selectedRecipe]["ingredients"].length} items
        </Text>
      </View>
    );
  }

  function renderTextRecipe() {
    return (
      <View styles={styles.viewIngredientHeader}>
        <Text style={{ marginTop: 15, fontSize: 18, marginLeft: 25 }}>
          {" "}
          Steps{" "}
        </Text>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 30,
            marginRight: 30,
            marginBottom: 30,
            paddingLeft: 10,
            fontSize: 18,
            textAlign: "justify",
            marginLeft: 20,
          }}
        >
          {recipes[selectedRecipe]["steps"]}
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.viewContainer}>
      <Animated.FlatList
        data={recipes[selectedRecipe]["ingredients"]}
        keyExtractor={item => `&{item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}
            {renderRecipeInfo()}
            {/* Ingredient Title */}
            {renderIngredientHeader()}
          </View>
        }
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        renderItem={({ item }) => (
          <View style={styles.viewIngredients}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: "#D3D3D3",
              }}
            >
              {/* ICON */}
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>
            {/* Description */}
            <View style={styles.viewDescription}>
              <Text>{item.description}</Text>
            </View>
            {/* Quantity */}
            <View style={styles.viewQuantity}>
              <Text>{item.quantity}</Text>
            </View>
          </View>
        )}
      ></Animated.FlatList>
      {renderTextRecipe()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  viewIngredients: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginVertical: 5,
  },
  viewDescription: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  viewQuantity: {
    alignItem: "flex-end",
    justifyContent: "center",
  },
  viewHeader: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: "center",
    overflow: "hidden",
  },
  viewHeaderRecipe: {
    flexDirection: "row",
    height: 130,
    width: WIDTH,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  recipeHeader: {
    flex: 1.5,
    justifyContent: "center",
  },
  h2: {
    //fontFamily: "Roboto-Bold",
    fontSize: 22,
    lineHeight: 30,
  },
  headerDetails: {
    marginTop: 5,
    color: "#D3D3D3",
    fontSize: 14,
  },
  viewIngredientHeader: {
    flexDirection: "row",
    paddingHorizontal: 30,
    marginTop: 12,
    marginBottom: 24,
  },
});

export default RecipePage;
