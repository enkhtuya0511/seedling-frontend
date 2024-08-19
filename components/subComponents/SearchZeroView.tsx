import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { useCategoriesQuery } from "@/generated";
import { styles } from "@/styles/search-style";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  onStart: () => void;
  handleData: (arg: any, field: string) => void;
};

export const SearchZeroView = ({ onStart, handleData }: Props) => {
  const { data } = useCategoriesQuery();
  const [selected, setSelected] = useState<string | null>(null);
  return (
    <View style={styles.container} key="1">
      <View style={[styles.content, { paddingTop: 30 }]}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={{ color: "#fff" }}>I want to learn ...</Text>
        <View style={styles.innerContainer}>
          <View style={styles.daysContainer}>
            {data?.categories?.map((category) => (
              <Pressable
                onPress={() => {
                  handleData(category._id, "categoryId");
                  setSelected(category._id);
                }}
                style={[styles.category, selected?.includes(category._id) && { backgroundColor: "pink" }]}
                key={category._id}
              >
                <Text style={{ color: "#fff", fontSize: 12 }}>{category.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>
        <Pressable style={styles.button} onPress={onStart} disabled={!selected}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
