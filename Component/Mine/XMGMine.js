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
  ScrollView
} from 'react-native';

// 导入组件
var MyCell = require("./XMGCommonCell");
var MineMiddleView  =require("./XMGMineMiddleView");
var MineHeaderView  =require("./XMGMineHeaderView");

var Mine = React.createClass({
	render() {
	    return (
        <ScrollView style={styles.container}
          contentInset={{top:-200}} //吸顶效果
          contentOffset={{y:200}}
        >
          <View style={styles.marginTop20}>
              <MyCell
                leftIconName="collect"
                leftTitle="我的订单"
                rightTitle="查看全部清单"
              >
            </MyCell>

            <MineHeaderView>
            </MineHeaderView>

            <MineMiddleView>
            </MineMiddleView>
          </View>

          <View style={{marginTop:20}}>
            <MyCell
              leftIconName="draft"
              leftTitle="钱包"
              rightTitle="账户余额110"
            >
            </MyCell>
            <MyCell
              leftIconName="like"
              leftTitle="抵用券"
              rightTitle="剩余10张"
            >
            </MyCell>
            <View style={styles.marginTop20}>
              <MyCell
                leftIconName="card"
                leftTitle="积分商城"
              >
              </MyCell>
              </View>
            <View style={styles.marginTop20}>
              <MyCell
                leftIconName="new_friend"
                leftTitle="今日推荐"
                rightIconName="me_new"
              >
            </MyCell>
            </View>
            <View style={styles.marginTop20}>
              <MyCell
                leftIconName="pay"
                leftTitle="我要合作"
                rightTitle="轻松开店 招财进宝"
              >
            </MyCell>
            </View>
          </View>
        </ScrollView>
	    );
	  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop : 200,
    backgroundColor: '#E8E8E8',
  },
  marginTop20: {
    marginTop: 20,
  }
});

module.exports = Mine;