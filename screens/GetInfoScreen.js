import React from "react";
import {
  Platform,
  View,
  ScrollView,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Body,
  Title,
  Left,
  DatePicker,
  Right,
  Picker,
  Icon
} from "native-base";
import styles, { colors } from "../styles/index.style";
import { observer, inject } from "mobx-react";
import getZodiac from "../utils/getZodiac";
import Constants from "../constants/Constants";
import moment from "moment";
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;
@inject("userStore")
@observer
export default class GetInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    let dt = new Date();
    let formatedDate = moment(dt).format("DD/MM/YYYY");
    this.state = {
      isLoading: true,
      from: props.navigation.getParam("from", "init"),
      dob: new Date(),
      zodiac: getZodiac(formatedDate.split("/")[0], formatedDate.split("/")[1])
        .name
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    let dt = new Date(newDate);
    let formatedDate = moment(dt).format("DD/MM/YYYY");
    let day = formatedDate.split("/")[0];
    let month = formatedDate.split("/")[1];
    let myZodiac = getZodiac(day, month);
    this.props.userStore.dob = formatedDate;
    this.setState({ dob: formatedDate, zodiac: myZodiac.name });
  }

  async componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
    var dob = await AsyncStorage.getItem(Constants.DOB);
    var fullname = await AsyncStorage.getItem(Constants.USER_NAME);
    var myzodiac = await AsyncStorage.getItem(Constants.USER_ZODIAC);
    this.props.userStore.fullname = fullname;
    this.props.userStore.dob = dob;
    if (myzodiac) {
      this.setState({ dob: dob, zodiac: JSON.parse(myzodiac).name });
    }

    if (dob && this.state.from == "init") {
      this.props.userStore.dob = dob;
      this.props.navigation.replace({ routeName: "Home" });
    } else {
      this.setState({ isLoading: false });
    }
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  submit = async () => {
    try {
      let formatedDate = this.state.dob;
      AsyncStorage.setItem(Constants.B_DAY, formatedDate.split("/")[0]);
      AsyncStorage.setItem(Constants.B_MONTH, formatedDate.split("/")[1]);

      AsyncStorage.setItem(Constants.DOB, formatedDate);
      AsyncStorage.setItem(Constants.USER_NAME, this.props.userStore.fullname);

      let dob = await AsyncStorage.getItem(Constants.DOB);
      let day = dob.split("/")[0];
      let month = dob.split("/")[1];
      let myZodiac = getZodiac(day, month);
      AsyncStorage.setItem(Constants.USER_ZODIAC, JSON.stringify(myZodiac));
      this.props.navigation.replace({ routeName: "Home" });
    } catch (err) {
      console.log("ERROR>>", err);
      Alert.alert("Please select date of birth to set your zodiac sign");
    }
  };

  renderZodiac = () => {
    if (this.props.userStore.dob) {
      return (
        <Item
          rounded
          style={{
            width: ITEM_WIDTH - 100,
            paddingStart: 20,
            paddingEnd: 20,
            borderColor: colors.textInputBorder,
            borderWidth: 1,
            borderRadius: 20,
            height: 38,
            paddingEnd: 10,
            marginTop: 10,
            backgroundColor: colors.bgcolor
          }}
        >
          <Text
            style={{
              fontSize: 14,
              fontFamily: "GestaM",
              paddingLeft: 15,
              color: colors.subtitle
            }}
          >
            {this.state.zodiac}
          </Text>
        </Item>
      );
    }
  };

  renderUserInfoForm = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column"
        }}
      >
        <ScrollView
          style={{ flex: 1, height: ITEM_HEIGHT - 60 }}
          scrollEventThrottle={200}
          directionalLockEnabled={true}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <Image
              source={require("../assets/images/logo.jpg")}
              resizeMode="contain"
              style={{
                marginTop: 50,
                height: 200,
                width: 200,
                justifyContent: "center"
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 50,
              margin: 30
            }}
          >
            <Item
              rounded
              style={{
                width: ITEM_WIDTH - 100,
                paddingStart: 20,
                paddingEnd: 20,
                marginBottom: 10,
                borderColor: colors.textInputBorder,
                borderWidth: 1,
                borderRadius: 20,
                height: 38,
                paddingEnd: 10,
                backgroundColor: colors.bgcolor
              }}
            >
              <Input
                color={colors.title}
                placeholderTextColor={colors.placeholderTextColor}
                placeholder="Enter Full Name"
                value={this.props.userStore.fullname}
                autoFocus={false}
                style={{
                  fontSize: 14,
                  fontFamily: "GestaM",
                  paddingLeft: 15
                }}
                keyboardType="default"
                selectionColor={colors.ourRed}
                onChangeText={value => {
                  this.props.userStore.fullname = value;
                }}
              />
            </Item>

            <Item
              rounded
              style={{
                width: ITEM_WIDTH - 100,
                paddingStart: 20,
                paddingEnd: 20,
                borderColor: colors.textInputBorder,
                borderWidth: 1,
                borderRadius: 20,
                height: 38,
                paddingEnd: 10,
                backgroundColor: colors.bgcolor
              }}
            >
              <DatePicker
                minimumDate={new Date(1930, 1, 1)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText={
                  !this.props.userStore.dob
                    ? "Select Date of Birth"
                    : this.props.userStore.dob
                }
                textStyle={{
                  color: colors.ourRed,
                  fontSize: 14,
                  fontFamily: "GestaM"
                }}
                placeHolderTextStyle={{
                  color: colors.ourRed,
                  fontSize: 14,
                  fontFamily: "GestaM"
                }}
                onDateChange={this.setDate}
              />
            </Item>

            {this.renderZodiac()}
          </View>
        </ScrollView>
        <Button
          full
          style={{
            bottom: 0,
            backgroundColor: colors.ourRed
          }}
          onPress={() => {
            console.log("Name:", this.props.userStore.fullname);
            console.log("DOB:", this.props.userStore.dob);
            this.submit();
          }}
        >
          <Text style={{ color: "white" }}>Save</Text>
        </Button>
      </View>
    );
  };

  render() {
    const renderForm = this.renderUserInfoForm();
    if (this.state.isLoading) {
      return <View />;
    } else {
      return (
        <Container style={{ flex: 1, justifyContent: "center" }}>
          <StatusBar hidden />

          <Content contentContainerStyle={{ flex: 1 }}>{renderForm}</Content>
        </Container>
      );
    }
  }
}
