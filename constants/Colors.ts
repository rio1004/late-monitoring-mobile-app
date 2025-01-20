/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    primary: "#FFF",
    text: "#222831",
    background: "#EEEEEE",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
    buttonStyle: {
      backgroundColor: "#2196F3",
      padding: 12,
      borderRadius: 8,
    },
  },
  dark: {
    primary: "#222831",
    text: "#EEEEEE",
    background: "#222831",
    tint: tintColorDark,
    icon: "#00ADB5",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
    buttonStyle: {
      backgroundColor: "#2196F3",
      padding: 12,
      borderRadius: 8,
    },
  },
};
