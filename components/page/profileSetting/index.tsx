import { StyleSheet, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { Card } from "@/components/Design/Card";
import DevView from "./DevView";
import SalaryInfo from "./SalaryInfo";

const defaultValue = {
  IndexBlock: [
    { title: "Salary Info", content: <SalaryInfo /> },
    { title: "Dev Content", content: <DevView /> },
  ],
};

export default function ProfileSetting() {
  return (
    <ThemedView style={styles.container}>
      {defaultValue.IndexBlock.map(({ title, content }, index) => (
        <Card title={title} key={index}>
          {content}
        </Card>
      ))}
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
