import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import {
  Chat,
  Login,
  SignUp,
  Home,
  Search,
  Setting,
  Profile,
  CreatePost,
} from "../../containers";
import { View, Text } from "react-native";
import { Tabbar } from "../../shared";
import { AnimatedNavigation } from "../navigation/AnimatedNavigation";
import React from "react";
export class Navigation extends AnimatedNavigation {
  /**
   * @name childStackNavigationOptions
   * @type GETTER
   * @desc Getter property for child stack navigation
   * @return {object} options
   */

  get childStackNavigationOptions() {
    return {
      headerMode: "none",
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarVisible: navigation.state.index < 1,
        // tabBarComponent:navigation.state.index >= 1?HideTabbar:Tabbar
      }),
      tabBarOnPress: () => {
        alert("press");
      },
      // gesturesEnabled: false,
      // transitionConfig: AnimatedNavigation.transitionConfiguration(),
    };
  }

  /**
   * @name authRoutes
   * @type GETTER
   * @desc Getter property consisting of content routes
   * @return {object} routes
   */
  get authRoutes() {
    return createStackNavigator(
      {
        LoginScreen: Login,
        SignUpScreen: SignUp,
      },
      { headerMode: "none" }
    );
  }

  /**
   * @name homeRoutes
   * @type GETTER
   * @desc Getter property consisting of authentication routes
   * @return {object} routes
   */
  get homeRoutes() {
    return createStackNavigator(
      {
        HomeScreen: Home,
        CreatePostScreen: CreatePost,
      },
      this.childStackNavigationOptions
    );
  }

  /**
   * @name profileRoutes
   * @type GETTER
   * @desc Getter property consisting of content routes
   * @return {object} routes
   */
  get profileRoutes() {
    return createStackNavigator(
      {
        ProfileScreen: Profile,
        SettingScreen: Setting,
      },
      this.childStackNavigationOptions
    );
  }

  /**
   * @name bottomTabRoutes
   * @type GETTER
   * @desc Getter property consisting of content routes
   * @return {object} routes
   */
  get bottomTabRoutes() {
    return createBottomTabNavigator(
      {
        Home: this.homeRoutes,
        // Search: Search,
        // Chittr: () => (
        //   <View>
        //     <Text>No Chittr</Text>
        //   </View>
        // ),
        // Profile: this.profileRoutes,
      },
      {
        tabBarComponent: Tabbar,
        tabBarOptions: {
          activeTintColor: "white",
          inactiveTintColor: "gray",

          safeAreaInset: { bottom: "never", top: "never" },
        },
      }
    );
  }

  /**
   * @name getMainStackNavigation
   * @desc Returns stack of main application.
   * This stack consist of all sub stack being used in this application.
   * Comprising it into single wrapper.
   * @return {object} navigationStack
   */

  getMainStackNavigation = () => {
    return createStackNavigator(
      {
        Auth: this.authRoutes,
        App: this.bottomTabRoutes,
      },
      {
        headerMode: "none",
        initialRouteName: "Auth",
        navigationOptions: {
          gesturesEnabled: false,
        },
      }
    );
  };
}
