import { StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import FeedBlock from "./FeedsBlock";
import InfoBlock from "./InfoBlock";
import { Card } from "@/components/Design/Card";

const defaultValue = {
  infoBlock: "awd",
  feedsBlock: [
    { title: "Work Week", content: "awdwd" },
    { title: "Info", content: "dawd" },
  ],
};

export default function DashBoard() {
  return (
    <ThemedView style={styles.container}>
      <Card>
        <InfoBlock />
      </Card>
      <Card>
        <FeedBlock />
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
