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
  Image
} from 'react-native';
var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

// 引入组件
var CommonView = require("./XMGMiddleCommonView");
// 引入数据
var TopMiddleData = require("../../LocalData/HomeTopMiddleLeft.json");

var HomeMiddleView = React.createClass({
	render() {
	    return (
	      <View style={styles.container}>
	        {/*左*/}
	        {this.renderLeftView()}
	        {/*右*/}
	        <View>
		        {this.renderRightView()}
	        </View>
	      </View>
	    );
	  },
	renderLeftView(){
		var data = TopMiddleData.dataLeft[0];
		return(
			<View style={styles.leftViewStyle}> 
				<Image source={{uri:data.img1}} style={styles.leftImageStyle} />
				<Image source={{uri:data.img2}} style={styles.leftImageStyle} />
				<Text style={{color:"gray"}}>{data.title}</Text>
				<View style={{flexDirection : "row"}}>
					<Text style={{color:"orange"}}>{data.price}</Text>
					<Text style={{backgroundColor:"yellow",fontSize:12}}>{data.sale}</Text>
				</View>
			</View>
		)
	},
	renderRightView(){
		var itemArr = [];
		var rightData = TopMiddleData.dataRight;
		for(var i=0;i<rightData.length;i++){
			var data = rightData[i];
			itemArr.push(
				<CommonView
					title={data.title}
					subTitle={data.subTitle}
					rightIcon={data.rightImage}
					titleColor={data.titleColor}
					key={i} />
			)
		}

		return itemArr;
	}
})

const styles = StyleSheet.create({
  container: {
  	flexDirection : "row",
  	marginTop : 15
  },
  leftViewStyle : {
  	width : width * 0.5,
  	height : 119,
  	backgroundColor : "#FFF",
  	marginRight : 1,
  	justifyContent : "center",
  	alignItems : "center"
  },
  leftImageStyle : {
  	width : 120,
  	height : 30,
  	resizeMode : "contain"

  }

});

module.exports = HomeMiddleView;