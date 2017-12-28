import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Image
} from 'react-native';
import Carousel from 'react-native-carousel-view';
import Header from './header.js';
import Thumbnails from './Thumbnails.js'

export default class Slider extends Component {
  render() {
    return (
        // <StatusBar hidden={true}/>
          <View>
            <Header />
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <View style={styles.container}>
              <Carousel
                width={375}
                height={200}
                delay={2000}
                indicatorAtBottom={true}
                indicatorSize={20}
                indicatorText="*"
                indicatorColor="red"
                >
                <View style={styles.contentContainer}>
                  <Image source={require('../../Images/caro1.jpg')} />
                </View>
                <View style={styles.contentContainer}>
                  <Image source={require('../../Images/caro2.jpg')} />
                </View>
                <View style={styles.contentContainer}>
                  <Image source={require('../../Images/caro3.jpg')} />
                </View>
              </Carousel>
            </View>
          </View>
          <View style={styles.thumb}>
            <Thumbnails />
          </View>
        </View>
  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentContainer: {
    borderWidth: 2,
    borderColor: '#CCC',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumb: {
    marginTop: 100,
    marginLeft: 10
  }
});
