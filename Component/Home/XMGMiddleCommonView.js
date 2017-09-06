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

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

// 引入外部的组件类
var HomeDetail = require('./XMGHomeDetail');


var MiddleCommonView = React.createClass({
	getDefaultProps(){
		return{
			title : "",
			subTitle : "",
			rightIcon : "",
			titleColor : "",
			tplurl : "",//详细页跳转step2
			
			popTopDetail : null ////详细页跳转step4
		}
	},
	render() {
	    return (
	    	//详细页跳转step3
		    <TouchableOpacity 
		    	onPress={()=>{
		    		this.clickItem(this.props.tplurl)
		    	}}
		    >
		      <View style={styles.container}>
		          {/*左*/}
		          <View>
		              <Text style={[{color:this.props.titleColor},styles.titleStyle]}>
		              	{this.props.title}
		              </Text>
		              <Text style={styles.subTitleView}>
		              	{this.props.subTitle}
		              </Text>
		          </View>
		          {/*右*/}
		          <Image style={styles.imgStyle} source={{uri:this.props.rightIcon}} />
		      </View>
		    </TouchableOpacity>
	    );
	  },
	// //详细页跳转step5
	clickItem(url){
        // 判断处理
       if (this.props.tplurl == null) return;
       // 执行回调函数
       this.props.popTopDetail(url);
    }
})

const styles = StyleSheet.create({
  container: {
  	backgroundColor : "#FFF",
  	width : width * 0.5 - 1,
  	height : 58,
  	marginBottom : 1,
  	marginRight : 1,
  	flexDirection : "row",
  	alignItems : "center",
  	justifyContent : "space-around"
  },
  titleStyle : {
  	fontSize : 14
  },
  subTitleView : {
  	color : "#ccc",
  	marginTop : 8,
  	fontSize : 12
  },
  imgStyle : {
  	width : 60,
  	height : 42,
  	resizeMode : "contain"
  }
});

module.exports = MiddleCommonView;