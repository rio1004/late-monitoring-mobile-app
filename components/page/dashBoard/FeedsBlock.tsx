import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { StyleSheet, Button } from "react-native";
import { useAsyncStorage } from "@/hooks/useDashBoardStorage";

interface StorageData {
  name: string;
}

export default function FeedBlock() {
  const [value, setValue] = useAsyncStorage<StorageData>('DashBoard');

  // Function to handle setting values with a delay
  const handleSetValue = async (newValue: StorageData) => {
    await setValue(newValue); // Ensure async setValue doesn't block the UI
  };

  return (
    <ThemedView style={styles.content}>
      <ThemedText type="subtitle">TOTAL : {value?.name}</ThemedText>
      <Button
        title="Set to Tamina"
        onPress={() => handleSetValue({ name: "tamina" })}
      />
      <Button
        title="Set to Raya"
        onPress={() => handleSetValue({ name: "Raya" })}
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
