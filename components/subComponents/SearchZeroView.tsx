import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { useCategoriesQuery } from "@/generated";
import { handleData } from "@/utils/services";
import { styles } from "@/styles/search-style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useSearch } from "@/contexts/SearchProvider";
import PagerView from "react-native-pager-view";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchZeroView = ({ pagerViewRef }: Props) => {
  const { data, loading } = useCategoriesQuery();
  const { searchInput, setSearchInput } = useSearch();
  return (
    <View style={styles.container} key="1">
      <View style={[styles.content, { paddingTop: 30 }]}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={{ color: "#fff" }}>Би энэ ангилалаар {"\n"} сурмаар байна ...</Text>
        {loading ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <>
            <View style={styles.innerContainer}>
              <View style={styles.daysContainer}>
                {data?.categories?.map((category) => (
                  <Pressable
                    key={category._id}
                    onPress={() => handleData(category._id, "categoryId", setSearchInput)}
                    style={[
                      styles.category,
                      searchInput.categoryId?.includes(category._id) && {
                        backgroundColor: "white",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        { color: "#fff", fontSize: 12 },
                        searchInput.categoryId?.includes(category._id) && {
                          color: "black",
                        },
                      ]}
                    >
                      {category.name}
                    </Text>
                  </Pressable>
                ))}
              </View>
            </View>
            <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(1)} disabled={!searchInput.categoryId}>
              <Text style={styles.buttonText}>үргэлжлүүлэх</Text>
            </Pressable>
          </>
        )}
      </View>
    </View>
  );
};
