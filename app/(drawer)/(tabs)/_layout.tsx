import { Tabs } from "expo-router";
import React from "react";
import { Ionicons,MaterialIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import TabTwoScreen from "@/app/(drawer)/(tabs)/explore";
import HomeScreen from "@/app/(drawer)/(tabs)";


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Login",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "log-in" : "log-in-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Sign up",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "person-add-alt-1" : "person-add-alt"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="calculator"
        options={{
          title: "Calculator",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "calculator" : "calculator-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
