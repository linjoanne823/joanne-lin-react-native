import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const data = [
  { label: "African", value: "African" },
  { label: "American", value: "American" },
  { label: "British", value: "British" },
  { label: "Cajun", value: "Cajun" },
  { label: "Caribbean", value: "Caribbean" },
  { label: "Chinese", value: "Chinese" },
  { label: "Eastern European", value: "Eastern European" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Greek", value: "Greek" },
  { label: "Indian", value: "Indian" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Japanese", value: "Japanese" },
  { label: "Jewish", value: "Jewish" },
  { label: "Korean", value: "Korean" },
  { label: "Latin American", value: "Latin American" },
  { label: "Mediterranean", value: "Mediterranean" },
  { label: "Mexican", value: "Mexican" },
  { label: "Middle Eastern", value: "Middle Eastern" },
  { label: "Nordic", value: "Nordic" },
  { label: "Spanish", value: "Spanish" },
  { label: "Thai", value: "Thai" },
  { label: "Vietnamese", value: "Vietnamese" },
];

const CuisineFilter = (props) => {
  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: "white",
      borderRadius: 12,
      padding: 12,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    textItem: {
      flex: 1,
      fontSize: 16,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectedTextStyle}
      inputSearchStyle={styles.inputSearchStyle}
      iconStyle={styles.iconStyle}
      data={data}
      search
      maxHeight={300}
      labelField="label"
      valueField="value"
      placeholder="Cuisine"
      searchPlaceholder="None"
      value={props.cuisine}
      onChange={props.handleSelectCuisine}
      renderItem={renderItem}
    />
  );
};

export default CuisineFilter;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
