import React, {Component }from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Button
} from 'react-native';
import { Icon, Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';

class ProfileTab extends Component{
    static navigationOptions = {
        // header : null,
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'person' style={{color:tintColor}} />
        )
    }
    render(){
        return(
            <Container style = {style.container}>
                <Header>
                    <Body><Text style={{fontWeight:'900'}}>Soorian</Text></Body>
                </Header>
                {/* <Content> */}
                <Container style = {style.wrap}>
                    <Container style = {[style.text, {flex:3, flexDirection: 'row'}]}>
                        {/* <TouchableOpacity onPress={() => alert('test')}> */}
                            <Container style={{flex:1}}>
                                <Image source={require('../../assets/soorian.png')}
                                style={{width:75, height:75, borderRadius:10}}/>
                            </Container>
                            <Container style={{flex:3, flexDirection: 'column', padding: 15}}>
                                {/* <Container style={{flex:1}}> */}
                                    <Text style={{fontSize:20}}>Nickname</Text>
                                {/* </Container>
                                <Container style={{flex:1, flexDirection: 'row'}}> */}
                                <Container style={{flexDirection: 'row'}}>
                                    <Text style={{flex:1}}>Name</Text>
                                    <Text style={{flex:1}}>Id</Text>
                                </Container>
                                {/* </Container> */}
                            </Container>
                        {/* </TouchableOpacity> */}
                    </Container>
                    <Container style = {[style.text, {flex:1, flexDirection: 'row', padding:0}]}>
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
                    </Container>
                    <Container style = {[style.text, {flex:14, backgroundColor: 'red'}]}>
                        <Content>
                            <Text>ListView</Text>
                        </Content>
                    </Container>
                </Container>
                {/* </Content> */}
            </Container>
        );
    }
}

export default ProfileTab;
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
        
    },
    wrap: {
        flex: 1,
        backgroundColor: 'gray',
        flexDirection: 'column'
    },
    text: {
        padding: 10
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    button: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        textAlignVertical: 'center', // Android
        textAlign:'center',
        color: 'blue',
        backgroundColor: 'transparent',
        borderColor: '#999',
        borderWidth: 1,
    }
})