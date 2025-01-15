import { Text, type TextProps, StyleSheet, Dimensions } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: keyof typeof textStyles;
};

const { width } = Dimensions.get("window");

// Function to scale font size based on screen width
const scaleFont = (size: number) => (width / 375) * size;

// Centralized text styles for easy maintenance and addition
const textStyles = {
  default: {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(24),
  },
  defaultSemiBold: {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(24),
    fontWeight: "600" as const,
  },
  title: {
    fontSize: scaleFont(32),
    fontWeight: "bold" as const,
    lineHeight: scaleFont(40),
  },
  label: {
    fontSize: scaleFont(15),
    fontWeight: "bold" as const,
    fontFamily: "Poppins",
    lineHeight: scaleFont(50),
  },
  value: {
    fontSize: scaleFont(20),
    fontWeight: "bold" as const,
    fontFamily: "Poppins",
    lineHeight: scaleFont(50),
  },
  subtitle: {
    fontSize: scaleFont(20),
    fontWeight: "bold" as const,
    lineHeight: scaleFont(28),
  },
  link: {
    fontSize: scaleFont(16),
    lineHeight: scaleFont(24),
    color: "#0a7ea4",
  },
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        textStyles[type], // Apply styles dynamically based on type
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create(textStyles);
