import "react-native-reanimated";
import { Stack } from "expo-router";
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
