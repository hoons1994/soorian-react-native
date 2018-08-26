import React, {Component} from 'react';
import { StyleSheet, View, Button, Text} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Login from './LoginVC';
import Tab from './Component/Tab';
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
        <Text>Preview</Text>
        <Button
        title="goto LoginVC"
        onPress={() => this.props.navigation.navigate('LoginST')}
        >
        </Button>
      </View>
    );
  }
}
const LoginStack = createStackNavigator(
  {
    LoginVC: Login,
    TabVC: Tab,
  },
  {
    initialRouteName: 'LoginVC',
    headerMode: 'none',
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
    backgroundColor: '#F5FCFF',
  },
});
