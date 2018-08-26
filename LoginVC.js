
import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableHighlight,Alert} from 'react-native';


class LoginVC extends Component {
    static navigationOptions = {
        // header: null
      };
      constructor(props) {
        super(props)
        this.state = {
          user: '',
          passwd: ''
        }
      }
      click = () =>{
        const { user, passwd }  = this.state ;
            if(user=='123'&&passwd=='123'){
            //   Alert.alert('test')
            this.props.navigation.navigate('TabVC')
            }
      }
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <TextInput
                style={styles.input}
                placeholder={'Enter ID'}
                maxLength={12}
                multiline={false}
                autoCapitalize={false}
                onChangeText={user => this.setState({user})}
              />
              <TextInput 
                style={styles.input}
                secureTextEntry ={true}
                placeholder={'Enter Password'}
                maxLength={12}
                multiline={false}
                autoCapitalize={false}
                onChangeText={passwd => this.setState({passwd})}
              />
                <TouchableHighlight
                  style={styles.button}
                  underlayColor={'#328FE6'}
                  onPress={this.click}
                > 
                <Text style={styles.label}>LOGIN</Text>
              </TouchableHighlight>
              </View>
            </View>
        );
      }
}
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
    },
    loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    input: {
    width: 250,
    color: '#555555',
    marginTop: 5,
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
    },
    button: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#328FE6',
    padding: 10,
    marginTop: 10,
    backgroundColor: 'green'
    },
    label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#ffffff'
    }
    });

  export default LoginVC;