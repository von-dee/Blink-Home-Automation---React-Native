import React from "react";
import { View } from "react-native";

export default class Lights extends React.Component {
  


  render() {
    return (
      <View style={{flex: 1}}>
          <WebView
            source={{uri: 'http://68467aa1.ngrok.io/led/on'}}
            style={{marginTop: 20}}
          />
          
      </View>
    );
  }
}