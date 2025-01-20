import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Button, View, Text } from "react-native";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { useAtom } from "jotai";
import { Card } from "@/components/Design/Card";

export default function DevView() {
  const [DashBoard, setDashBoardAtom] = useAtom(profileSettingAtom);

  return (
    <View>
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
            today: 321,
            achievement: "Raya Achievement",
          }))
        }
      />

      <Text>Jotai profileSettingAtom: </Text>
      <Text>{JSON.stringify(DashBoard, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
});
