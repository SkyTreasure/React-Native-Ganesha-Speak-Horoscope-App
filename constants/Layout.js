import { Dimensions, PixelRatio } from "react-native";

const window = {};
window.width = Dimensions.get("window").width * PixelRatio.get();
window.height = Dimensions.get("window").height * PixelRatio.get();

const screen = {};
screen.width = Dimensions.get("screen").width * PixelRatio.get();
screen.height = Dimensions.get("screen").height * PixelRatio.get();

export default {
  window,
  screen,
  isSmallDevice: window.width < 375
};
