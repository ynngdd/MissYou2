import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Header, Container, Content, Title, Footer, Button, Left, Right, Body} from 'native-base' 
import image1 from '../assets/nadpis.png'
import image2 from '../assets/surce.png'
import styles from './style.js'
import Icon from 'react-native-vector-icons/FontAwesome';


export default class BodyContainer extends Component {

  render() { 
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round(dimensions.width * 626 / 782*96/100);
    const imageWidth = dimensions.width*96/100;

    
    return (
        <View style={{backgroundColor: '#FEE8E9'}}>
          <Image style={{
              height: imageHeight,
              width: imageWidth,
              marginTop: 20,
              padding: 4,
              alignSelf: 'center',
            }}
              source={image1}/>

         <TouchableOpacity onPress={this.onPressHeart} style={{margin:35,width:'56%',alignSelf: 'center',height:'64%',paddingBottom:30}}>
            {/* <Text style={{fontSize: 30,color:'#9B242D',textAlign: 'center',}}>
            
            </Text> */}
            <Icon name="heart" size={225} color="#9B242D" style={{alignSelf: 'center',}}/>
         </TouchableOpacity>

        </View>
     );
    }
}

