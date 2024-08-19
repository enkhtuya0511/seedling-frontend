import { useState } from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { styles } from "@/styles/home-style";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [value, setValue] = useState<string | null>("item 1");
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.name}>Seedling</Text>
      </View>

      <View style={styles.innerContainer}>
        <Text style={styles.title}>Tанд тохирох онлайн хувийн багш</Text>
        <Text style={styles.desc}>Асуултанд хариулаад танд тохирох хувийн багшийг сонгоорой.</Text>
        <Pressable style={styles.button} onPress={() => router.push("/getStarted")}>
          <Text>Эхлэх {"->"}</Text>
        </Pressable>
      </View>

      <View style={styles.categoryContainer}>
        <Pressable>
          <Text style={[styles.title, { color: "#fff" }]}>
            Төрлөөр нь судлах {"->"}
          </Text>
        </Pressable>
        <View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.categories}>
              {categories.map((category, id) => {
                return (
                  <Pressable key={id} style={styles.box}>
                    <Text style={styles.category}>{category}</Text>
                  </Pressable>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const data = [
  { label: "Item 1", value: "1" },
  { label: "Item 2", value: "2" },
  { label: "Item 3", value: "3" },
  { label: "Item 4", value: "4" },
  { label: "Item 5", value: "5" },
  { label: "Item 6", value: "6" },
  { label: "Item 7", value: "7" },
  { label: "Item 8", value: "8" },
];

const categories = [
  "Бизнес",
  "Мэдээллийн технологи",
  "Гадаад хэл",
  "Урлаг",
  "Эрүүл мэнд",
  "Хоол хийх",
  "Дизайн",
  "Биологи",
];
