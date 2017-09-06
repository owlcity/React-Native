/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  WebView
} from 'react-native';


var HomeDetail = React.createClass({
  getDefaultProps(){
    return{
      url : ''
    }
  },
  render() {
    alert(this.props.url);
      return (
        <View style={styles.container}>
          {/*导航条*/}
          {this.renderNavBar()}

          <WebView
            automaticallyAdjustContentInsets={true}
            source={{uri: "https://www.baidu.com"}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            decelerationRate="normal"
            startInLoadingState={true}
          />
        </View>
      );
    },
  renderNavBar(){
    return(
      <View style={styles.navOutViewStyle}>
          {/*返回*/}
          <TouchableOpacity 
              onPress={()=>{
                this.props.navigator.pop()
              }} 
              style={styles.leftViewStyle} >
            <Image source={{uri:'icon_camera_back_normal'}} style={styles.navImageStyle} />
          </TouchableOpacity>

          <Text style={styles.navFontStyle}>更多</Text>
          <TouchableOpacity onPress={()=>{alert(1)}} style={styles.rightIconStyle} >
            <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
          </TouchableOpacity>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  navOutViewStyle : {
    height : 64,
    backgroundColor : "rgba(255,96,0,1)",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    paddingTop : 15
  },
  navFontStyle : {
    color : "#FFF",
    fontSize : 14
  },
  rightIconStyle : {
    position : "absolute",
    right : 10,
    top : 22
  },
  navImageStyle : {
    width : 26,
    height: 26,
  },
  leftViewStyle : {
    position : "absolute",
    left : 10,
    bottom : 15
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = HomeDetail;