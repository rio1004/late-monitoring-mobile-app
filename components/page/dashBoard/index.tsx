import {  StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import FeedBlock from "./FeedsBlock";
import InfoBlock from "./InfoBlock";

const data = {
  infoBlock: 'awd'
}

export default function DashBoard() {
  return (
    <ThemedView style={styles.container}>
      <InfoBlock />
      <FeedBlock />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
