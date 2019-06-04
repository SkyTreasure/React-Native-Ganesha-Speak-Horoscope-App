import { Text, CardItem, Card } from "native-base";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import React, { Component } from "react";
import { View, Linking } from "react-native";
import styles, { colors } from "../styles/index.style";
import Share from "react-native-share";
import { observer, inject } from "mobx-react";
@inject("userStore")
@observer
export default class HoroscopeCard extends Component {
  render() {
    let { iconName, title, summary, zodiac } = this.props;
    const shareText = {
      title: title,
      message:
        title +
        " for " +
        zodiac +
        ":" +
        "\n\n" +
        summary +
        "\n - Ganesha Speak. \n\nDownload Android/iOS app for daily Horoscope \n-https://play.google.com/store/apps/details?id=com.horoscope.ganeshaspeak \n\n https://itunes.apple.com/in/app/ganesha-speaks-daily-horoscope/id1456512444?mt=8",
      subject: "Share Link",
      social: "instagram" //  for email
    };
    return (
      <Card style={{ marginTop: 20, marginLeft: 16, marginRight: 16 }}>
        <CardItem
          style={{
            borderBottomColor: colors.subtitle,
            borderBottomWidth: 0.1
          }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <IconMCI name={iconName} color={colors.ourRed} size={24} />

            <Text
              style={{
                fontFamily: "GestaM",
                color: colors.ourRed,
                fontSize: 16,
                fontWeight: "normal",
                marginLeft: 10
              }}
            >
              {title}
            </Text>
            <IconMCI
              name={"share"}
              color={colors.ourRed}
              size={24}
              onPress={() => {
                Share.open(shareText).catch(err => {
                  if (err.error !== "User did not share") {
                    MyEventLogger.logEventAndDesc("ERROR", err);
                    // this.props.displayError();
                  }
                });
              }}
            />
          </View>
        </CardItem>
        <CardItem>
          <View>
            <Text
              style={{
                fontFamily: "GestaR",
                fontSize: 14,
                color: colors.title,
                lineHeight: 18
              }}
            >
              {summary && summary}
            </Text>
          </View>
        </CardItem>
      </Card>
    );
  }
}
