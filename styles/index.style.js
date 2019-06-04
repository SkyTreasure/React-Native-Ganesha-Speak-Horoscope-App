import { StyleSheet } from "react-native";

export const colors = {
  black: "#000000",
  title: "#202020",
  subtitle: "#4D4D4D",
  greyicon: "#A2A2A2",
  bgcolor: "#FBFBFB",
  textBg: "#FBFBFB",
  textPlaceholder: "#9C9C9C",
  textInputBorder: "#E1E1E1",
  white: "#ffffff",
  gray: "#888888",
  background1: "#B721FF",
  background2: "#21D4FD",
  tabIconDefault: "#ccc",
  tabBar: "#fefefe",
  errorBackground: "red",
  errorText: "#fff",
  warningBackground: "#EAEB5E",
  warningText: "#666804",
  noticeText: "#fff",
  accent: "#FE5C5B",
  transparentGrey: "#55666666",
  ourGreen: "#01b45e",
  coolBlue: "#2980b6",
  ourRed: "#FF5240",
  primary: "#FF5240",
  primarylight: "#2f302c",
  primarydark: "#000000"
};

export default StyleSheet.create({
  safeArea: {
    flex: 1
  },
  container: {
    flex: 1,
    backgroundColor: colors.black
  },
  gradient: {
    ...StyleSheet.absoluteFillObject
  },
  scrollview: {
    flex: 1
  },
  exampleContainer: {
    paddingVertical: 10
  },
  exampleContainerDark: {
    backgroundColor: colors.white
  },
  exampleContainerLight: {
    backgroundColor: "white"
  },
  title: {
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "rgba(255, 255, 255, 0.9)",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  titleDark: {
    color: colors.black
  },
  subtitle: {
    marginTop: 5,
    paddingHorizontal: 30,
    backgroundColor: "transparent",
    color: "grey",
    fontSize: 13,
    fontStyle: "italic",
    textAlign: "center"
  },
  slider: {
    marginTop: 15,
    overflow: "visible" // for custom animations
  },
  sliderContentContainer: {
    paddingVertical: 10 // for custom animation
  },
  paginationContainer: {
    paddingVertical: 8
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 8
  },
  utilitycontainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  }
});
