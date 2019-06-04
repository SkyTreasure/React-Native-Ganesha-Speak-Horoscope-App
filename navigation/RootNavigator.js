import React from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import GetInfo from "../screens/GetInfoScreen";
import NavigationService from "../utils/NavigationService";
import { observer, inject } from "mobx-react";
import Constants from "../constants/Constants";
import ZodiacSelectionModalScreen from "../screens/ZodiacSelectionModalScreen";

let initRoute = "GetInfo";
const RootStackNavigator = StackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: { header: null }
    },
    GetInfo: {
      screen: GetInfo,
      navigationOptions: { header: null }
    },
    ZodiacSelectionModalScreen: {
      screen: ZodiacSelectionModalScreen
    }
  },
  {
    initialRouteName: initRoute
  }
);
@inject("userStore")
@observer
export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <RootStackNavigator
        screenProps={this.props}
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}
