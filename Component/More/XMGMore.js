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
  ScrollView,
  TouchableOpacity
} from 'react-native';

// 引入组件
var CommonCell = require("./XMGCommonCell");

var More = React.createClass({
	render() {
	    return (
	      <View style={styles.container}>
          {/*导航条*/}
          {this.renderNavBar()}

          <ScrollView>
              <View style={{paddingTop : 20}}>
                <View>
                    <CommonCell
                      title={"扫一扫"}
                    >
                    </CommonCell>
                </View>
                <View style={{marginTop:20}}>
                    <CommonCell
                      title={"省流量模式"}
                      isSwitch={true}
                    >
                    </CommonCell>
                </View>
                <View>
                    <CommonCell
                      title={"扫一扫"}
                    >
                    </CommonCell>
                    <CommonCell
                      title={"清空缓存"}
                      rightTitle={"119M"}
                    >
                    </CommonCell>

                </View>
              </View>
	        </ScrollView>
	      </View>
	    );
	  },
  renderNavBar(){
    return(
      <View style={styles.navOutViewStyle}>
          <Text style={styles.navFontStyle}>更多</Text>
          <TouchableOpacity onPress={()=>{alert(1)}} style={styles.rightIconStyle} >
            <Image source={{uri:'icon_mine_setting'}} style={styles.navImageStyle} />
          </TouchableOpacity>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8',
  },
  navOutViewStyle : {
    height : 64,
    backgroundColor : "rgba(255,96,0,1)",
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "center",
    paddingTop : 15
  },
  navFontStyle : {
    color : "#FFF",
    fontSize : 14
  },
  rightIconStyle : {
    position : "absolute",
    right : 10,
    top : 22
  },
  navImageStyle : {
    width : 26,
    height: 26,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = More;