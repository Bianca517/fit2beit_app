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
const scrollY = useRef(new Animated.Value(0)).current;

const RecipePage = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState("");

  useEffect(() => {
    let { recipe } = recipes[route.params];
    setSelectedRecipe(recipe);
  }, []);

  function renderRecipeCardHeader() {
    return (
      <View style={styles.viewHeader}>
        {/* Background Image */}
        <Animated.Image
          source={selectedRecipe?.image}
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
        <Animated.View style={styles.viewAnimatedOverlay} />
      </View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View style={styles.viewHeaderRecipe}>
        {/* Recipe */}
        <View style={styles.recipeHeader}>
          <Text style={styles.h2}>{selectedRecipe?.name}</Text>
          <Text style={styles.headerDetails}>
            {selectedRecipe?.duration} |{selectedRecipe?.serving} Serving
          </Text>
        </View>
      </View>
    );
  }

  function renderIngredientHeader() {
    return (
      <View styles={styles.viewIngredientHeader}>
        <Text style={{ flex: 1, fontSize: 16 }}> Ingredients </Text>
        <Text style={{ color: "#D3D3D3", fontSize: 14 }}>
          {selectedRecipe?.ingredients.length} items
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.viewContainer}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
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
          { useNativeDriver: true }
        )}
        renderItem={({ item }) => (
          <View style={styles.viewIngredients}>
            {/* Description */}
            <View style={viewDescription}>
              <Text>{item.description}</Text>
            </View>
            {/* Quantity */}
            <View style={styles.viewQuantity}>
              <Text>{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </View>
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
  viewAnimatedOverlay: {
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
      fontFamily: "Roboto-Bold",
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
  },
});

export default RecipePage;
