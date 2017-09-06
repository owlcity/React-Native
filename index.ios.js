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
var Main = require("./Component/Main/XMGMain");


export default class Shop extends Component {
  render() {
    return (
      <Main>
      </Main>
    );
  }
}


AppRegistry.registerComponent('Shop', () => Shop);
