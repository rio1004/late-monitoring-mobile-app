import React from "react";
import { View, StyleSheet, ImageSourcePropType, ViewProps } from "react-native";
import { useColorScheme } from "@/hooks/useColorSchemeMod";
import { Colors } from "@/constants/Colors";

// Define the types for the Card component props
type CardProps = ViewProps & {
  title?: string;
  description?: string;
  image?: string | ImageSourcePropType;
  onPress?: () => void;
  children?: React.ReactNode;
  footerContent?: React.ReactNode;
};

const theme = Colors[useColorScheme()];
const { primary, background } = theme;

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onPress,
  children,
  footerContent,
  style,
  ...props
}) => {
  return (
    <View style={[styles.cardContainer, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // flex: 1,
    padding: 20,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginBottom: 16,
    backgroundColor: primary,
    marginInline: 10,
  },
});
