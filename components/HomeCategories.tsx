import { View, Text, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
import { useCategoriesQuery } from "@/generated";
import { Skeleton } from "moti/skeleton";
import { styles } from "@/styles/home-style";

const HomeCategories = () => {
  const { data, loading } = useCategoriesQuery();
  return (
    <View style={styles.categoryContainer}>
      <Pressable onPress={() => router.push("/categories")}>
        <Text style={[styles.title, { color: "#fff" }]}>Төрлөөр нь судлах {"->"}</Text>
      </Pressable>
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {loading ? (
            <Loading />
          ) : (
            <View style={styles.categories}>
              {data?.categories?.map((category) => {
                return (
                  <Pressable key={category._id} style={styles.box} onPress={() => router.push(`/category/${category._id}`)}>
                    <Text style={styles.category}>{category.name}</Text>
                  </Pressable>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeCategories;

function Loading() {
  return (
    <View style={styles.categories}>
      <Skeleton height={100} width={200} radius={5} show={true} colorMode="light"></Skeleton>
      <Skeleton height={100} width={200} radius={5} show={true} colorMode="light"></Skeleton>
    </View>
  );
}
