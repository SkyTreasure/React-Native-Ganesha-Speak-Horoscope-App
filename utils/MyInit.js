import { Platform, AsyncStorage } from "react-native";
import RNFirebase from "react-native-firebase";
import type { NotificationOpen } from "react-native-firebase";

import {
  sendNotification,
  handleNotification
} from "../utils/notificationHelpers";

export async function fcmNotifications() {
  await RNFirebase.messaging().requestPermission();

  // let debbug = true;
  // if (debbug) {
  //   RNFirebase.messaging().subscribeToTopic("notification_test");
  // }
  if (Platform.OS === "ios") {
    RNFirebase.messaging().subscribeToTopic("ios_gh");
    RNFirebase.messaging().subscribeToTopic("ios_one_dot_zero");
    RNFirebase.messaging().subscribeToTopic("general");
  } else if (Platform.OS === "android") {
    RNFirebase.messaging().subscribeToTopic("android_gh");
    RNFirebase.messaging().subscribeToTopic("general");
    RNFirebase.messaging().subscribeToTopic("android_one_dot_zero");
    const channel = new RNFirebase.notifications.Android.Channel(
      "ganeshahoroscope",
      "Ganesha Horocope Channel",
      RNFirebase.notifications.Android.Importance.Max
    ).setDescription("Ganesha Horoscope Notification Channel");
    RNFirebase.notifications().android.createChannel(channel);
  }

  RNFirebase.messaging().onMessage(message => {
    sendNotification(message);
  });
  RNFirebase.messaging().onTokenRefresh(deviceToken => {});
  RNFirebase.notifications().onNotification(notification => {
    //console.log("onNotification FCMAPP: ", notification);
  });
  RNFirebase.notifications().onNotificationOpened(notification => {
    console.log("onNotificationOpened: FCMAPP ", notification);
    handleNotification(notification, true);
  });
  RNFirebase.notifications().onNotificationDisplayed(notification => {
    //console.log("onNotificationDisplayed: FCMAPP ", notification);
  });
}

export async function callnotify() {
  const notificationOpen: NotificationOpen = await RNFirebase.notifications().getInitialNotification();
  // console.log("INIT Noti FCMAPP--->>>> ", notificationOpen);
  if (notificationOpen) {
    console.log("Yay Worked :) FCMAPP--->>>> ", notificationOpen.data);
    handleNotification(notificationOpen, true); // 2nd parameter can be useful
  } else {
    console.log("Nope didn't work :( FCMAPP  ");
  }
}
