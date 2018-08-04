// npm install react-navigation
// npm install native-base

import React, {Component} from 'react';
import MainScreen from './Component/MainScreen';
class App extends Component {
  render() {
    return (
      <MainScreen/>
    );
  }
}
export default App;
// const AppStackNavigator = createStackNavigator({
//   Main: {
//     screen: MainScreen
//   }
  
// })