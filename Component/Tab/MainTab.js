import React, {Component }from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    YellowBox,
    Alert,
    refreshing
} from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator} from 'react-navigation';

class MainTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-heart' style={{color:tintColor}} />
        )
    }   
    render(){
        return(
          <MainStack/>
        );
    }
}

class View1 extends Component{
    static navigationOptions = {
    title: "soorian",
        headerStyle: {
            backgroundColor: '#0B519C'
        },
        headerTintColor: 'white'
    }
    constructor(props) {
        super(props);
        this.state={
            refreshing: false,
            dataSource: [],
            isLoading: true
        }
        YellowBox.ignoreWarnings([
            'Warning: componentWillMount is deprecated',
            'Warning: componentWillReceiveProps is deprecated',
          ]);
    }
    GetItem = (flower_name)=> {
        Alert.alert(flower_name);
    }
    FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: .5,
              width: "100%",
              backgroundColor: "#000",
            }}
          />
        );
      }
      webCall=()=>{
        return fetch('https://soorian.vps.phps.kr/o3o/list.php')
               .then((response) => response.json())
               .then((responseJson) => {
                 this.setState({
                   isLoading: false,
                   dataSource: responseJson
                 }, function() {
                   // In this block you can do something with new state.
                 });
               })
               .catch((error) => {
                 console.error(error);
               });
      
       }
    componentDidMount() {
        this.webCall();
      }
      onRefresh = () => {
        this.setState({
          data:this.state.dataSource
        });
        this.webCall()
        // Alert.alert("리셋")
      }
    render(){
        if (this.state.isLoading) {
            return (
              <View style={{flex: 1, paddingTop: 20}}>
                <ActivityIndicator size="large"/>
              </View>
            );
        }
        else{
                return(
                    <View style={styles.container}>
                         <FlatList 
                          refreshing={this.state.refreshing}
                          onRefresh={this.onRefresh}
                        data={this.state.dataSource} 
                        ItemSeparatorComponent = {this.FlatListItemSeparator}
                          renderItem={({ item, index }) => 
                            <View style={styles.block}>
                                <View style={styles.left}>
                                    <View style={styles.title}>
                                        <Text onPress={this.GetItem.bind(this,item.date)} style={styles.txt_title}>
                                            {item.email}
                                        </Text>
                                    </View>
                                    <View style={styles.sub_title}>
                                            <Text style={styles.txt_subtitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.txt_subtitle}>
                                                {item.date}
                                            </Text>
                                    </View>
                                </View>
                                
                                <View style={{flex:2}}>
                                   
                                </View>
                            </View>
                          }
                        />
                    </View>
                );

        }
    }
}


const MainStack = createStackNavigator(
    {
      MainVC: View1,
    //   SubVC: View2
    },
    {
      initialRouteName: 'MainVC',
    }
  );

export default MainTab;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    block: {
        height: 80,
        backgroundColor: 'white',
        flexDirection: 'row',
        margin: 2
    },
    left:{
        flex:7,
        // backgroundColor:'green'
    },
    title:{
        // backgroundColor:'red',
        flex:2,
        margin: 2, 
        alignItems: "flex-start", 
        justifyContent: 'center',
    },
    txt_title:{
        fontSize: 15, 
        marginLeft: 10
    },
    txt_subtitle:{
        fontSize: 10,
        marginLeft: 10, 
        // width:width/6, 
        // backgroundColor:'yellow',
    },
    sub_title: {
        // backgroundColor:'blue',
        flex:1, 
        margin: 2,
        alignItems: "center",
        flexDirection: 'row',
    },

})