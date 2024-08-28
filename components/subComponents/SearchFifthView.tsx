import { ActivityIndicator, Pressable, ScrollView, Text, View } from "react-native";
import { useGetTeachersQuery } from "@/generated";
import { styles } from "@/styles/search-style";
import { useSearch } from "@/contexts/SearchProvider";
import { router } from "expo-router";
import TeacherCard from "../TeacherCard";

export const SearchFifthView = () => {
  const { searchInput } = useSearch();
  const { data, loading } = useGetTeachersQuery({
    variables: {
      input: searchInput,
    },
    skip: !searchInput,
  });
  // console.log("searchInput", searchInput, data);
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
          <>
            {data?.getTeachers?.length === 0 ? (
              <>
                <Text style={styles.text}>таньд тохирсон багш олдсонгүй!</Text>
                <Pressable onPress={() => router.replace("/findTutors")}>
                  <Text style={{ color: "#fff" }}>Энд дарж бусад багшийг хараарай!</Text>
                </Pressable>
              </>
            ) : (
              <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={{ color: "#fff", marginBottom: 10 }}>нийт {data?.getTeachers?.length} багш</Text>
                {data?.getTeachers?.map((teacher, id) => <TeacherCard course={teacher} key={id} />)}
                <Pressable onPress={() => router.replace("/findTutors")}>
                  <Text style={{ color: "#fff" }}>Энд дарж бусад багшийг хараарай!</Text>
                </Pressable>
              </ScrollView>
            )}
          </>
        )}
      </View>
    </View>
  );
};
