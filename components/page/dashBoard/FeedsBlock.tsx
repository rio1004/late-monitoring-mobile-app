import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
// import { useColorScheme } from "@/hooks/useColorScheme.web";
// import { useColorScheme } from "react-native";
import { Image, StyleSheet, Platform } from "react-native";

export default function FeedBlock() {
  const theme = Colors[useColorScheme() ?? "light"];

  return (
    <ThemedView style={styles.content}>
      <ThemedText type="subtitle">TOTAL : -800</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
