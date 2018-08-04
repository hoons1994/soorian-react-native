// npm install react-navigation
// npm install react-base

import React, {Component} from 'react';
// import {createStackNavigator} from 'react-navigation';
// import {StyleSheet, Text, View} from 'react-native';
import MainScreen from './Component/MainScreen';
export default class App extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
}

// const AppStackNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen
//   }
  
// })