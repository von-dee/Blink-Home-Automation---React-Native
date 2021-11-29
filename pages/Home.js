import React from 'react';

import {  AppRegistry, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';

const axios = require('axios')
import apicalls from '../provider/api_calls.js';


 
  

export default class Home extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isLightOn: true,
    }
   
  }

  componentWillUnmount() {
   
  }


  _togglelight() {
    
    if(!this.state.isLightOn){
     
      try {
        return axios.get('http://68467aa1.ngrok.io/led/on')
      } catch (error) {
        console.error(error)
      }
      
      this.state.isLightOn= true;
      
      console.log("Light is turned on", this.state.isLightOn);
    }else{
      
      try {
        return axios.get('http://68467aa1.ngrok.io/led/off')
      } catch (error) {
        console.error(error)
      }
      
      this.state.isLightOn= false;

      console.log("Light is turned off", this.state.isLightOn);
    }

   
  }
  
  _togglefan() {
    
    if(!this.state.isFanOn){
     
      try {
        return axios.get('http://68467aa1.ngrok.io/fan/on')
      } catch (error) {
        console.error(error)
      }
      this.setState({
        isFanOn: true,
      });
      console.log("Fan is turned on");
    }else{
      
      try {
        return axios.get('http://68467aa1.ngrok.io/fan/off')
      } catch (error) {
        console.error(error)
      }
      this.setState({
        isFanOn: false,
      });
      console.log("Fan is turned on");
    }


  
  }



  render() {

    return (
      <View style={styles.container}>

        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 1}}>            
            <Icon iconStyle={[styles.icon,styles.colour_dark]} name='short-text' type='material' />
          </View>
          <View style={{flex: 7}} >
          </View>
          <View style={{flex: 2}} >
            <Icon iconStyle={[styles.icon,styles.colour_orange]} name='bell' type='font-awesome' />
          </View>
          <View style={{flex: 2}} >
            <Text style={styles.camera_text}>Cameras</Text>
          </View>
        </View>

        <View style={{flex: 5, flexDirection: 'row'}}>
         <Image source={require('./../assets/home.png')} style={{flex:8, height: 250, width: 250}} resizeMode="contain"/>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.h1}>Home</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.h2}>Light & Camera are Off</Text>
        </View>

        <View style={{flex: 3, flexDirection: 'row'}}>
          <View style={{flex: 2,alignItems: 'center'}}>       
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() =>
            this.props.navigation.navigate('Stream')}>
              <Image source={require('./../assets/camera.png')} style={{flex:1, width: 90}} resizeMode="contain"/>
              <Text style={styles.h3}>Cameras</Text>   
            </TouchableOpacity>
          </View>

          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {this._togglelight()}}>
              <Image source={require('./../assets/lamp.png')} style={{flex:1, width: 90}} resizeMode="contain"/>
              <Text style={styles.h3}>Light</Text>
            </TouchableOpacity>  
          </View>

          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center'}} onPress={() => {this._togglefan()}}>
              <Image source={require('./../assets/fan.png')} style={{flex:1, width: 90}} resizeMode="contain"/>
              <Text style={styles.h3}>Fan</Text>
            </TouchableOpacity>  
          </View>
          <View style={{flex: 2,alignItems: 'center'}} >
            <TouchableOpacity style={{alignItems: 'center'}} onPress={this._opendialog}>
                <Icon iconStyle={styles.iconplus} name='add' type='material' />
            </TouchableOpacity>  
          
          </View>
        </View>


      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  camera_text: {
    fontSize: 12,
    marginTop: 18,
  },
  icon: {
    marginTop: 15,
    marginLeft: 20,
    width: 30,
    height: 30
  },
  colour_dark: {
    color: '#05225c',
  },
  colour_orange: {
    color: '#9b3a61',
  },
  colour_green: {
    color: '#635674',
  },
  iconplus: {
    marginTop: 14,
    marginLeft: 20,
    fontSize: 42,
    width: 70,
    height: 70,
    color: '#10561a',
  },
  h1: {
    flex:1,
    marginLeft: 40,
    fontSize: 45,
    // fontWeight: 'bold',
    color: '#05225c',
  },
  h2: {
    flex:1,
    marginLeft: 40,
    fontSize: 15,
    color: '#e2bfaf',
  },
  h3: {
    flex:1,
    fontSize: 12,
    color: '#635674',
  },
  icon_style: {
    marginBottom: 8,
  },
  button_style_me: {
    marginRight: 30,
    marginBottom: 20,
  },
  button_textstyle_me: {
    flex:1,
    fontSize: 15,
    textAlign: 'right',
    marginRight: 10,
    color: '#0e662d',
  },
});
