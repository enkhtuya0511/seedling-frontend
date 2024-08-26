import "react-native-reanimated";
import { Stack } from "expo-router";
import ApolloProviders from "@/provider/apollo-provider";
import { AuthProvider } from "@/contexts/AuthProvider";
import { SearchProvider } from "@/contexts/SearchProvider";

export default function RootLayout() {
  return (
    <ApolloProviders>
      <AuthProvider>
        <SearchProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="personalInfo/index" options={{ headerShown: false }} />
            <Stack.Screen name="updateProfile/[id]" options={{ headerShown: false }} />
            <Stack.Screen name="getStarted/index" options={{ headerShown: false }} />
            <Stack.Screen name="becomeTeacher/index" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" options={{ headerShown: false }} />
            <Stack.Screen name="category/[id]" />
            <Stack.Screen name="lesson/[id]" options={{ headerShown: false }} />
          </Stack>
        </SearchProvider>
      </AuthProvider>
    </ApolloProviders>
  );
}
