import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
  ImageSourcePropType,
} from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorSchemeMod";
import { Colors } from "@/constants/Colors";

// Define the types for the Card component props
interface CardProps {
  title?: string;
  description?: string;
  image?: string | ImageSourcePropType; // Can be a URL or an image source
  onPress?: () => void;
  children?: React.ReactNode;
  footerContent?: React.ReactNode; // Optional footer for additional actions or content
}

const theme = Colors[useColorScheme()];
const { primary, background } = theme;

export const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  onPress,
  children,
  footerContent,
  ...props
}) => {
  return (
    <view style={styles.cardContainer} {...props}>
      {children}
    </view>
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
