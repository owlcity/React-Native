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
  TouchableOpacity
} from 'react-native';

var Dimensions = require("Dimensions");
var {width,height} = Dimensions.get('window');
// 导入json
var MiddleData = require("./MiddleData.json");

var MineMiddleView = React.createClass({
	render() {
	    return (
	    	<View style={styles.container}>
		      {this.MiddleContent()}
	    	</View>
	    )
	},
	MiddleContent(){
		var itemArr = [];
		for(var i=0;i<MiddleData.length;i++){
			itemArr.push(
				<InnerView
					key = {i}
					iconName = {MiddleData[i].iconName}
					title = {MiddleData[i].title}
				>
				</InnerView>
			)
		}
		return itemArr;
	}
})

var InnerView = React.createClass({
	getDefaultProps(){
		return{
			iconName : "",
			title : ""
		}
	},
	render(){
		return(
			<TouchableOpacity onPress={()=>{alert("MiddleCell")}}>
				<View style={styles.MiddleCellStyle}>
					<Image source={{uri:this.props.iconName}} style={styles.imgStyle} />
					<Text style={styles.fontStyle}>
						{this.props.title}
					</Text>
				</View>
			</TouchableOpacity>
		)
	}
})

const styles = StyleSheet.create({
  container: {
  	flexDirection : "row",
    alignItems: 'center',
    backgroundColor : "white"
  },
  MiddleCellStyle : {
  	width : width / 4,
  	justifyContent : "center",
  	alignItems : "center",
  	paddingTop : 10,
  	paddingBottom : 10,
  },	
  imgStyle : {
  	width : 30,
  	height : 24
  },
  fontStyle : {
  	paddingTop : 7,
  	fontSize : 13,
  }
});

module.exports = MineMiddleView;