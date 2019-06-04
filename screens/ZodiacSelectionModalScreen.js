import React, { PureComponent } from "react";

import {
  Container,
  Header,
  Right,
  Left,
  Button,
  Icon,
  Thumbnail,
  Title,
  Text,
  Content
} from "native-base";

import {
  View,
  StatusBar,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions
} from "react-native";
import styles, { colors } from "../styles/index.style";
import { ZODIAC_LIST, ZODIAC_IMAGES } from "../helper/zodiaclist";
const ITEM_WIDTH = Dimensions.get("window").width;
const ITEM_HEIGHT = Dimensions.get("window").height;

export default class ZodiacSelectionModalScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
      selectedZodiac: props.navigation.getParam("selectedZodiac", "Aries"),
      selectedId: props.navigation.getParam("id", 0)
    };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.state.params.callback(
      this.state.selectedZodiac,
      this.state.selectedId
    );
    navigation.goBack();
  };

  renderTags() {
    return (
      <View style={{ flex: 1, flexDirection: "column" }}>
        <Text>SELECTION SCREEN</Text>
      </View>
    );
  }

  renderSelectedItem = data => {
    let color = colors.white;
    if (data.item.id == this.state.selectedId) {
      color = colors.ourRed;
    }
    return (
      <View
        style={{
          width: ITEM_WIDTH / 3 - 10,
          marginTop: 30,
          marginStart: 5,
          marginEnd: 5,
          marginBottom: 10,
          padding: 5,
          borderColor: color,
          borderWidth: 1,
          borderRadius: 6
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({
              selectedId: data.item.id,
              selectedZodiac: data.item.name
            });
            const { navigation } = this.props;
            navigation.state.params.callback(data.item.name, data.item.id);
            navigation.goBack();
          }}
        >
          <Thumbnail
            source={ZODIAC_IMAGES[data.item.id]}
            style={{ alignSelf: "center" }}
          />
          <Text
            style={{ fontFamily: "GestaM", fontSize: 14, textAlign: "center" }}
          >
            {data.item.name}
          </Text>
          <Text
            style={{ fontFamily: "GestaM", fontSize: 12, textAlign: "center" }}
          >
            {data.item.date}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <Container style={{ flex: 1, justifyContent: "center" }}>
        <Content contentContainerStyle={{ flex: 1 }}>
          <ScrollView>
            <FlatList
              numColumns={3}
              contentContainerStyle={{}}
              keyExtractor={item => {
                return item.name;
              }}
              data={ZODIAC_LIST}
              renderItem={data => this.renderSelectedItem(data)}
              showsHorizontalScrollIndicator={false}
            />
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
