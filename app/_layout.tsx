import { Stack } from "expo-router";
import "react-native-reanimated";
import ApolloProviders from "@/provider/apollo-provider";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ApolloProviders>
  );
}
