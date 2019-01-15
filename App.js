import React, {Component} from 'react';
import { 
  StyleSheet, 
  View, 
  Button, 
  Text, 
  TouchableOpacity, 
  Image, 
  Dimensions, 
} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './LoginVC';
import Register from './register';
import Tab from './Component/Tab';

const {width, height} = Dimensions.get("window");

export default class App extends Component {
  render() {
    return (
      <RootStack/>
    );
  }
}
class Preview extends Component{
  render(){
     return(
      <View style = {styles.container}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('LoginST')}>
          <Image 
          style={{width:width/2, height:width/2,}}
          source={require('./assets/soorian_vertical.png')}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
const LoginStack = createStackNavigator(
  {
    LoginVC: Login,
    RegisterVC: Register,
    TabVC: Tab,
  },
  {
    initialRouteName: 'LoginVC',
    // headerMode: 'none',
  }
);
const RootStack = createStackNavigator(
  {
    PreviewVC: Preview,
    LoginST: LoginStack,
  },
  {
    initialRouteName: 'PreviewVC',
    headerMode: 'none', 
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B519C',
  },
});