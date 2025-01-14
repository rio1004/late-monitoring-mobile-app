import { Card } from "@/components/Design/Card";
import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { useAtom, useAtomValue } from "jotai";
import { StyleSheet } from "react-native";

export default function InfoBlock() {
  const value = useAtomValue(profileSettingAtom);

  return (
    <Card>
      <div style={styles.row}>
        <ThemedText type="title">TOTAL LOST:</ThemedText>
        <ThemedText type="title">{value.total} PHP</ThemedText>
      </div>
      <div style={styles.row}>
        <ThemedText type="title">TODAY :</ThemedText>
        <ThemedText type="title">{value?.today} PHP</ThemedText>
      </div>
      <div style={styles.row}>
        <ThemedText type="title">ACHIVEMENT :</ThemedText>
        <ThemedText type="title">{value?.achievement}</ThemedText>
      </div>
    </Card>
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
