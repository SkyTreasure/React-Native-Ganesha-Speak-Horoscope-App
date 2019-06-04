import React from "react";
import firebase from "react-native-firebase";
import {
  Platform,
  View,
  Linking,
  ScrollView,
  StatusBar,
  Image,
  Dimensions,
  AsyncStorage,
  Alert
} from "react-native";
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  CardItem,
  Card
} from "native-base";

import {
  InterstitialAdManager,
  NativeAdsManager,
  AdSettings
} from "react-native-fbads";

import styles, { colors } from "../styles/index.style";
import { observer, inject } from "mobx-react";
import OfflineNotice from "../components/OfflineNotice";
import { runInAction } from "mobx";
import Spinner from "react-native-loading-spinner-overlay";
import IconMCI from "react-native-vector-icons/MaterialCommunityIcons";
import { ZODIAC_IMAGES, ZODIAC_LIST } from "../helper/zodiaclist";
const parseString = require("react-native-xml2js").parseString;
import getHoroscope from "../api/horoscopeAPI";
import Constants from "../constants/Constants";
import HoroscopeCard from "../components/HoroscopeCard";
import ZodiacDataCard from "../components/ZodiacDataCard";
import AdComponentCard from "../components/AdComponentCard";
import MyAdsManager from "../utils/MyAdsManager";
const moment = require("moment");
import { Dialog as JDialog } from "react-native-simple-dialogs";
const IS_ANDROID = Platform.OS === "android";
import SmallNativeAd from "../components/SmallNativeAd";

import MyEventLogger from "../utils/MyEventLogger";
import FullAdDark from "../components/FullAdDark";

const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

const APP_STORE_LINK =
  "https://itunes.apple.com/in/app/ganesha-speaks-daily-horoscope/id1456512444?mt=8";
const PLAY_STORE_LINK = "market://details?id=com.horoscope.ganeshaspeak";

// if (__DEV__) {
// AdSettings.clearTestDevices();
// AdSettings.setLogLevel("debug");
// AdSettings.addTestDevice(AdSettings.currentDeviceHash);
//}

const adsManager = new NativeAdsManager(MyAdsManager.getNativeCardAdId(), 10);

@inject("userStore")
@observer
export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      selectedZodiac: "Aries",
      id: 0,
      today: undefined,
      tomorrow: undefined,
      yesterday: undefined,
      week: undefined,
      month: undefined,
      year: undefined,
      spinner: false,
      todayDate: "",
      marginTopVal: 150,
      result: {},
      showRateUs: false
    };
  }

  async componentDidMount() {
    let homecount = await AsyncStorage.getItem(Constants.HOME_COUNT);
    if (homecount == undefined || homecount == null) {
      AsyncStorage.setItem(Constants.HOME_COUNT, "1");
    } else {
      let newcount = Number(homecount) + 1;
      AsyncStorage.setItem(Constants.HOME_COUNT, newcount.toString()).then(
        () => {
          if (newcount == 5 || newcount == 15) {
            this.setState({ showRateUs: true });
          }
        }
      );
    }
  }

  componentWillMount() {
    AsyncStorage.getItem(Constants.USER_ZODIAC).then(selectedZodiac => {
      let sZodiac = JSON.parse(selectedZodiac);
      if (sZodiac) {
        this.setState({
          id: sZodiac.id,
          selectedZodiac: sZodiac.name
        });
      }
    });

    var that = this;
    this.setState({
      spinner: true
    });
    getHoroscope()
      .then(response => response.text())
      .then(response => {
        parseString(response, function(err, result) {
          if (err) {
            this.setState({
              spinner: false
            });
          } else {
            setTimeout(function() {
              that.setState({
                spinner: false,
                result: result,
                todayDate: moment(
                  new Date(result.rss.channel[0].item[that.state.id].pubDate)
                ).format("DD MMM"),
                today: result.rss.channel[0].item[that.state.id].today[0],
                tomorrow: result.rss.channel[0].item[that.state.id].tomorrow[0],
                yesterday:
                  result.rss.channel[0].item[that.state.id].yesterday[0],
                week: result.rss.channel[0].item[that.state.id].thisweek[0],
                month: result.rss.channel[0].item[that.state.id].thismonth[0],
                year: result.rss.channel[0].item[that.state.id].thisyear[0]
              });
            }, 2000);
          }
        });
      })
      .catch(err => {
        this.setState({ spinner: false });
        console.log("ERROR>>", err);
        if (err) {
          Alert.alert("No Internet");
        }
        MyEventLogger.logEventAndDesc("ERROR", err);
      });
  }

  renderTodayView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          zodiac={ZODIAC_LIST[this.state.id].name}
          iconName="calendar-check"
          title="Today's Horoscope"
          summary={this.state.today}
        />
      );
    }
  };

  renderAdCard = () => {
    if (!this.state.spinner) {
      return (
        <View style={{ marginEnd: 16, marginTop: 20, marginStart: 16 }}>
          <Card style={{}}>
            <SmallNativeAd
              adsManager={adsManager}
              color="white"
              adChoicePosition="topRight"
            />
          </Card>
        </View>
      );
    }
  };

  renderYesterdayView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          iconName="calendar-clock"
          title="Yesterday's Horoscope"
          summary={this.state.yesterday}
        />
      );
    }
  };

  renderTomorrowView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          iconName="calendar-plus"
          title="Tomorrow's Horoscope"
          summary={this.state.tomorrow}
        />
      );
    }
  };

  renderWeekView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          iconName="calendar-range"
          title="This Week's Horoscope"
          summary={this.state.week}
        />
      );
    }
  };

  renderMonthView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          iconName="calendar-text"
          title="This Month's Horoscope"
          summary={this.state.month}
        />
      );
    }
  };

  renderYearView = () => {
    if (!this.state.isLoading) {
      return (
        <HoroscopeCard
          iconName="calendar-multiple-check"
          title="This Year's Horoscope"
          summary={this.state.year}
        />
      );
    }
  };

  onActivityCallBack = (selectedZodiacSign, id) => {
    console.log("SELECTED ZODIAC>>>", selectedZodiacSign);
    console.log("SELECTED POSITION>>>", id);
    this.setState({
      selectedZodiac: selectedZodiacSign,
      id: id
    });
    if (this.state.result.rss) {
      this.setState({
        today: this.state.result.rss.channel[0].item[id].today[0],
        tomorrow: this.state.result.rss.channel[0].item[id].tomorrow[0],
        yesterday: this.state.result.rss.channel[0].item[id].yesterday[0],
        week: this.state.result.rss.channel[0].item[id].thisweek[0],
        month: this.state.result.rss.channel[0].item[id].thismonth[0],
        year: this.state.result.rss.channel[0].item[id].thisyear[0]
      });
    }
  };

  renderHeaderView = () => {
    return (
      <View>
        <Header
          style={{
            backgroundColor: "white",
            height: 100
          }}
        >
          <OfflineNotice top={0} />
          <IconMCI
            name="settings-outline"
            size={24}
            color={colors.ourRed}
            style={{ position: "absolute", right: 15, top: 15 }}
            onPress={() => {
              this.props.navigation.navigate("GetInfo", {
                from: "home"
              });
            }}
          />
          <StatusBar hidden />
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../assets/images/logo.jpg")}
              resizeMode="contain"
              style={{
                marginTop: -10,
                height: 100,
                width: 200,
                alignSelf: "center",
                justifyContent: "center"
              }}
            />

            <Button
              rounded
              style={{
                position: "absolute",
                top: 80,
                height: 38,
                backgroundColor: colors.ourRed,
                alignSelf: "center"
              }}
              onPress={() => {
                this.props.navigation.navigate("ZodiacSelectionModalScreen", {
                  id: this.state.id,
                  selectedZodiac: this.state.selectedZodiac,
                  callback: this.onActivityCallBack.bind(this)
                });
              }}
            >
              <Text
                style={{
                  fontFamily: "GestaM",
                  fontSize: 14,
                  fontWeight: "normal"
                }}
              >
                Select Zodiac
              </Text>
            </Button>
          </View>
        </Header>
      </View>
    );
  };

  renderZodiacData = () => {
    if (!this.state.isLoading) {
      // return (
      //   <View>
      //     <ZodiacDataCard
      //       id={this.state.id}
      //       todayDate={this.state.todayDate}
      //       imageSrc={ZODIAC_IMAGES[this.state.id]}
      //       name={ZODIAC_LIST[this.state.id].name}
      //       element={ZODIAC_LIST[this.state.id].element}
      //       compatible={ZODIAC_LIST[this.state.id].compatible}
      //       daterange={ZODIAC_LIST[this.state.id].date}
      //     />
      //     ;
      //   </View>
      // );
    }
    return (
      // <ZodiacDataCard id={this.state.id} todayDate={this.state.todayDate} />
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
                  source={ZODIAC_IMAGES[this.state.id]}
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
                    {ZODIAC_LIST[this.state.id].name}
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
                      {this.state.todayDate}
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
                    {ZODIAC_LIST[this.state.id].element}
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
                    {ZODIAC_LIST[this.state.id].compatible}
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
                    {ZODIAC_LIST[this.state.id].date}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </CardItem>
      </Card>
    );
  };

  renderRateDialog = () => {
    return (
      <JDialog
        visible={this.state.showRateUs}
        style={{ backgroundColor: "black" }}
        title="We are glad you're enjoying using Ganesha Horoscope. Would you mind giving us a 5-star review in the store? It really help us out! Thanks for the support."
        onTouchOutside={() => {
          this.setState({ showRateUs: false });
        }}
        contentStyle={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#99000000"
        }}
        animationType="fade"
      >
        <Image
          source={{
            uri:
              "https://user-images.githubusercontent.com/1933684/52912746-8e694100-32db-11e9-9451-df18572be025.png"
          }}
          resizeMode="contain"
          resizeMethod="scale"
          style={{ marginBottom: 10, height: 50, width: 100 }}
        />

        <Button
          success
          full
          onPress={() => this.rateApp()}
          style={{ marginTop: 20 }}
        >
          <Text style={{ color: "white" }}> Rate Ganesha Horscope </Text>
        </Button>
      </JDialog>
    );
  };

  rateApp = () => {
    MyEventLogger.logEvent("RATE_FROM_RESULT");
    if (Platform.OS === "ios") {
      Linking.openURL(APP_STORE_LINK).catch(err => {
        MyEventLogger.logEventAndDesc("ERROR", err);
        //console.error("An error occurred", err)
      });
    } else {
      Linking.openURL(PLAY_STORE_LINK).catch(err => {
        MyEventLogger.logEventAndDesc("ERROR", err);
        //console.error("An error occurred", err)
      });
    }
  };

  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <StatusBar hidden />
        {this.renderHeaderView()}

        <Content contentContainerStyle={{ flex: 1 }}>
          <ScrollView
            style={{ flex: 1, marginTop: 30 }}
            scrollEventThrottle={200}
            directionalLockEnabled={true}
          >
            <Spinner
              visible={this.state.spinner}
              textContent={"Loading..."}
              textStyle={{ color: "white" }}
            />
            <View style={{ flex: 1, flexDirection: "column" }}>
              {this.renderZodiacData()}
              {this.renderAdCard()}
              {this.renderTodayView()}
              {this.renderAdCard()}
              {this.renderYesterdayView()}
              {this.renderAdCard()}
              {this.renderTomorrowView()}
              {this.renderAdCard()}
              {this.renderWeekView()}
              {this.renderAdCard()}
              {this.renderMonthView()}
              {this.renderAdCard()}
              {this.renderYearView()}
              {this.renderAdCard()}
              {this.renderRateDialog()}
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
