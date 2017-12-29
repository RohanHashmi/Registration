import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  Image,
  StatusBar
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Header extends Component{
  render() {
    return (
      <View>
         <View style={styles.header}>
           <StatusBar hidden={true}/>
           <View>
             <Image style={styles.img1} source={require('../../Images/search1.png')} /> 
           </View>
            <View>
                <Text style={styles.text}>Categories</Text>
            </View>
            <View>
             <Image style={styles.img2} source={require('../../Images/arrow1.png')} /> 
            </View> 
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 30,
    width: 360,
    backgroundColor: 'white',
    padding: 30
    },
  text: {
    textAlign: 'center',
    paddingBottom: 10,
    fontSize: 20,
    marginTop: -8
  },
  img1: {
    marginLeft: 290,
    marginTop: -10
  },
  img2:{
    marginLeft: -20,
    marginTop: -10
  }
});
