import React, { PureComponent } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { withNativeAd, AdSettings } from "react-native-fbads";
import { CardItem, Card } from "native-base";
import MyAdsManager from "../utils/MyAdsManager";
import SmallNativeAd from "../components/SmallNativeAd";
import { InterstitialAdManager, NativeAdsManager } from "react-native-fbads";
const adsManager = new NativeAdsManager(MyAdsManager.getNativeCardAdId(), 10);

import {
  AdIconView,
  MediaView,
  AdChoicesView,
  TriggerableView
} from "react-native-fbads";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row"
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 10,
    marginLeft: 10,
    marginTop: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: "#fff"
  },
  description: {
    fontSize: 10,
    paddingEnd: 10,
    opacity: 0.8,
    color: "#D3D3D3"
  },
  subtitle: {
    fontSize: 10,
    paddingEnd: 10,
    fontStyle: "italic",
    color: "#808080"
  }
});

class AdComponent extends React.Component {
  // render() {
  // return (
  //   <View>
  //     <AdChoicesView style={{ position: "absolute", left: 0, top: 0 }} />
  //     <AdIconView style={{ width: 50, height: 50 }} />
  //     <MediaView style={{ width: 160, height: 90 }} />
  //     <TriggerableView>
  //       <Text>{this.props.nativeAd.description}</Text>
  //     </TriggerableView>
  //   </View>
  //  );
  //}

  render() {
    console.log("ADs Data>", this.props.nativeAd);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <Card style={{ marginTop: 20, marginLeft: 16, marginRight: 16 }}>
          <SmallNativeAd adsManager={adsManager} color="white" />
          {/* <CardItem>
            <View style={{ flex: 7, flexDirection: "row" }}>
              <View style={{ flex: 1, alignSelf: "center" }}>
                {this.props.nativeAd.icon && (
                  <Image
                    style={styles.icon}
                    source={{ uri: this.props.nativeAd.icon }}
                  />
                )}
              </View>

              <View style={{ flex: 4, marginLeft: 5 }}>
                <Text style={styles.title}>{this.props.nativeAd.title}</Text>
                {this.props.nativeAd.subtitle && (
                  <Text style={styles.subtitle}>
                    {this.props.nativeAd.subtitle}
                  </Text>
                )}
                {this.props.nativeAd.description && (
                  <Text style={styles.description}>
                    {this.props.nativeAd.description}
                  </Text>
                )}
              </View>
              <View
                style={{
                  flex: 2,
                  alignSelf: "center",
                  flexDirection: "column"
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      padding: 5,
                      margin: 5,

                      borderBottomWidth: 1,
                      backgroundColor: "#01b45e"
                    }}
                  >
                    {this.props.nativeAd.callToActionText}
                  </Text>
                </View>
                <Text
                  style={{ color: "grey", textAlign: "center", fontSize: 8 }}
                >
                  Sponsored
                </Text>
              </View>
            </View>
          </CardItem> */}
        </Card>
      </View>
    );
  }
}

export default AdComponent;
