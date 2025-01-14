import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { useAtom, useAtomValue } from "jotai";
import { StyleSheet } from "react-native";


export default function InfoBlock() {
  const value = useAtomValue(profileSettingAtom)

  return (
    <ThemedView style={styles.content}>
      <div style={styles.row}>
        <ThemedText type="title2">TOTAL LOST:</ThemedText>
        <ThemedText type="title2">{value.total} PHP</ThemedText>
      </div>
      <div style={styles.row}>
        <ThemedText type="title2">TODAY :</ThemedText>
        <ThemedText type="title2">{value?.today} PHP</ThemedText>
      </div>
      <div style={styles.row}>
        <ThemedText type="title2">ACHIVEMENT :</ThemedText>
        <ThemedText type="title2">{value?.achievement}</ThemedText>
      </div>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  content: {
    height: "30%",
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    // display: 'jus'
  },
});
