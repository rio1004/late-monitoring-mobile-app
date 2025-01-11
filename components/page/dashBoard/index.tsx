import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function DashBoard() {
  return (
    <ThemedView>
      <ThemedText type="title">Welcome!</ThemedText>
      <HelloWave />
    </ThemedView>
  );
}
