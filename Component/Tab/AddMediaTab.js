import React, {Component }from 'react';
import {
    View,
    TextInput,
    StyleSheet,
} from 'react-native';
import {Icon} from 'native-base';

class AddMediaTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-add-circle' style={{color:tintColor}} />
        )
    }
    render(){
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                     placeholder="당신의 생각을 들려주세요."
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