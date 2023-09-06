import { Stack } from "expo-router";

export default function AppLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
                name="modal"
                options={{
                    headerShadowVisible: false,
                    headerTitle: "",
                    headerStyle: { backgroundColor: "#FAFAFA" },
                    presentation: "transparentModal",
                }}
            />
        </Stack>
    );
}
