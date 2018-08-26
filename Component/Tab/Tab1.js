import React from 'react';
import { StyleSheet, Text, View, ViewPropTypes } from 'react-native';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'red',
  },
});

class Tab1 extends React.Component {
  state = { hideNavBar: true };

  render() {
    return (
      <View>
        <Text>te</Text>
        {/* {this.props.name === 'test' && <Button onPress={() => Actions.Test()}>next screen for tab1_1</Button>} */}
      </View>
    );
  }
}
export default Tab1;
