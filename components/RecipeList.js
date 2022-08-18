import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button } from "react-native-paper";

import axios from "axios";
import UseModal from "./UseModal";
import RecipeDetails from "./RecipeDetails";
export default function RecipeList() {
  const [recipes, setRecipes] = useState([]);
  const [diet, setDiet] = useState("");
  const [intolerances, setIntolerances] = useState([]);
  const [cuisine, setCuisine] = useState("");
  const [activeModalIndex, setActiveModalIndex] = useState(-1);
  const [noRecipesFound, setNoRecipesFound] = useState(false);

  const buildQueryString = () => {
    let queryString = "";
    if (diet) queryString += `diet=${diet}&`;

    if (intolerances) queryString += `intolerances=${intolerances}&`;

    if (cuisine) queryString += `cuisine=${cuisine}`;

    return queryString;
  };

  const getRecipes = () => {
    axios
      .get(`http://localhost:8080/recipes/?${buildQueryString()}`)
      .then((response) => {
        setNoRecipesFound(response.data.results.length === 0);
        return setRecipes(response.data.results);
      })
      .catch((error) => {
        return console.log(error);
      });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  // //   const handleSelectDietaryRestriction = (e) => {
  // //     e.preventDefault();
  // //     return setDietContext(e.target.value);
  // //   };

  // //   const handleSelectAllergies = (e) => {
  // //     e.preventDefault();
  // //     return setAllergiesContext(e.target.value);
  // //   };

  // //   const handleSelectCuisine = (e) => {
  // //     e.preventDefault();
  // //     return setCuisine(e.target.value);
  // //   };

  // //   const handleSubmit = (e) => {
  // //     e.preventDefault();
  // //     getRecipes();
  // //   };

  const styles = StyleSheet.create({
    container: {
      flex: 1
      
    },
  });

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {recipes.map((recipe, i) => {
          {
            return (
              <View key={recipe.id}>
                <TouchableOpacity onPress={() => setActiveModalIndex(i)}>
                  <Image
                    source={{ uri: recipe.image }}
                    style={{ width: 250, height: 250, alignSelf:'center'}}
                  />

                  <Text style={{fontSize:18, fontWeight:'600', padding:20, alignSelf:'center'}}>{recipe.title}</Text>
                  {
                    activeModalIndex === i && 
                      <UseModal>
                          {<RecipeDetails recipeId={recipe.id}/>}
                      </UseModal>
                  }
                </TouchableOpacity>
              </View>
            );
          }
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
