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
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');
// 导入外部组件
var HomeDetail = require('./XMGHomeDetail');

var TopView = require("./XMGTopView");
var HomeMiddleView = require("./XMGHomeMiddleView");
var MiddleBottomView = require("./XMGMiddleBottomView");

var Home = React.createClass({
	render() {
	    return (
	      <View style={styles.container}>
	      	{/*首页导航条*/}
	      	{this.renderNavBar()}
		    {/*首页内容*/}
		   	<ScrollView>
		   		{/*头部分类*/}
		   		<TopView />
			   	{/*中间层*/}
			   	<HomeMiddleView />

			   {/**中下层 详细页跳转step9**/}
			   <MiddleBottomView 
			   		popTopHomeView={(url)=>{
			   			this.pushToDetail(url)
			   		}}
			    />
		   	</ScrollView>
	      </View>
	    );
	},
	// <TouchableOpacity onPress={()=>{this.pushToDetail()}}>
 //        <Text style={styles.welcome}>
 //        	首页xxxxx
 //        </Text>
 //    </TouchableOpacity>
	// 导航条
	renderNavBar(){
		return(
			<View style={styles.navBarStyle}>
				<TouchableOpacity>
					<Text style={styles.leftFontStyle}>左边</Text>
				</TouchableOpacity>
				<TextInput
					placeholder="输入商家／品类／商圈"
					style={styles.topInputStyle}
				>
				</TextInput>

				<View style={styles.rightNavStyle}>
					<Image source={{uri:'icon_homepage_message'}} style={styles.navRightImgStyle} />
					<Image source={{uri:'icon_homepage_scan'}} style={styles.navRightImgStyle} />
				</View>
			</View>
		)
	},
	pushToDetail(url){
		this.props.navigator.push({
			component : HomeDetail,
			passProps: {
				'url' : this.dealWithUrl(url)
			}
		})
	},
	dealWithUrl(url){
		return url.replace('imeituan://www.meituan.com/web?url=','')
	}
})

const styles = StyleSheet.create({
	container : {
		flex : 1,
		backgroundColor : "#F5F5F5",
	},
	navBarStyle : {
		paddingTop:15,
		height : 64,
		backgroundColor : "rgba(255,96,0,1)",
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-around"
	},
	topInputStyle : {
		width : width * 0.7,
		height : 30,
		paddingLeft : 10,
		backgroundColor : "#FFF",
		borderRadius : 100,
	},
	leftFontStyle : {
		color : "#FFF"
	},
	rightNavStyle : {
		flexDirection : "row",
		justifyContent : "space-between"
	},
	navRightImgStyle : {
		width : 26,
		height : 26
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	}
});

module.exports = Home;