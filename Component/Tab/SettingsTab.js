import React, {Component }from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import {Icon} from 'native-base';

class SettingsTab extends Component{
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            < Icon name = 'ios-heart' style={{color:tintColor}} />
        )
    }
    render(){
        return(
            <View style={styles.container}>
        <SectionList
          sections={[
            {title: '어플리케이션', data: ['알림 설정', '쪽지 설정']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
        );
    }
}

export default SettingsTab;
const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    sectionHeader: {
      paddingTop: 10,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 10,
      fontSize: 16,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 14,
      height: 44,
    },
  })