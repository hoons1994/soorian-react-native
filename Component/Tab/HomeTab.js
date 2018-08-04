import React, {Component }from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Icon} from 'native-base';
import Setting from './Inner/Setting';

class HomeTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      < Icon name = 'ios-home' style={{color:tintColor}} />
    )
  }
  render(){
      return(
          <RootStack/>
      );
  }
}
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}
  
class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push('Details')}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Setting"
          onPress={() => this.props.navigation.navigate('Setting')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}
const RootStack = StackNavigator(
    {
      Home: {
        screen: HomeScreen,
      },
      Setting: {
        screen: Setting,
      },
export default HomeTab;
