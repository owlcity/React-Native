```javascript
/*
* @Author: owlcity
* @Date:   2017-08-29 14:14:56
* @Last Modified by:   owlcity
* @Last Modified time: 2017-08-29 17:42:47
*/
```
### 1:创建项目
	>react-native init AnyProject
### 2:设置项目图标，名称启动图
	[设置项目启动图](http://www.cnblogs.com/allenxieyusheng/p/5802179.html)
### 3:创建项目组件
	Component
		> Home
			>> Home.js
		> About
		> Main 主框架
		> More	
### 4:引入项目组件
	require("./Component/Home.js")
### 5:开始项目分析项目需要哪些外部类库
	> 由于TabBarIOS不兼容android所以引用外部类库 <br>
	> tabbar <br>
		>> 切换至根目录安装tabbar <br>
		>> npm i react-native-tab-navigator --save <br>
	> 在项目中引入 <br>
		import TabNavigator from 'react-native-tab-navigator';
### 6:注意事项
	#### 一:项目在android中运行可能会报错
	'Error:Execution failed for task' <br>'':app:mergeDebugResources'<br>
	解决方法：<br>
	找到app->build.gradle文件并打开，在buildToolsVersion属性下添加如下代码<br>
		'aaptOptions.cruncherEnabled = false'
		'aaptOptions.useNewCruncher = false'
	[android报错参考](http://blog.csdn.net/u013443865/article/details/51232586)

	#### 二:由于android和iOS分辨率不同引入icon大小也要分别处理
		> 在组件中引入Platform <br>
		> Platform.OS === 'ios' ? 30 : 25 <br>

	#### 三:新升级到0.46版本以后 Navigator 不能使用报错。
		>> 1:切换到根目录 <br>
		>> 2:npm install react-native-deprecated-custom-components --save <br>
		>> 3:import {Navigator} from ‘react-native-deprecated-custom-components‘; <br>
		>> 4: <br>
		```javascript
		<Navigator.Navigator
              initialRoute={{ name: defaultName, component: defaultComponent }}
              configureScene={(route) => {
                return Navigator.Navigator.SceneConfigs.VerticalDownSwipeJump;
              }}
              renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
        ```
		[Navigator报错参考：](http://www.mamicode.com/info-detail-1912867.html)





	
