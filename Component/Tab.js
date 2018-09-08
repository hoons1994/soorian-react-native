
import React, {Component} from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation';
import MainTab from './Tab/MainTab';
import BoardTab from './Tab/BoardTab';
import AddMediaTab from './Tab/AddMediaTab';
import SettingsTab from './Tab/SettingsTab';
import ProfileTab from './Tab/ProfileTab';
class Tab extends Component {
    static navigationOptions = {
        header: null
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
    // MainVC
    Main:{
        screen:MainTab
    },
    // 게시판
    Board:{
        screen:BoardTab
    },
    // 글쓰기
    AddMedia:{
        screen: AddMediaTab
    },
    // 내정보
    Profile:{
        screen:ProfileTab
    },
    // 세팅
    Settings:{
        screen:SettingsTab
    },
    
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

