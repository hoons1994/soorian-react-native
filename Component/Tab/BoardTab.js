import React, {Component }from 'react';
import {
    View,
    Text,
    StyleSheet, FlatList, TouchableOpacity, Alert
} from 'react-native';
import {Icon, Container} from 'native-base';
import {createStackNavigator} from 'react-navigation';
// import { List, ListItem, SearchBar } from "react-native-elements";
export default class BoardTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-search' style={{color:tintColor}} />
        )
    }
    render(){
        return(
          <BoardStack/>
        );
    }
}
class View1 extends Component{
    static navigationOptions = {
        title: '게시판',
        headerStyle: {
            backgroundColor: '#0B519C'
        },
        headerTintColor: 'white'
    }
    constructor(props) {
        super(props);
        var secondArr = [];
        for(var i = 1; i <= 100; ++i) secondArr.push({title:'Sample Title' + i, sub:'Write your message here.'});
        this.state = {
          firstVC: [ 
            { name: '자유게시판'}, 
            { name: '대나무숲'}, 
            { name: '정보게시판'}, 
            { name: '이벤트참여'}, 
            { name: '중고나라'}, 
          ],
          secondVC: secondArr,
          id: 0,
          num: 0
        }
      }
    _click=(name)=>{
        // const {index} = 
        // Alert.alert(name);
        if(name=='자유게시판'){
            this.props.navigation.navigate("SubVC");
        }
    }
    render(){
        const { firstVC, secondVC,id } = this.state; 
        
        return(
            <View style={styles.container}>
                 <FlatList 
                  data={firstVC} 
                  keyExtractor={(item, index) => item.Id}
                  renderItem={({ item, index }) => 

                        <View style={styles.list}> 
                    <TouchableOpacity onPress={() => this._click(item.name)}
                    
                    
                    >
                        <Text style={styles.touch}>{item.name}</Text> 
                    </TouchableOpacity>
                  </View>  
                  }
                />
            </View>
        );
    }
}
class View2 extends Component{
    render(){
        return(
            <View>
                <Text>dd</Text>
            </View>
        )
    }
}
const BoardStack = createStackNavigator(
    {
      BoardVC: View1,
      SubVC: View2
    },
    {
      initialRouteName: 'BoardVC',
    }
  );

// export default BoardTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    heading: {
        height: 60,
        backgroundColor: '#03A9F4',
        alignItems: 'center',
        justifyContent: 'center',
      },
      headingTest: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
      },
    list: { 
        flex: 1, flexDirection: 'row',
        margin: 2, 
        backgroundColor: 'white', 
        height: 50, 
        // justifyContent: 'space-around', 
        paddingLeft: 10, 
        // elevation: 1 
        },
    touch:{
        marginVertical: 13,
        marginHorizontal: 10,
    }
})