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
  ScrollView,
  ListView,
  Image
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

// 导入数据
var TopMenu = require("../../LocalData/TopMenu.json");
var TopListView = require("./XMGTopListView");

var TopView = React.createClass({
	getInitialState(){
		return {
			currenPage : 0
		}
	},
	render() {
	    return (
	      <View style={styles.container}>
	        {/*内容部分*/}
	        <View>
	        <ScrollView
                horizontal={true}
                pagingEnabled={true}
                showsHorizontalScrollIndicator={true}
                onScroll = {this.onScrollAnimationEnd}
            >
                {this.renderScrollItem()}
            </ScrollView>
            </View>
	        {/*页码*/}
	        <View style={styles.indicatorStyle}>
	        	{this.ScrollIndicate()}
	        </View>
	      </View>
	    );
	  },
	// 当一帧滚动结束
	onScrollAnimationEnd(e){
		// alert("start");
		// 当前页码
		var currenNum = Math.floor(e.nativeEvent.contentOffset.x / width);
		// 更新状态
		this.setState({
			currenPage : currenNum
		})
	},
	renderScrollItem(){
		var itemArr = [];

		// var colorArr = ["red","green"];
		// for(var i=0;i<colorArr.length;i++){
		// 	itemArr.push(
		// 		<View key={i} style={{backgroundColor : colorArr[i],width : 375,height: 120}}>
		// 			<Text>{i}</Text>
		// 		</View>
		// 	)
		// }
		var dataArr = TopMenu.data;
		for(var i=0;i<dataArr.length;i++){
			itemArr.push(
				<TopListView key={i} dataArr={dataArr[i]} />
			)
		}

		return itemArr;
	},
	ScrollIndicate(){
		var indicator = [];
		var style = "";

		for(var i=0;i<2;i++){
			if(i == this.state.currenPage){
				style = {
					color : "orange"
				}
			}else{
				style = {
					color : "gray"
				}
			}

			indicator.push(
				<Text key={i} style={[styles.dotStyle,style]}>
					&bull;
				</Text>
			)
		}
		return indicator;
	}
})

const styles = StyleSheet.create({
  container: {
  	backgroundColor : "white"
  },
  scrollStyle : {
  	width : 375,
  	height : 120
  },
  indicatorStyle : {
  	flexDirection : "row",
  	alignItems : "center",
  	justifyContent : "center"
  },
  dotStyle : {
  	fontSize : 25
  }
});

module.exports = TopView;