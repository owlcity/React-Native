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

// 1引入项目组件
var LaunchImage = require("./Component/Main/XMGLaunchImage");
// 0.46版本以后 Navigator 不能使用报错 导入Navigator
import {Navigator} from 'react-native-deprecated-custom-components';

export default class Shop extends Component {
  render() {
    return (
      <Navigator
	    initialRoute={{ name: "启动页", component: LaunchImage }}
	    configureScene={(route) => {
	        return Navigator.SceneConfigs.HorizontalSwipeJumpFromRight;
	    }}
	    renderScene={(route, navigator) => {
	        let Component = route.component;
	        return <Component {...route.props} navigator={navigator} />
	    }}
	>
	</Navigator>
    );
  }
}


AppRegistry.registerComponent('Shop', () => Shop);
