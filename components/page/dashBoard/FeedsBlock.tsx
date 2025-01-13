import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Button } from "react-native";
import { dashBoardAtom } from "@/hooks/useDashBoardStorage";
import { useSetAtom } from "jotai";

export default function FeedBlock() {
  const setDashBoardAtom = useSetAtom(dashBoardAtom);

  return (
    <ThemedView style={styles.content}>
      <Button
        title="Set to Tamina"
        onPress={() =>
          setDashBoardAtom((prev) => ({
            ...prev,
            total: 12,
          }))
        }
      />
      <Button
        title="Set to Raya"
        onPress={() =>
          setDashBoardAtom((prev) => ({
            ...prev,
            total: -15.1,
            achievement: "Raya Achievement",
          }))
        }
      />
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
