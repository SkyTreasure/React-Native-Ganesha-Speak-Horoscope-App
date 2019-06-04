/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import SplashScreen from "react-native-splash-screen";
import RootStackNavigator from "./navigation/RootNavigator";
import RNFirebase from "react-native-firebase";
import { Provider } from "mobx-react";
import stores from "./store";
import {
  sendNotification,
  handleNotification
} from "./utils/notificationHelpers";
import { fcmNotifications, callnotify } from "./utils/MyInit";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      showConfirm: false
    };

    fcmNotifications();
  }

  componentDidMount() {
    SplashScreen.hide();
    this.listeners = [
      RNFirebase.messaging().onMessage(sendNotification),
      RNFirebase.notifications().onNotificationOpened(handleNotification)
    ];

    while (this.listeners.length) {
      this.listeners.pop();
    }
    callnotify();
  }

  componentWillUnmount() {
    while (this.listeners.length) {
      this.listeners.pop();
    }
  }

  renderConfirmDialog = () => {
    return (
      <ConfirmDialog
        title="Unable to connect to server"
        message="Please try again later"
        visible={this.state.showConfirm}
        onTouchOutside={() => this.setState({ showConfirm: false })}
        positiveButton={{
          title: "OK",
          onPress: () => this.setState({ showConfirm: false })
        }}
      />
    );
  };

  // render() {
  //   if (this.state.ConfirmDialog) {
  //     return renderConfirmDialog();
  //   } else {
  //     <Provider {...stores}>
  //       <RootStackNavigator />
  //     </Provider>;
  //   }
  // }

  render() {
    return (
      <Provider {...stores}>
        <RootStackNavigator />
      </Provider>
    );
  }
}
