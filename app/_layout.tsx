import "react-native-reanimated";
import { Stack } from "expo-router";
import ApolloProviders from "@/provider/apollo-provider";
import { AuthProvider } from "@/contexts/AuthProvider";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="personalInfo/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="updateProfile/[id]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="becomeTeacher/index"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </ApolloProviders>
  );
}
