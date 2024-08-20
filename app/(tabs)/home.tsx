import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/home-style";
import HomeCategories from "@/components/HomeCategories";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.name}>Seedling</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Tанд тохирох онлайн хувийн багш</Text>
        <Text style={styles.desc}>Асуултанд хариулаад танд тохирох багшийг сонгоорой.</Text>
        <Pressable style={styles.button} onPress={() => router.push("/getStarted")}>
          <Text>Эхлэх {"->"}</Text>
        </Pressable>
      </View>

      <HomeCategories />
    </View>
  );
}
