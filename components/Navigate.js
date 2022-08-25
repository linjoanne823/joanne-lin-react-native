import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import RecipeList from "./RecipeList";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Login from "./Login";
import FavouriteRecipes from "./FavouriteRecipes";
import { UserContext } from "../contexts/UserContext";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
  
      <Tab.Navigator>
        <Tab.Screen
          name="Recipes"
          component={RecipeList}
          options={{
            tabBarLabel: "Recipes",
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="food-variant"
                color="black"
                size={26}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={FavouriteRecipes}
          options={{
            tabBarLabel: "Favourites",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="heart" color="black" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default function Navigate() {
  return (
    <NavigationContainer>
      <Tabs />
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
