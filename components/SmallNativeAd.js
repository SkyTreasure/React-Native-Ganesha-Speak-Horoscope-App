import React, { Component, PureComponent } from "react";
import { Text, View, Dimensions } from "react-native";
import { Card } from "native-base";
import {
  withNativeAd,
  AdIconView,
  TriggerableView,
  MediaView,
  AdSettings,
  AdChoicesView
} from "react-native-fbads";

// import { withNativeAd } from "react-native-fbads";

import { colors } from "../styles/index.style";
const { width } = Dimensions.get("window");

class SmallNativeAd extends Component<Props> {
  render() {
    return (
      <View
        style={{
          backgroundColor: this.props.color,
          flexDirection: "column",
          borderRadius: 10,
          marginStart: 5,
          marginEnd: 10,
          marginTop: 10
        }}
      >
        <AdChoicesView style={{ position: "absolute", right: 0, top: 0 }} />

        <View style={{ flexDirection: "row" }}>
          {/* <AdIconView style={{ marginStart: 10, width: 40, height: 40 }} /> */}
          <MediaView style={{ marginStart: 10, width: 80, height: 80 }} />
          <View
            style={{ flexDirection: "column", paddingHorizontal: 10, flex: 1 }}
          >
            <TriggerableView style={{ fontSize: 14, color: colors.title }}>
              {this.props.nativeAd.headline}
            </TriggerableView>
            <Text style={{ color: "gray", fontSize: 12 }}>
              {this.props.nativeAd.sponsoredTranslation}
            </Text>
            <TriggerableView style={{ fontSize: 10, color: colors.subtitle }}>
              {this.props.nativeAd.linkDescription}
            </TriggerableView>
            <View
              style={{ alignItems: "flex-end", marginStart: 10, marginEnd: 0 }}
            >
              <TriggerableView
                style={{
                  fontSize: 15,
                  color: "white",
                  marginTop: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 30,
                  height: 30,
                  borderTopWidth: 0,
                  backgroundColor: colors.ourRed,
                  elevation: 3,
                  marginBottom: 10,
                  borderColor: "white",
                  borderRadius: 6
                }}
              >
                {this.props.nativeAd.callToActionText}
              </TriggerableView>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default withNativeAd(SmallNativeAd);
