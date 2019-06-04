import { Text, CardItem, Card, Image, Button } from "native-base";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import React, { Component } from "react";
import { View } from "react-native";
import styles, { colors } from "../styles/index.style";

export default class ZodiacDataCard extends Component {
  render() {
    let {
      id,
      todayDate,
      zodiac,
      imageSrc,
      name,
      element,
      compatible,
      daterange
    } = this.props;

    return (
      <View>
        <Card style={{ marginTop: 20, marginLeft: 16, marginRight: 16 }}>
          <CardItem>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                    source={imageSrc}
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 6,
                      marginTop: 5,
                      flex: 1
                    }}
                  />

                  <View
                    style={{
                      flex: 3,
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Text
                      style={{
                        color: colors.ourRed,
                        textAlign: "center",
                        marginStart: 15,
                        fontSize: 18,
                        fontFamily: "GestaM"
                      }}
                    >
                      {name}
                    </Text>
                  </View>

                  <View
                    style={{
                      flex: 1.2,
                      alignItems: "center",
                      flexDirection: "row"
                    }}
                  >
                    <Button
                      style={{
                        borderRadius: 5,
                        height: 30,
                        backgroundColor: colors.accent,
                        alignSelf: "center"
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "GestaM",
                          fontSize: 10,
                          fontWeight: "bold"
                        }}
                      >
                        {todayDate}
                      </Text>
                    </Button>
                  </View>
                </View>

                <View style={{ flex: 1, flexDirection: "column" }}>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                      style={{
                        color: colors.ourRed,
                        marginStart: 0,
                        marginTop: 8,
                        fontSize: 14,
                        fontFamily: "GestaR"
                      }}
                    >
                      ELEMENT -
                    </Text>
                    <Text
                      style={{
                        color: colors.subtitle,
                        marginStart: 0,
                        marginTop: 8,
                        paddingStart: 8,
                        fontSize: 14,
                        fontFamily: "GestaR"
                      }}
                    >
                      {element}
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                      style={{
                        color: colors.ourRed,
                        marginStart: 0,
                        marginTop: 8,
                        fontSize: 14,
                        fontFamily: "GestaR"
                      }}
                    >
                      COMPATIBILITY -
                    </Text>
                    <Text
                      style={{
                        color: colors.subtitle,
                        marginStart: 0,
                        marginEnd: 10,
                        marginTop: 8,
                        paddingStart: 8,
                        fontSize: 12,
                        fontFamily: "GestaR"
                      }}
                    >
                      {compatible}
                    </Text>
                  </View>
                  <View style={{ flex: 1, flexDirection: "row" }}>
                    <Text
                      style={{
                        color: colors.ourRed,
                        marginStart: 0,
                        marginTop: 8,
                        fontSize: 14,
                        fontFamily: "GestaR"
                      }}
                    >
                      DATE RANGE -
                    </Text>
                    <Text
                      style={{
                        color: colors.subtitle,
                        marginStart: 0,
                        marginTop: 8,
                        paddingStart: 8,
                        fontSize: 12,
                        fontFamily: "GestaR"
                      }}
                    >
                      {daterange}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </CardItem>
        </Card>
      </View>
    );
  }
}
