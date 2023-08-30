import { Tabs, Link } from "expo-router";

import FontAwesome from "@expo/vector-icons/FontAwesome";

import { Pressable } from "react-native";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerTitle: "DSHOP",
        headerTitleStyle: { fontWeight: "bold" },
        headerShadowVisible: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Menu",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="shopping-cart"
                    size={24}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Pesquisar",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <FontAwesome name="shopping-cart" size={25} padding={16} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Perfil",
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
