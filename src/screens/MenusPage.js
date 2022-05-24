import React, { useState } from "react";
import { View, TouchableOpacity, Text, Alert } from "react-native";
import { Agenda } from "react-native-calendars";
import { Card, Avatar } from "react-native-paper";
//import Typography from "../components/Typography";
import { NavigationContainer } from "@react-navigation/native";

const timeToString = time => {
  const date = new Date(time);
  return date.toISOString().split("T")[0];
};

const meals = ["Breakfast", "Snack 1", "Lunch", "Snack 2", "Dinner"];

import mealPlans from "../assets/mealPlans/mealPlans.js";
import recipes from "../assets/recipes/recipes.js";

function check_if_recipe_exists(recipe_name) {
  if (recipes.hasOwnProperty(recipe_name)) return 1;
  return 0;
}

export const validateInput = (str = "") => str.includes("@");

const Schedule = ({ navigation }) => {
  const [items, setItems] = useState({});
  const loadItems = day => {
    setTimeout(() => {
      for (let i = 0; i < 16; i++) {
        //parcurge zilele pentru care afiseaza meniul
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          //const numItems = Math.floor(Math.random() * 3 + 1);
          const numItems = 5;
          for (let j = 0; j < numItems; j++) {
            //stringJ = j.toString();
            //stringMealsJ = meals[j].toString();
            items[strTime].push({
              name: meals[j] + " : " + mealPlans[i % 16][j][0],
              pathToImage: mealPlans[i % 16][j][1],
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      setItems(newItems);
    }, 1000);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity
        onPress={() => {
          check_if_recipe_exists(
            item.name.split(" ").slice(2).toString().replaceAll(",", " ")
          ) == 1
            ? navigation.navigate(
                "Recipe",
                item.name.split(" ").slice(2).toString().replaceAll(",", " ")
              )
            : Alert.alert("Sorry! There is no recipe available for this meal.");
        }}
        style={{ marginRight: 10, marginTop: 17 }}
      >
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text>{item.name}</Text>
              <Avatar.Image source={item.pathToImage} />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={"2022-05-31"}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Schedule;
