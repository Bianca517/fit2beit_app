import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Video from "react-native-video";

import LoginPage from "./src/screens/LoginPage.js";
import HomePage from "./src/screens/HomePage.js";
import WorkoutsPage from "./src/screens/WorkoutsPage.js";
import RegisterPage from "./src/screens/RegisterPage.js";
import CreateProfilePage from "./src/screens/CreateProfilePage.js";
import FullBody from "./src/screens/FullBody.js";
import LowerBody from "./src/screens/LowerBody.js";
import UpperBody from "./src/screens/UpperBody.js";
import MoodPage from "./src/screens/MoodPage.js";
import ToDo from "./src/screens/ToDo";
import MenusPage from "./src/screens/MenusPage.js";
import RecipePage from "./src/screens/RecipePage.js";

import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

function App() {
  return (
    //view 1 pagina
    /*<View style={styles.container}>
        <CreateProfilePage></CreateProfilePage>
        <StatusBar style="auto" />
      </View>*/

   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In" component={LoginPage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Create Profile" component={CreateProfilePage} />
        <Stack.Screen name="Workouts" component={WorkoutsPage} />
        <Stack.Screen name="Full Body Workouts" component={FullBody} />
        <Stack.Screen name="Lower Body Workouts" component={LowerBody} />
        <Stack.Screen name="Upper Body Workouts" component={UpperBody} />
        <Stack.Screen name="Quotes" component={MoodPage} />
        <Stack.Screen name="To Do" component={ToDo} />
        <Stack.Screen name="Menus" component={MenusPage} />
        <Stack.Screen name="Recipe" component={RecipePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
