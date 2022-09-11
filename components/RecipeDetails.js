import React, { useState, useEffect, useContext } from "react";
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
import { UserContext } from "../contexts/UserContext";

const RecipeDetails = (props) => {
  const [recipeDetails, setRecipeDetails] = useState({});
  const [showIngredients, setShowIngredients] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);
  const { userId } = useContext(UserContext);

  const getSelectRecipe = () => {
    axios
      .get(`http://ec2-54-241-76-100.us-west-1.compute.amazonaws.com:8080/recipes/${props.recipeId}?userId=${userId}`)
      .then((response) => {
        setRecipeDetails(response.data);
      });
  };

  useEffect(() => {
    getSelectRecipe();
  }, {}); 
  

  return (
     
    <SafeAreaView>
     {console.log(recipeDetails)}
      {Object.keys(recipeDetails).length > 0 ? (
        <ScrollView>
          <View>

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
