import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { useGetTeachersQuery } from "@/generated";
import { styles } from "@/styles/search-style";
import { useSearch } from "@/contexts/SearchProvider";
import { router } from "expo-router";

export const SearchFifthView = () => {
  const { searchInput } = useSearch();
  const { data, loading } = useGetTeachersQuery({
    variables: {
      input: searchInput,
    },
    skip: !searchInput,
  });
  console.log("searchInput", searchInput, data);
  return (
    <View style={styles.container} key="5">
      <View style={[styles.content, loading && styles.loadingContainer]}>
        {loading ? (
          <View>
            <Text style={styles.text}>Таньд урам зориг </Text>
            <Text style={styles.text}>өгөх багшийг хайж байна!</Text>
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
          </View>
        ) : (
          <View>
            {data?.getTeachers?.length === 0 ? (
              <Text style={styles.text}>таньд тохирсон багш олдсонгүй!</Text>
            ) : (
              <>
                {data?.getTeachers?.map((teacher) => (
                  <View key={teacher?._id}>
                    <Text style={styles.text}>{teacher?.categoryId}</Text>
                    <Text style={styles.text}>{teacher?.subject}</Text>
                    <Text style={styles.text}>{teacher?.price}</Text>
                    <Text style={styles.text}>{teacher?.availableDays}</Text>
                    <Text style={styles.text}>{teacher?.availableTimes}</Text>
                    <Text style={styles.text}>{teacher?.description}</Text>
                  </View>
                ))}
              </>
            )}

            <Pressable onPress={() => router.replace("/findTutors")}>
              <Text style={{ color: "#fff" }}>click here!</Text>
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
};
