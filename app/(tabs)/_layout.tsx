import React from "react";
import { Tabs } from "expo-router";
import { AuthProvider } from "@/contexts/AuthProvider";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#a8a9ac",
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "#ffffff",
            display: route.name === "index" || route.name === "signIn" || route.name === "signUp" ? "none" : "flex",
            paddingTop: 10,
          },
          tabBarButton: ["index", "signIn", "signUp"].includes(route.name)
            ? () => {
                return null;
              }
            : undefined,
        })}
      >
        <Tabs.Screen name="index" options={{ tabBarStyle: { display: "none" } }} />
        <Tabs.Screen name="signIn" options={{ tabBarStyle: { display: "none" } }} />
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => <Ionicons name="home-sharp" size={24} color={focused ? "#18223a" : color} />,
          }}
        />
        <Tabs.Screen
          name="findTutors"
          options={{
            title: "Find Tutors",
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => <Ionicons name="search" size={24} color={focused ? "#18223a" : color} />,
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => <Ionicons name="heart" size={24} color={focused ? "#18223a" : color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarShowLabel: false,
            tabBarIcon: ({ color, focused }) => <FontAwesome name="user" size={24} color={focused ? "#18223a" : color} />,
          }}
        />
      </Tabs>
    </AuthProvider>
  );
}
