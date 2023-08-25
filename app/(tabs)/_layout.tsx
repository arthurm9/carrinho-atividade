import { Link, Tabs } from "expo-router";

import { Text, Pressable } from "react-native";

import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: () => <Text>DSHOP</Text>,
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon:  () => <FontAwesome name="list" size={25} />,
          headerRight: () => (
            <Link href="/cart">
              <Pressable>
                <FontAwesome name="shopping-cart" size={25} />,
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="menu"
        options={{
          tabBarLabel: "MENU",
          tabBarIcon:  () => <FontAwesome name="list" size={25} />,
          headerRight: () => (
            <Link href="/cart">
              <Pressable>
                <FontAwesome name="shopping-cart" size={25} />,
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "MENU",
          tabBarIcon:  () => <FontAwesome size={25} />,
        }}
      />
    </Tabs>
  );
}
