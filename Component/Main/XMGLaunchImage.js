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
} from 'react-native';

var Main = require("./XMGMain");



var LaunchImage = React.createClass({
	render() {
	    return (
	      <Image source={{uri : 'launchimage'}} style={styles.launchImageStyle} />
	    );
	  },
	// 复杂操作
	componentDidMount(){
		setTimeout(()=>{
			this.props.navigator.replace({
				component : Main //具体路由模版
			})
		},2000)
	}
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  launchImageStyle : {
  	flex : 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = LaunchImage;