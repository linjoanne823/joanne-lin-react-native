import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { Button } from "react-native-paper";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "react-native-navigation";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { setUserId } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:8080/users/login",
        {
          email: email,
          password: password,
        },
        {
          "Content-Type": "application/json",
        }
      )
      .then((response) => {
        console.log(response);
        props.setIsLoggedIn(true);
        setUserId(response.data.data.user.user_id);
      })
      .catch((err) => {
        console.log(err);
        setIsLoginError(true);
        setErrorMessage("Oh nuu try again :/");
      });
  };

  return (
    <SafeAreaView>
        <View>
          {isLoginError && <Text style={{ color: "red" }}>{errorMessage}</Text>}
          <TextInput
            placeholder={"Enter your email"}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            secureTextEntry={true}
            placeholder={"Enter your password"}
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
          <Button onPress={handleSubmit}>Login</Button>
        </View>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 0.8,
    borderColor: "grey",
    padding: 10,
  },
});

export default Login;
