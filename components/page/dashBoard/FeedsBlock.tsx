import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Button } from "react-native";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { useSetAtom } from "jotai";
import { Card } from "@/components/Design/Card";

export default function FeedBlock() {
  const setDashBoardAtom = useSetAtom(profileSettingAtom);

  return (
    <Card>
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
    </Card>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
