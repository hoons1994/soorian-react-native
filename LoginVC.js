import React, {Component} from 'react';
import {StyleSheet, Image, Text, View, TextInput, TouchableHighlight, Dimensions} from 'react-native';
import { Right } from 'native-base';

const {width, height} = Dimensions.get("window");
class LoginVC extends Component {
    static navigationOptions = {
        header: null
      };
      constructor(props) {
        super(props)
        this.state = {
          userEmail:'',
             userPassword:''
        }
      }
      _signin = () => {
        this.props.navigation.navigate('RegisterVC')
      }
      _click = () =>{
        const { userEmail, userPassword }  = this.state ;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
        this.props.navigation.navigate('TabVC')
        if(userEmail==""){
          //alert("Please enter Email address");
          this.setState({email:'Please enter Email address'})
        }
        
        else if(reg.test(userEmail) === false)
        {
        //alert("Email is Not Correct");
        this.setState({email:'Email is Not Correct'})
        return false;
          }
    
        else if(userPassword==""){
        this.setState({email:'Please enter password'})
        }
        else{
        
        fetch('http://soorian.vps.phps.kr/o3o/login.php',{
          // fetch('http://localhost/login.php',{
          method:'post',
          header:{
            'Accept': 'application/json',
            'Content-type': 'application/json'
          },
          body:JSON.stringify({
            // we will pass our input data to server
            email: userEmail,
            password: userPassword
          })
          
        })
        .then((response) => response.json())
         .then((responseJson)=>{
           if(responseJson == "ok"){
             // redirect to profile page
             alert("Successfully Login");
             this.props.navigation.navigate("Profile");
           }else{
             alert("Wrong Login Details");
           }
         })
         .catch((error)=>{
         console.error(error);
         });
        }
      }
      render() {
        return (
          <View style={styles.container}>
            <View style={styles.loginContainer}>
              <Image
              style={styles.logo}
              source={require('./assets/soorian_horizontal.png')}
              />
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
                  onPress={this._click}
                > 
                <Text style={styles.label}>LOGIN</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={this._signin}
                style={styles.signin}>
                
                <Text style={styles.signin}>
                  Sign Up
                </Text>
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
    },
    loginContainer: {
    width: width,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0B519C'
    },
    logo: {
      width: width*0.85,
      height: height/3.6,
      marginBottom: height/14,
    },
    input: {
    width: width*0.8,
    color: '#555555',
    marginBottom: 10,
    padding: 10,
    height: 50,
    borderColor: '#32C5E6',
    borderWidth: 1,
    borderRadius: 4,
    alignSelf: 'center',
    backgroundColor: '#ffffff'
    },
    button: {
    width: width*0.8,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ffffff',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#0B519C'
    },
    label: {
    width: 230,
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#ffffff'
    },
    signin: {
      width: width*0.8,
      height: 50,
      marginTop: 10,
      marginBottom: 50,
      paddingRight: 5,
      fontSize: 16,
      color: '#fff',
      textAlign: 'right',
      fontWeight: "500",
    }
    });

  export default LoginVC;