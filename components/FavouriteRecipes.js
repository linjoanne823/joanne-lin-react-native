import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import axios from "axios";
import UseModal from "./UseModal";
import RecipeDetails from "./RecipeDetails";
import { UserContext } from "../contexts/UserContext";

export default function FavouriteRecipes() {
  const [favouriteRecipes, setFavouriteRecipes] = useState([]);
  const [activeModalIndex, setActiveModalIndex] = useState(-1);
  const {userId} = useContext(UserContext)

  const getFavouriteRecipes = () => {
    axios
      .get(`http://localhost:8080/recipes/favourites/?userId=${userId}`)
      .then((response) => {
        setFavouriteRecipes(response.data);
      });
  };

  useEffect(() => {
    getFavouriteRecipes();
  }, []);

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       
        {favouriteRecipes.map((recipe, i) => {
            {
              return (
                <View key={recipe.id}>
                  <TouchableOpacity onPress={() => setActiveModalIndex(i)}>
                    <Image
                      source={{ uri: recipe.image }}
                      style={{ width: 250, height: 250, alignSelf: "center" }}
                    />

                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: "600",
                        padding: 20,
                        alignSelf: "center",
                      }}
                    >
                      {recipe.title}
                    </Text>
                    {activeModalIndex === i && (
                      <UseModal>
                        {<RecipeDetails recipeId={recipe.id} />}
                      </UseModal>
                    )}
                  </TouchableOpacity>
                </View>
              );
            }
          })
        }
      </ScrollView>
    </SafeAreaView>
  );
}
