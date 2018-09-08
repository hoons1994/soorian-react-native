import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Alert,
  Image,
  ScrollView
} from 'react-native';
import {Icon} from 'native-base';
import {Navigator,} from 'react-native-deprecated-custom-components'

export default class App extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
        < Icon name = 'ios-search' style={{color:tintColor}} />
    )
}
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    var secondArr = [];
    for(var i = 1; i <= 100; ++i) secondArr.push({title:'Sample Title' + i, sub:'Write your message here.'});

    var thirdArr = [];
    for(var i = 1; i <= 20; ++i) thirdArr.push({title:'말이다 청춘! ' + i, uri:'https://facebook.github.io/react/img/logo_og.png'});

    this.state = {
      firstSceneDS: ds.cloneWithRows(['모두의 공원', '사진게시판']),
      secondSceneDS: ds.cloneWithRows(secondArr),
      thirdSceneDS: ds.cloneWithRows(thirdArr),
    };
  }

  render() {
    const routes = [
      {title: '모든 게시판', index: 0},
      {title: '모두의 공원', index: 1},
      {title: '사진게시판', index: 2},
      {title: '모두의 공원 - 상세보기', index: 3},
      {title: '사진게시판 - 상세보기', index: 4}
    ];
    return (
      <Navigator
        initialRoute={routes[0]}
        initialRouteStack={routes}
        renderScene={(route, navigator) => {
          if(route.index == 0) {
            return (
              <ListView
                dataSource={this.state.firstSceneDS}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress={() => {
                    if (rowData === "모두의 공원") {
                      navigator.push(routes[1]);
                    } else if (rowData === "사진게시판") {
                      navigator.push(routes[2]);
                    }
                  }}>
                    <View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{padding: 8}}>{rowData}</Text>
                        <Text style={{padding: 8, paddingRight:12}}>&gt;</Text>
                      </View>
                     <View style={{width:'100%', marginTop:8, height:1, backgroundColor:'#ccc'}} />
                    </View>
                  </TouchableHighlight> 
                }
              />
            );
          } else if(route.index == 1) { // 모두의 공원 씬
            return (
              <ListView
                style={{backgroundColor:'#fff', width:'100%', height:'100%'}}
                dataSource={this.state.secondSceneDS}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress={() => {
                    routes[3].title = rowData.title;
                    this.state.txt = "힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...\n힘있다 이것이다 인류의 역사를 꾸며 내려온 동력은 바로 이것이다 이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑\n\n사랑의 풀이 돋고 이상의 꽃이 피고...";
                    navigator.push(routes[3]);
                  }}>
                    <View>
                      <Text style={{padding: 8, fontSize: 15}}>{rowData.title}</Text>
                      <Text style={{paddingLeft:8, marginTop:-8, fontSize: 12, color: '#ccc'}}>{rowData.sub}</Text>
                      <View style={{width:'100%', marginTop:8, height:1, backgroundColor:'#ccc'}} />
                    </View>
                  </TouchableHighlight>
                }
              />
            );
          } else if(route.index == 2) { // 사진게시판 씬
            return (
              <ListView
                style={{backgroundColor:'#fff', width:'100%', height:'100%'}}
                dataSource={this.state.thirdSceneDS}
                renderRow={(rowData) =>
                  <TouchableHighlight onPress={() => {
                    routes[4].title = rowData.title;
                    this.state.uri = rowData.uri;
                    this.state.title = "것이다 이상의 꽃이";
                    this.state.desc = "것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...\n것이다 보라 청춘을! 그들의 몸이 얼마나 튼튼하며...";
                    navigator.push(routes[4]);
                  }}>
                    <View style={{alignItems:'center'}}>
                      <Image
                        style={{width:'100%', height:200, resizeMode:'cover'}}
                        source={{uri: rowData.uri}}
                        />
                      <Text style={{padding:8}}>{rowData.title}</Text>
                    </View>
                  </TouchableHighlight>
                }
              />
            );
          } else if(route.index == 3) { // 모두의 공원 상세보기 씬
            return (
              <View style={{backgroundColor:'#fff', width:'100%', height:'100%'}}>
                <ScrollView>
                  <Text>{this.state.txt}</Text>
                </ScrollView>
              </View>
            );
          } else if(route.index == 4) { // 사진게시판 상세보기 씬
            return (
              <View style={{backgroundColor:'#fff', width:'100%', height:'100%'}}>
                <ScrollView>
                  <Image
                    style={{width:'100%', height:200, resizeMode:'cover'}}
                    source={{uri: this.state.uri}}
                    />
                  <Text style={{padding:8, fontSize:17, fontWeight:'bold'}}>{this.state.title}</Text>
                  <Text style={{padding:8}}>{this.state.desc}</Text>
                  </ScrollView>
              </View>
            );
          }
        }}
        style={{paddingTop: 55}}
        navigationBar={
           <Navigator.NavigationBar
             routeMapper={{
               LeftButton: (route, navigator, index, navState) =>
                {
                  if (index === 0) {
                    return null;
                  } else {
                    return (
                      <TouchableHighlight onPress={() => navigator.pop()}>
                        <View style={{justifyContent:'center', alignItems:'center', width:50, height:'100%'}}>
                          <Text style={{color:'#fff'}}>Back</Text>
                        </View>
                      </TouchableHighlight>
                    );
                  }
                },
               RightButton: (route, navigator, index, navState) =>
                 {
                  if (index === 0) {
                    return null;
                  } else {
                    return (
                      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', width:110, height:'100%'}}>
                        <Text style={{color:'#fff'}}>Search</Text>
                        <Text style={{paddingLeft:8, color:'#fff'}}>More</Text>
                      </View>
                    );
                  }
                },
               Title: (route, navigator, index, navState) =>
                {
                  if (index === 0) {
                    return (
                      <View style={{justifyContent:'center', alignItems:'center', width:'75%', height:'100%'}}>
                        <Text style={{color:'#fff'}}>{route.title}</Text>
                      </View>
                    );
                  } else {
                    return (
                      <View style={{justifyContent:'center', height:'100%'}}>
                        <Text style={{color:'#fff'}}>{route.title}</Text>
                      </View>
                    );
                  }
                },
             }}
             style={{backgroundColor: '#333'}}
           />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});