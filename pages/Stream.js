import React from "react";
import { View, Alert, StyleSheet, Image, TouchableOpacity } from "react-native";
import {WebView} from 'react-native';

import call from 'react-native-phone-call';

export default class Stream extends React.Component {
  _call = () => {
    
    //handler to make a call_
    const args = {
      number: '191',
      prompt: false,
    };
    call(args).catch(console.error);

  };

  _opendialog() {
    Alert.alert(
      'Action',
      'Call who?',
      [
        {text: 'Police', onPress: this._call },
        {text: 'Other', onPress: () => console.log('Call my wife')},
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel Pressed')
          }, 
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }

  // https://github.com/facebook/react-native

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1}}>
          <WebView
            source={{uri: 'http://192.168.43.44:5000/video_feed'}}
            style={{marginTop: 20}}
          />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={this.clickHandler}
            style={styles.TouchableOpacityStyle}
            onPress={this._opendialog}>
            <Image
              //We are making FAB using TouchableOpacity with an image
              //We are using online image here
              source={require('./../assets/call.png')}
              //You can use you project image Example below
              //source={require('./images/float-add-icon.png')}
              style={styles.FloatingButtonStyle}
            />
          </TouchableOpacity>
        </View>
      </View>


    );
  }
}

const styles = StyleSheet.create({

 
  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
 
  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});