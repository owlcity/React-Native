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
  ListView,
  Image,
  Platform
} from 'react-native';

var Dimensions = require('Dimensions');
var {width,height} = Dimensions.get('window');

var cols = 5;
var cellWidth = Platform.OS == "ios" ? 70 : 50;
var vmargin = (width - cellWidth*cols) / (cols+1)


var TopListView = React.createClass({
	getDefaultProps(){
		return {
			dataArr : []
		}
	},
	getInitialState(){
		var ds = new ListView.DataSource({
			rowHasChanged : (row1,row2) => row1 !== row2
		})
		return{
			dataSource : ds.cloneWithRows(this.props.dataArr)
		}
	},
	render() {
	    return(
	    	<ListView 
	    		dataSource={this.state.dataSource}
	    		renderRow={this.renderRow}
	    		contentContainerStyle={styles.contentViewStyle}
	    		scrollEnabled={false}
	    	>
	    	</ListView>
	    );
	  },
	renderRow(rowData){
		return(
			<View style={styles.cellStyle}>
				<Image source={{uri:rowData.image}} style={styles.imgStyle} />
				<Text style={styles.textStyle}>
					{rowData.title}
				</Text>
			</View>
		)
	}
})

const styles = StyleSheet.create({
  contentViewStyle : {
  	flexDirection : "row",
  	flexWrap : "wrap",
  	width : width
  },
  cellStyle : {
  	width : cellWidth,
  	height : 70,
  	justifyContent : "center",
  	alignItems : "center",
  	marginTop : 10,
  	marginLeft : vmargin
  },
  imgStyle: {
    width : 52,
    height : 52
  },
  textStyle : {
  	fontSize : 13
  }
});

module.exports = TopListView;