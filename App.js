import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import RecipeDetails from "./components/RecipeDetails";
import RecipeList from "./components/RecipeList";
import UseModal from "./components/UseModal";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./components/Login";
import FavouriteRecipes from "./components/FavouriteRecipes";
import { UserContext } from "./contexts/UserContext";
import Navigate from "./components/Navigate";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {!isLoggedIn ? <Login isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> :<Navigate/>}
    </UserContext.Provider>
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
