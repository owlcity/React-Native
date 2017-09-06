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
  Image,
  View,
  Platform, //判断当前运行的系统
} from 'react-native';

// 导入外部组件类
import TabNavigator from 'react-native-tab-navigator';
// 0.46版本以后 Navigator 不能使用报错 导入Navigator
import {Navigator} from 'react-native-deprecated-custom-components';
// 导入组件
var Home = require("../Home/XMGHome");
var Mine = require("../Mine/XMGMine");
var Shop = require("../Shop/XMGShop");
var More = require("../More/XMGMore");

var Main = React.createClass({
	// 初始化状态，变量可以改变充当状态机
	getInitialState(){
		return {
			selectedTab : 'home'
		}
	},
	render() {
	    return (
	      <TabNavigator>
	      	{/*首页*/}
	      	{this.renderTabBarItem("首页","icon_tabbar_homepage","icon_tabbar_homepage_selected","home","首页",Home)}
	      	{/*商家*/}
	      	{this.renderTabBarItem("商家","icon_tabbar_merchant_normal","icon_tabbar_merchant_selected","shop","商家",Shop)}
	      	{/*我的*/}
	      	{this.renderTabBarItem("我的","icon_tabbar_mine","icon_tabbar_mine_selected","mine","我的",Mine)}
	      	{/*更多*/}
	      	{this.renderTabBarItem("更多","icon_tabbar_misc","icon_tabbar_misc_selected","more","更多",More,5)}
	      </TabNavigator>
	    );
	  },
	renderTabBarItem(title,iconName,selectedIconName,selectedName,componentName,component,badgeText){
		return(
			<TabNavigator.Item
	      		title={title}
	      		renderIcon={()=><Image source={{uri:iconName}} style={styles.iconStyle} />}
	      		renderSelectedIcon={()=><Image source={{uri:selectedIconName}} style={styles.iconStyle} />}
	      		selectedTitleStyle={styles.selectedTitleStyle}
	      		selected={this.state.selectedTab === selectedName}
	      		badgeText={badgeText}
	      		onPress={()=>{
	      			this.setState({
	      				selectedTab : selectedName
	      			})
	      		}}
	      	>
	      		<Navigator
				    initialRoute={{ name: componentName, component: component }}
				    configureScene={(route) => {
				        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
				    }}
				    renderScene={(route, navigator) => {
				        let Component = route.component;
				        return <Component {...route.props} navigator={navigator} />
				    }}
				>
				</Navigator>
	      	</TabNavigator.Item>
		)
	}

})

const styles = StyleSheet.create({
  iconStyle : {
  	width : Platform.OS === "ios" ? 30 : 25,
  	height : Platform.OS === "ios" ? 30 : 25
  },
  selectedTitleStyle : {
  	color : "orange"
  }
});

module.exports = Main;