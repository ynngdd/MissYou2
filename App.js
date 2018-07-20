import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View,StatusBar, ControlPanel, Platform, ScrollView}  from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon}  from 'native-base'
import MainHeader from './components/header'
import BodyContainer from './components/body'
import FooterContainer from './components/footer'
import {DrawerNavigator,DrawerItems} from 'react-navigation'
import FirstScreen from './components/mainscreen'
import StatsScreen from './components/statsscreen'
import SettingsScreen from './components/settingsscreen'
import SideMenu from './components/sidescreen'

const DrawerExample = DrawerNavigator(
  {
    Main:{
      path: '/',
      screen: FirstScreen,
    },
    Statistics:{
      path: '/stats',
      screen: StatsScreen,
    },
    Settings:{
      path: '/settings',
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Main',
    drawerPosition: 'left',
    drawerBackgroundColor: "rgb(254,232,233)",    
    contentComponent: (props) =>
    <View style={{flex: 1}}>
    <Text style={{backgroundColor:'#9B242D',paddingBottom: 150}}></Text>
    <ScrollView>
    <DrawerItems {...props} />
    </ScrollView>
    </View>
  },
  // {
  //   drawerPosition:'left',
  //   drawerWidth:200,
  //   drawerBackgroundColor:'#333333',
  //   contentOptions:{
  //     activeTintColor:'#ffffff',
  //     inactiveTintColor:'#000000',
  //     activeBackgroundColor:'#ff5500',
  //     inactiveBackgroundColor:'#ffffff',
  //     itemsContainerStyle:{
  //      marginTop:20 
  //     },
  //     itemStyle:{
  //       marginTop:10
  //     },
  //     labelStyle:{
  //       fontSize:16
  //     },
  //     iconContainerStyle:{
  //       backgroundColor:"#000000"
  //     }
  //   }
  // }
  

)
export default DrawerExample;