// @flow
import RNfirebase from "react-native-firebase";
import { Linking, Platform, AsyncStorage } from "react-native";
// Optional flow type
import type { RemoteMessage, NotificationOpen } from "react-native-firebase";
import NavigationService from "./NavigationService";
import MyEventLogger from "./MyEventLogger";

export async function sendNotification(message: RemoteMessage) {
  try {
    if (message.data) {
      console.log(
        "------------NOTIFICATION HELPER FCMAPP1 HELPER--------",
        message.data
      );
      const notification = new RNfirebase.notifications.Notification();

      notification
        .setTitle(message.data.title)
        .setBody(message.data.body)
        .setNotificationId(message.data.type)
        .setData(message.data)
        .android.setBigText(message.data.body, "Message", "Body Message")
        .android.setChannelId("ganeshahoroscope")
        .android.setClickAction("action")
        .android.setPriority(RNfirebase.notifications.Android.Priority.Max);

      //  .android.setBigPicture(message.data.image,message.data.image,"Big icon content","Big icon")

      await RNfirebase.notifications().displayNotification(notification);
    }
    return Promise.resolve(message.data); // for HeadlessJS
  } catch (err) {
    //console.log(err);
    var error = {
      err: err,
      msg: "Error : notificationhelper2: sendnotificaiton"
    };
    MyEventLogger.logEventAndDesc("ERROR", error);
    return Promise.reject(err); // for HeadlessJS
  }
}

// shared by onNotificationOpened & getInitialNotification
export async function handleNotification(
  notificationOpen: NotificationOpen,
  initial?: boolean
) {
  console.log(
    "Notification Type>>>>> INSIDE",
    notificationOpen.notification.data.type
  );

  if (notificationOpen.notification) {
    if (notificationOpen.notification.data) {
      if (notificationOpen.notification.data.type === "url") {
        Linking.canOpenURL(notificationOpen.notification.data.url)
          .then(supported => {
            if (!supported) {
              // console.log("Can't handle url: ");
            } else {
              return Linking.openURL(notificationOpen.notification.data.url);
            }
            return "";
          })
          .catch(err => {
            var error = {
              err: err,
              msg: "Error : notificationhelper: openurl"
            };
            MyEventLogger.logEventAndDesc("ERROR", error);
            //console.error("An error occurred", err)
          });
      } else {
        NavigationService.navigate("Home");
      }
    }
  }
}
