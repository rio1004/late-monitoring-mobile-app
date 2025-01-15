import { Tabs } from "expo-router";
import React from "react";
import { Image, Platform, View } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorSchemeMod";
import { ThemedText } from "@/components/ThemedText";

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
        },
        // headerTintColor: Colors[colorScheme ?? "light"].text,
        headerTitle: () => (
          <View style={{ flexDirection: "row", }}>
            <Image
              source={require("@/assets/logo.png")} // Use your image path here
              style={{ width: 90, height: 40 }}
            />
            <IconSymbol
              size={40}
              name="notification"
              color={theme.tabIconDefault}
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
