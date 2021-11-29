import React from 'react';
import AppNav from './AppNavigator';
import OneSignal from 'react-native-onesignal'; // Import package from node modules

// import GlobalFont from 'react-native-global-font'


export default class App extends React.Component {
 
    constructor(properties) {
      super(properties);
      OneSignal.init("51f67129-e898-4bd2-b229-c9780ea1525a");

      OneSignal.addEventListener('received', this.onReceived);
      OneSignal.addEventListener('opened', this.onOpened);
      OneSignal.addEventListener('ids', this.onIds);
    }

    componentDidMount() {
      let fontName = 'YourFontName'
      // GlobalFont.applyGlobal(fontName)
    }

    componentWillUnmount() {
      OneSignal.removeEventListener('received', this.onReceived);
      OneSignal.removeEventListener('opened', this.onOpened);
      OneSignal.removeEventListener('ids', this.onIds);
    }

    onReceived(notification) {
      console.log("Notification received: ", notification);
    }

    onOpened(openResult) {
      console.log('Message: ', openResult.notification.payload.body);
      console.log('Data: ', openResult.notification.payload.additionalData);
      console.log('isActive: ', openResult.notification.isAppInFocus);
      console.log('openResult: ', openResult);

    }

    onIds(device) {
      console.log('Device info: ', device);
    }

 
  render() {

    return (
      <AppNav/>
    );
  }
}
