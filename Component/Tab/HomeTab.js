import React, {Component }from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';

class HomeTab extends Component{
<<<<<<< HEAD
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-heart' style={{color:tintColor}} />
        )
    }
    render(){
        return(
            <View style = {style.container}>
                <Text> HomeTab </Text>
            </View>
        );
    }
}

export default HomeTab;
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
=======
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
>>>>>>> 07bfc4df99bfa833e43f2faacebf16d2cb0a6f5f
