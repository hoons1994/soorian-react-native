// npm install react-navigation
// npm install native-base

import React, {Component} from 'react';
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