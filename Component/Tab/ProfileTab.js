import React, {Component}from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { Icon, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';
import {createStackNavigator} from 'react-navigation';

class ProfileTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'person' style={{color:tintColor}} />
        )
    }
    render(){
        return(
            <ProStack/>
        );
    }
    

}
class ProfileVC extends Component{
    static navigationOptions = {
        title: "Soorian"
    }
    render(){
        return(
            <View style = {style.container}>
                {/* <Header>
                    <Body><Text style={{fontWeight:'900'}}>Soorian</Text></Body>
                </Header> */}
                {/* <Content> */}
                <View style = {style.wrap}>
                    <View style = {[style.text, {flex:3, flexDirection: 'row'}]}>
                        {/* <TouchableOpacity onPress={() => alert('test')}> */}
                            <View style={{flex:1}}>
                                <Image source={require('../../assets/cat.jpg')}
                                style={{width:75, height:75, borderRadius:10}}/>
                            </View>
                            <View style={{flex:3, flexDirection: 'column', padding: 15}}>
                                {/* <View style={{flex:1}}> */}
                                    <Text style={{fontSize:20}}>Nickname</Text>
                                {/* </View>
                                <View style={{flex:1, flexDirection: 'row'}}> */}
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{flex:1}}>Name</Text>
                                    <Text style={{flex:1}}>Id</Text>
                                </View>
                                {/* </View> */}
                            </View>
                        {/* </TouchableOpacity> */}
                    </View>
                    <View style = {[style.text, {flex:1, flexDirection: 'row', padding:0}]}>
                        {/* <TouchableOpacity onPress={() => alert('test')}> */}
                            {/* <Button> */}
                                <Text style = {style.button}>게시글</Text>
                            {/* </Button> */}
                            {/* <Button> */}
                                <Text style = {style.button}>댓글</Text>
                            {/* </Button> */}
                            {/* <Button> */}
                                <Text style = {style.button}>스크랩</Text>
                            {/* </Button> */}
                            {/* <Button> */}
                                <Text style = {style.button}>알람</Text>
                            {/* </Button> */}
                        {/* </TouchableOpacity> */}
                    </View>
                    <View style = {[style.text, {flex:14, backgroundColor: 'red'}]}>
                        <Content>
                            <Text>ListView</Text>
                        </Content>
                    </View>
                </View>
                {/* </Content> */}
            </View>
        );
    }
}

const ProStack = createStackNavigator(
    {
      ProVC: ProfileVC,
    },
    {
      initialRouteName: 'ProVC',
    }
  );

export default ProfileTab;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    wrap: {
        flex: 1,
        flexDirection: 'column'
    },
    text: {
        padding: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    button: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // textAlignVertical: 'center', // Android
        lineHeight: 30,
        textAlign:'center',
        color: 'black',
        backgroundColor: '#1476e3',
    }
})