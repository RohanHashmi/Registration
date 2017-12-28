import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  Image,
  StatusBar,
  DrawerLayoutAndroid
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class Drawer extends Component{
  render() {
       var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </View>
        );
    return (
      <View>
         <DrawerLayoutAndroid
            drawerWidth={300}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <View style={{flex: 1, alignItems: 'center'}}>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>Hello</Text>
                <Text style={{margin: 10, fontSize: 15, textAlign: 'right'}}>World!</Text>
            </View>
        </DrawerLayoutAndroid>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
