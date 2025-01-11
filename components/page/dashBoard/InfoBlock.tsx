import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
// import { useColorScheme } from "@/hooks/useColorScheme.web";
// import { useColorScheme } from "react-native";
import { Image, StyleSheet, Platform } from "react-native";

export default function InfoBlock() {
  const theme = Colors[useColorScheme() ?? "light"];

  return (
    <ThemedView style={styles.content}>
      <ThemedText type="title2" >TOTAL : -800</ThemedText>
      <ThemedText type="title2">TODAY : -800</ThemedText>
      <ThemedText type="title2">ACHIVEMENT : you win perfect</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
