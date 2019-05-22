/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';



import Login from './Screens/LoginScreen'
import SignUp from './Screens/Registration'
import Home from './Screens/HomeScreen'
import Operations from './Screens/Operations'



const RootStack = createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
      }
    },
    Signup: {
      screen: SignUp
    },
    Home: {
      screen: Home
    },
    Operation:{
      screen: Operations
    }
  });

const App = createAppContainer(RootStack);

export default App;
