import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Dimensions,
  Image
} from 'react-native';

const {width, height} = Dimensions.get('window')

export default class App extends Component{
  render() {
    return (
      <View>
         <View style={styles.header}>
            <View style={{backgroundColor: '#b22222',borderRadius:24, borderColor:"black",marginLeft:20, borderWidth:1,width: 30,height: 30 }}>
              <Image source={require("./Images/checkbox1.png")} style={{width:15, height:20,margin: 5}}/>
            </View>
        </View>
        
        <View style={styles.headerGap}>
          <Text style={styles.headerGapText}>Languages</Text>
        </View>
        <View>
          <Text style={styles.infoConfirm}>
            Please confirm your country code and enter your phone number.
          </Text>
          
          <View style={styles.countrySelectBox}>
            <View style={styles.country}>
              <View style={styles.countrylabel}>
                <Image source={require('./Images/location.png')} style={styles.countryLocationLabel}/> 
                <Text > Country </Text>
              </View>
                <Text style={styles.Gap}> | </Text>
                <Text style={styles.countryDrop}>Kenya</Text>
            </View>
            <View style={styles.country}>
              <View style={styles.countrylabel}>
                <Image source={require('./Images/smartphone.png')} style={styles.countryLocationLabel}/> 
                <Text > + 254 </Text>
              </View>
                <Text style={styles.Gap}> | </Text>
                <Text style={styles.countryDrop}>Kenya</Text>
            </View>
          </View>       
          
          <View style={styles.proceedButton} >
            <Button title='Proceed' color="#b22222"/>

            <Text style={[styles.VerySMS, styles.noticeSMS]}>Pointspesa will send you SMS message to verify your phone number.</Text>
            <Text style={styles.noticeSMS}>Carrier SMS charges may apply.</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height: 40,
    backgroundColor: 'white',
    padding:5
    },
  headerGap:{
    backgroundColor: 'white',
    height: 40,
    alignItems: 'center',
    marginTop:10
  },
  headerGapText:{
    left: width / 3,
    margin: 10    
  },
  infoConfirm:{
    alignItems: 'center',
    width: 320,
    margin: 17,
    marginTop: 30,
    marginBottom:0,
    textAlign:'center',
    fontWeight: "700"
  },

  proceedButton:{
    margin: 15,
  },
  noticeSMS:{
    fontSize: 12,
    textAlign:'center',
  },
  VerySMS:{
    alignItems: 'center',
    width: 300,
    marginLeft: 5,
    marginTop: 15,
    marginBottom: 5,
    textAlign:'center',
  },
  countrySelectBox:{
  
    borderTopWidth:2,
    borderTopColor:'rgb(241,240,244)',
        
    borderBottomWidth:2,
    borderBottomColor:'rgb(241,240,244)',
    
    borderRightWidth:2,
    borderRightColor:'rgb(241,240,244)',

    borderLeftWidth:4,
    borderLeftColor:'rgb(170,34,37)',
    width: width - 35,
    height: 120,
    marginTop:15,
    left: width / 20
  },
  country:{
    flexDirection:"row",
    margin: 30,
    marginBottom: 0,
    marginTop: 20,
    
  },
  countrylabel:{
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(203,203,203)',
    padding: 2,
    // paddingLeft: width / 30,
    paddingRight: width / 20
  },
  countryLocationLabel:{
    marginTop: 5,
    height: height * 0.02,
    width: 15
  },
  countryDrop:{
    borderBottomWidth: 3,
    borderBottomColor: 'rgb(203,203,203)',
    paddingRight: width/6,
    paddingLeft: width/6,
    
  },
  Gap:{
    padding: 2,
    fontSize: 15
  },
  countryCode:{
    flexDirection:"row",
    margin: 30,
    marginBottom: 0,
    marginTop: 12,
  },
});
