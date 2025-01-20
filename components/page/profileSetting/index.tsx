import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/Design/Card";
import DevView from "./DevView";

const defaultValue = {
  IndexBlock: [{ title: "Dev Content", content: <DevView /> }],
};

export default function DashBoard() {
  return (
    <ThemedView style={styles.container}>
      <View>
        {defaultValue.IndexBlock.map(({ title, content }, index) => (
          <Card key={index}>{content}</Card>
        ))}
      </View>
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
    justifyContent: "center", // Vertically center the content
    alignItems: "center", // Horizontally center the content
    flex: 1, // Take up the remaining space
  },
});
