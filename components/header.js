import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon, H1,StatusBar, Navigator} from 'native-base'

export default class MainHeader extends Component{
   render(){ 
    return(

          <Header
          style={{backgroundColor: '#9B242D'}}>
            <Left>
              <Button transparent
              style={{backgroundColor: '#9B242D'}}
              onPress={this.props.onDrawer}>
                <Icon name= "menu"/>
              </Button>
            </Left>
            <Body>
              <Title
              style={{color:'#FCCCD0',alignSelf:'center',fontSize:25,textAlign:'center',marginRight: '50%'}}>MissYou</Title>
            </Body>
          </Header>
    )
    }
}