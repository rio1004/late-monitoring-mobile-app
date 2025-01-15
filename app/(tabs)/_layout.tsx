import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, View, StyleSheet } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorSchemeMod";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true, // Enable headers globally
        headerStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
          borderBottomWidth: 0,
          elevation: 0,
          width: "100%", // Ensure full width
        },
        headerTintColor: Colors[colorScheme ?? "light"].text,
        headerTitle: () => (
          <View style={styles.header}>
            <Image
              source={require("@/assets/logo.png")} // Use your image path here
              style={{ width: 90, height: 40 }}
            />
            <IconSymbol
              size={40}
              name="notification"
              color={theme.tabIconDefault}
              style={styles.headerIcon}
            />
          </View>
        ),
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="history"
        options={{
          title: "History",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="history" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="profile" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  // TODO header not wrking properly in web but in mobile its working
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%", // Ensure it takes full width
    // paddingHorizontal: 16, // Add some horizontal padding
    boxSizing: "border-box", // To ensure padding doesn't cause overflow
  },
  headerIcon: {
    paddingHorizontal: 4,
    borderRadius: 10,
    elevation: 5, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginBottom: 5,
    backgroundColor: Colors["light"].primary,
  },
});
