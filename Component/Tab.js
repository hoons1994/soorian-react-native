
import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import HomeTab from './Tab/HomeTab';
import SearchTab from './Tab/SearchTab';
import AddMediaTab from './Tab/AddMediaTab';
import LikesTab from './Tab/LikesTab';
import ProfileTab from './Tab/ProfileTab';
class Tab extends Component {
    static navigationOptions = {
        headre: null
        // headerLeft:  <Icon name = 'ios-camera-outline' style={{paddingLeft:10}}/> ,
        // title: 'Instagram',
        // headerRight: <Icon name='ios-send-outline' style={{paddingRight:10}}/>,
    }
  render() {
    return (
        <AppTabNavigator/>
        // <View>
        //     <Text>tab</Text>
        // </View>
    );
  }
}
export default Tab;
const AppTabNavigator = createBottomTabNavigator({
    HomeTab:{
        screen:HomeTab
    },
    Search:{
        screen:SearchTab
    },
    AddMedia:{
        screen: AddMediaTab
    },
    Likes:{
        screen:LikesTab
    },
    Profile:{
        screen:ProfileTab
    }
}, {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
        style: {
            ...Platform.select({
                android: {
                    backgroundColor:'white'
                }
                
            })
        },
        activeTintColor: '#000',
        inactiveTintColor: '#d1cece',
        showLabel: false,
        showIcon: true,
    }
}
)

