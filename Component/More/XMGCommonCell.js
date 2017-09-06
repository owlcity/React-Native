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
  TouchableOpacity,
  Switch
} from 'react-native';

var CommonCell = React.createClass({
	getDefaultProps(){
		return {
			title : "", //标题
			isSwitch : false, //是否打开开关
			rightTitle : ""
		}
	},
	getInitialState(){
		return {
			isOn : false
		}
	},
	render() {
	    return (
	    	<TouchableOpacity onPress={()=>{alert(this.props.title)}}>
		      <View style={styles.container}>
		        	{/*左*/}
		        	<Text>{this.props.title}</Text>
		        	{/*右*/}
		        	{this.renderRightView()}
		      </View>
	    	</TouchableOpacity>
	    );
	  },
	renderRightView(){
		if(this.props.isSwitch){
			return(
				<Switch
					value={this.state.isOn==true}
					onValueChange={()=>{
						this.setState({
							isOn : !this.state.isOn
						})
					}} 
				>
				</Switch>
			)
		}else{
			return(
				<View style={{flexDirection : "row"}} >
					{this.rightTitle()}
					<Image source={{uri : "icon_cell_rightArrow"}} style={styles.rightArrowStyle} />
				</View>
			)
		}
		
	},
	rightTitle(){
		if(this.props.rightTitle.length > 0){
			return(
				<Text style={{color:"gray",marginRight:7,alignItems:"center"}}>
					{this.props.rightTitle}
				</Text>
			)
		}
	}
})

const styles = StyleSheet.create({
	container : {
		height : 44,
		backgroundColor : "#FFF",
		borderBottomColor : "#DDD",
		borderBottomWidth : 0.5,
		flexDirection : "row",
		alignItems : "center",
		justifyContent : "space-between",
		paddingLeft : 8,
		paddingRight : 8
	},
	rightArrowStyle : {
		width : 8,
		height : 13,
		
	}
});

module.exports = CommonCell;