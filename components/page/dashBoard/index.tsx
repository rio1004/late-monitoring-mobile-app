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
      <Card style={styles.feedBlock}>
        <FeedBlock />
      </Card>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    // height: "100%",  // Make sure it takes full height of the screen
  },
  feedBlock: {
    flexDirection: "column",
    justifyContent: "center",  // Vertically center the content
    alignItems: "center",      // Horizontally center the content
    flex: 1,                   // Take up the remaining space
  },
});
