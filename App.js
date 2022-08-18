import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import UseModal from "./components/UseModal";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <BrowserRouter>
      </BrowserRouter> */}
      <RecipeList />
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
