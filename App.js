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

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const [userId, setUserId] = useState("");
  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      <Tab.Navigator>
        {/* <Tab.Screen
          name="Home"
          component={Login}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="black" size={26} />
            ),
          }}
        /> */}
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
    </UserContext.Provider>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
    // <View style={styles.container}>

    //   <RecipeList />
    //   <StatusBar style="auto" />
    // </View>
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
