import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FiltersScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>The Filter</Text>
    </View>
  );
};
FiltersScreen.navigationOptions = (navigationData) => {
  const rightHandedButton = () => {
    return (
      <HeaderButtons HeaderButtuonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    );
  };
  return {
    headerTitle: "Your Filters",
    headerLeft: rightHandedButton,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FiltersScreen;
