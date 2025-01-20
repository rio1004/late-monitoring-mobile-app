import { Card } from "@/components/Design/Card";
import { ThemedText } from "@/components/ThemedText";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { formatCurrency } from "@/utils/currency";
import { useAtomValue } from "jotai";
import { StyleSheet, View } from "react-native";

export default function InfoBlock() {
  const value = useAtomValue(profileSettingAtom);

  const data = [
    { label: "TOTAL LOST!:", value: formatCurrency(value.total) },
    { label: "TODAY:", value: formatCurrency(value.today) },
    { label: "ACHIEVEMENT:", value: value.achievement || "N/A" },
  ];

  return (
    <View>
      {data.map(({ label, value }, index) => (
        <View style={styles.row} key={index}>
          <ThemedText type="label">{label}</ThemedText>
          <ThemedText type="value">{value}</ThemedText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
});
