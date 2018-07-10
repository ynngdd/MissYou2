import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body, Icon, FooterTab} from 'native-base'  

export default class FooterContainer extends Component {
    render() {
        return (
            <Footer>
                <View
                style={{backgroundColor: '#FCCCD0'}}>
                </View>
            </Footer>
        )
      }
    }