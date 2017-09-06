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

var MyCell = React.createClass({
	getDefaultProps(){
		return{
			leftIconName : "",
			leftTitle : "",
			rightIconName : "",
			rightTitle : ""
		}
	},
	render() {
	    return (
	      <TouchableOpacity onPress={()=>alert(1)}>
		      <View style={styles.container}>
		      	{/*左*/}
		      	<View style={styles.rowCenter}>
		      		<Image source={{uri : this.props.leftIconName}} style={styles.leftImgStyle} />
		      		<Text style={styles.leftTitleStyle}>
		      			{this.props.leftTitle}
		      		</Text>

		      	</View>
		      	{/*右*/}
		      	<View style={styles.rightViewStyle}>
		      		{this.rightSubView()}
		      	</View>
		      </View>
	      </TouchableOpacity>

	    );
	  },
	rightSubView(){
		return(
			<View style={styles.rowCenter}>
				{this.renderRightContent()}
				{/*箭头*/}
				<Image source={{uri : "icon_cell_rightArrow"}} style={styles.rightArrowStyle} />
			</View>
		)
	},
	renderRightContent(){
		if(this.props.rightIconName == 0){
			return(
				<Text style={{color:"gray"}}>{this.props.rightTitle}</Text>
			)
		}else{
			return(
				<Image source={{uri:this.props.rightIconName}} style={styles.rightIconName} />
			)
		}
	}
})

const styles = StyleSheet.create({
  container: {
  	flexDirection : "row",
    alignItems: 'center',
    justifyContent : "space-between",
    height : 40,
    paddingLeft : 8,
    paddingRight : 8,
    backgroundColor: "#FFF",
    borderColor : "#CCC",
    borderBottomWidth : 0.5
  },
  leftViewStyle : {

  },
  leftImgStyle : {
  	width : 24,
  	height : 24,
  	borderRadius : 12,
  	marginRight : 6,
  },
  leftTitleStyle : {
  	fontSize : 16,
  },
  rightViewStyle : {

  },
  rowCenter : {
  	flexDirection : "row",
  	alignItems : "center"
  },
  rightArrowStyle : {
		width : 8,
		height : 13,
		marginLeft : 10,
  },
  rightIconName : {
  		width : 24,
		height : 13,
  }
});

module.exports = MyCell;