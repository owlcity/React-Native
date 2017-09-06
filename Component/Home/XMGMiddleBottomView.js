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
  View
} from 'react-native';

// 引入组件
var CommonView = require("./XMGMiddleCommonView");
// 引入数据
var BottomMiddleData = require("../../LocalData/XMG_Home_D4.json");


var MiddleBottomView = React.createClass({
	//详细页跳转step8
	getDefaultProps(){
      return{
          // 回调函数	
          popTopHomeView: null
      }  
    },
	render() {
	    return (
	      <View style={styles.container}>
				{this.renderMiddleBottom()}       
	      </View>
	    );
	  },
	renderMiddleBottom(){
		var itemArr = [];
		var dataSource = BottomMiddleData.data;
		for(var i=0;i<dataSource.length;i++){
			var data = dataSource[i];
			itemArr.push(
				<CommonView
					title={data.title}
					subTitle={data.deputytitle}
					rightIcon={this.dealWithUrl(data.imageurl)}
					titleColor={data.typeface_color}
					tplurl={data.tplurl} ////详细页跳转step1
					
					popTopDetail={(url)=>{
						this.popTopHome(url)
					}} //详细页跳转step6
					key={i} />
			)
		}
		return itemArr;
	},
	// 处理图片
	dealWithUrl(url){
		if(url.search('w.h') == -1){
			return url;
		}else{
			return url.replace('w.h','90.90')
		}
	},
	// //详细页跳转step7
    popTopHome(url){
       // 判断处理
       if (this.props.popTopHomeView == null) return;
       // 执行回调函数
       this.props.popTopHomeView(url);
    },
})

const styles = StyleSheet.create({
  container: {
    marginTop : 10,
    flexDirection : "row",
    flexWrap : "wrap"
  },
});

module.exports = MiddleBottomView;