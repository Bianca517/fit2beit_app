import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ComboBoxComponent } from "@syncfusion/ej2-react-dropdowns";

import LoginPage from "./src/screens/LoginPage.js";
import RegisterPage from "./src/screens/RegisterPage.js";
import CreateProfilePage from "./src/screens/CreateProfilePage.js";

export default function App() {
  return (
    <View style={styles.container}>
      <RegisterPage></RegisterPage>
      <StatusBar style="auto" />
    </View>
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
