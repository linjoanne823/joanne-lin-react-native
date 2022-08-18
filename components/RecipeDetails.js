import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
// import LikeButton from "../LikeButton/LikeButtonRecipes";

const RecipeDetails = (props) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const [userId, setUserId] = useState(1);

  const getSelectRecipe = () => {
    axios
      .get(`http://localhost:8080/recipes/${props.recipeId}?userId=${userId}`)
      .then((response) => {
        setRecipeDetails(response.data);
      });
  };

  useEffect(() => {
    // if (props.favouriteRecipeDetails) {
    //   setRecipeDetails(props.favouriteRecipeDetails);
    //   //if the recipe is favourited, then update recipe details
    //   //to the favourited recipe details
    // } else {
    getSelectRecipe();
    //if not, just return the regular recipe details
    // }
  }, {}); //it's an object because there is just one

  //   const handleLikeRecipes = () => {
  //     axios.post(
  //       "http://localhost:8080/recipes/favourites",
  //       {
  //         recipeDetails,
  //         userId: 1,
  //       },
  //       {
  //         "Content-Type": "application/json",
  //       }
  //     );
  //   };

  //   const handleUnlikeRecipes = () => {
  //      const recipeId = recipeDetails.recipe_id
  //    axios.delete(
  //       `http://localhost:8080/recipes/favourites/${recipeId}?userId=${userId}`,
  //     )
  //   };

  return (
    <SafeAreaView>
      {Object.keys(recipeDetails).length > 0 ? (
        <ScrollView>
        
          <View>
            {/* <LikeButton
              handleLike={handleLikeRecipes}
              handleUnlike={handleUnlikeRecipes}
              recipeDetails={recipeDetails}
            /> */}
            {/* <Image source={{ uri: recipeDetails.image }} style={{ width: 100, height: 100 }}/> */}
            <Text>{recipeDetails.title}</Text>

            <Text>Servings: serves {recipeDetails.servings} people</Text>
            <Text>Ready in: {recipeDetails.readyInMinutes} minutes</Text>
            <View>
              <Button onPress={() => setShowIngredients(!showIngredients)}>
                Ingredients
              </Button>
              {showIngredients ? (
                <Text>
                  {recipeDetails.ingredients.toString().split(",").join("\n")}
                </Text>
              ) : null}
              <Button onPress={() => setShowInstructions(!showInstructions)}>
                Instructions
              </Button>
              {showInstructions ? (
                <Text>{recipeDetails.instructions}</Text>
              ) : null}
            </View>
          </View>
        </ScrollView>
      ) : (
        <Text>loading...</Text>
      )}
    </SafeAreaView>
  );
};

export default RecipeDetails;
