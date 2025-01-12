import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import * as FileSystem from 'expo-file-system';
import { Image, StyleSheet, Platform, Button } from "react-native";

export default function FeedBlock() {
  const theme = Colors[useColorScheme() ?? "light"];

  return (
    <ThemedView style={styles.content}>
      <ThemedText type="subtitle">TOTAL : -800</ThemedText>
      <Button title="test" onPress={()=>{ console.log(
        'test: ', FileSystem.documentDirectory
      )}} />
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
