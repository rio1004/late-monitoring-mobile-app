import { Card } from "@/components/Design/Card";
import { ThemedText } from "@/components/ThemedText";
import { profileSettingAtom } from "@/hooks/useDashBoardStorage";
import { formatCurrency } from "@/utils/currency";
import { useAtomValue } from "jotai";
import { StyleSheet, View } from "react-native";

export default function InfoBlock() {
  const value = useAtomValue(profileSettingAtom);

  const data = [
    { label: "TOTAL LOST:", value: formatCurrency(value.total) },
    { label: "TODAY:", value: formatCurrency(value.today) },
    { label: "ACHIEVEMENT:", value: value.achievement || "N/A" },
  ];

  return (
    <Card style={styles.card}>
      {data.map(({ label, value }, index) => (
        <View style={styles.row} key={index}>
          <ThemedText type="label" style={styles.label}>
            {label}
          </ThemedText>
          <ThemedText type="value" style={styles.value}>
            {value}
          </ThemedText>
        </View>
      ))}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#f8f9fa",
  },
  row: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  label: {
    fontWeight: "bold",
    color: "#6c757d",
    alignSelf: "flex-start",
  },
  value: {
    fontWeight: "600",
    color: "#343a40",
    alignSelf: "center",
    marginTop: 8,
  },
});
