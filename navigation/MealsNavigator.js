import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import FavoritesScreen from "../screens/FavoritesScree";
import FiltersScreen from "../screens/FiltersScreen";
import { Modal, Platform } from "react-native";
import { Colors } from "../constants/Colors";

const defaultStackNavOptions = {
  headerTintColor: Colors.primaryColor,
  headerTitle: "A Sreen",
};

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetail: MealDetailScreen,
  },
  {
    // mode: "modal",
    // initialRouteName: "MealDetail",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "",
      },
      headerTintColor:
        Platform.OS === "android" ? "#ffff" : Colors.primaryColor,
    },
  }
); //return a container

const FavNavigator = createStackNavigator(
  {
    Favorite: FavoritesScreen,
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: MealsNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tintColor} //dung cai tab infor nay boi vi khi option cua tab doi
              //thi no se doi theo
            />
          );
        },
      },
    },
    Favorite: {
      screen: FavNavigator,
      navigationOptions: {
        tabBarLabel: "Favorites!",
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name="ios-star"
              size={25}
              color={tabInfo.tintColor} //dung cai tab infor nay boi vi khi option cua tab doi
              //thi no se doi theo
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      //active back ground, tint color
      activeTintColor: Colors.accentColor,
    },
  }
);

const FiltersNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    navigationOptions: {
      drawerLabel: "Filters!!!!",
    },
    defaultNavigationOptions: defaultStackNavOptions,
  }
); //de co cai header nen quang no vo stack

const MainNavigator = createDrawerNavigator(
  {
    MealsFavs: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals",
      },
    },
    Filters: FiltersNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.accentColor,
      // labelStyle: {}
    },
  }
);

export default createAppContainer(MainNavigator); //wrap root vao trong 1 cai container
