import firebase from "react-native-firebase";

export default class MyEventLogger {
  static async logEvent(name) {
    if (__DEV__) {
      return;
    }

    firebase.analytics().logEvent(name);
  }

  static async logEventAndDesc(name, desc) {
    if (__DEV__) {
      return;
    }
    firebase.analytics().logEvent(name, desc);
  }

  static setUserId(userid) {
    firebase.analytics().setUserId(userid);
  }

  static setCurrentScreen(screenName) {
    firebase.analytics().setCurrentScreen(screenName);
  }
}
