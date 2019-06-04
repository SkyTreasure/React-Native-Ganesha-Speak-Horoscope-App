/**
 * @flow
 */
import React, { PureComponent } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { withNativeAd, AdSettings } from "react-native-fbads";

import { colors } from "../styles/index.style";

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
    color: colors.ourGreen
  },
  description: {
    fontSize: 10,
    paddingEnd: 10,
    opacity: 0.8,
    color: colors.black
  },
  subtitle: {
    fontSize: 10,
    paddingEnd: 10,
    fontStyle: "italic",
    color: colors.coolBlue
  }
});

class FullNativeAd extends PureComponent {
  constructor(props) {
    super(props);
    console.log("Inside Full Ad");
    console.log(props.adsManager);
    console.log("Native ads>", props.nativeAd);
  }
  render() {
    console.log("ADs Data>", this.props.nativeAd);
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
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
            <Text style={{ color: "grey", textAlign: "center", fontSize: 8 }}>
              Sponsored
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default withNativeAd(FullNativeAd);
