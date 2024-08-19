import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <View style={styles.imageAndTextBox}>
          <Image
            source={require("../assets/images/error.png")}
            style={styles.image}
          />
          <ThemedText type="title" style={styles.title}>
            Энэ хуудас олдсонгүй.
          </ThemedText>
        </View>

        <TouchableOpacity style={styles.homeScreenBTN}>
          <Link href="./home" style={styles.link}>
            <View style={styles.link1}>
              <ThemedText type="link">Буцах</ThemedText>
            </View>
          </Link>
        </TouchableOpacity>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  imageAndTextBox: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 5,
    paddingBottom: 100,
    gap: 10,
  },
  homeScreenBTN: {
    width: 300,
    backgroundColor: "rgb(75 85 99)",
    height: "8%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "white",
    shadowOpacity: 0.35,
    shadowRadius: 20,
    position: "absolute",
    bottom: "10%",
  },
  image: {
    width: 380,
    height: 180,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    width: "100%",
    height: "100%",
    backgroundColor: "#181a21",
    alignItems: "center",
  },
  link: {
    width: 300,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  link1: {
    width: 300,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    color: "white",
  },
});
