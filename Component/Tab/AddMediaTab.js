import React, {Component }from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';
import {Icon} from 'native-base';
import {createStackNavigator} from 'react-navigation';

class AddMediaTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-add-circle' style={{color:tintColor}} />
        )
    }
    constructor(props){
		super(props)
		this.state={
			txttitle:'',
			
		}
	}
    Send = () =>{
		alert(this.txttitle);
		const {txttitle} = this.state;
		fetch('https://soorian.vps.phps.kr/o3o/send.php', {
			method: 'post',
			header:{
				'Accept': 'application/json',
				'Content-type': 'application/json'
			},
			body:JSON.stringify({
				title: txttitle,
				email: 'kbw2204',
				date: '18.18.18',
			})
			
		})
		.then((response) => response.json())
			.then((responseJson) =>{
				alert(responseJson);
			})
			.catch((error)=>{
				console.error(error);
			});
	}
    render(){
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 300, backgroundColor: 'yellow'}}
                     placeholder="당신의 생각을 들려주세요."
                     onChangeText= {txttitle => this.setState({txttitle})}
                />
                <Button
                    title='보내기'
                    onPress={this.Send}
                />
            </View>
        );
    }
}

export default AddMediaTab;
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})