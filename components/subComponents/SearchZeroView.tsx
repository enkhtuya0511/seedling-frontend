import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { GetTeachersInput, useCategoriesQuery } from "@/generated";
import { handleData } from "@/utils/services";
import { styles } from "@/styles/search-style";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  onStart: () => void;
  setSearchInput: (arg: GetTeachersInput) => void;
  searchInput: GetTeachersInput;
};

export const SearchZeroView = ({
  onStart,
  setSearchInput,
  searchInput,
}: Props) => {
  const { data } = useCategoriesQuery();
  return (
    <View style={styles.container} key="1">
      <View style={[styles.content, { paddingTop: 30 }]}>
        <Pressable
          style={{ width: "100%", paddingLeft: 15 }}
          onPress={() => router.back()}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={{ color: "#fff" }}>I want to learn ...</Text>
        <View style={styles.innerContainer}>
          <View style={styles.daysContainer}>
            {data?.categories?.map((category) => (
              <Pressable
                key={category._id}
                onPress={() =>
                  handleData(category._id, "categoryId", setSearchInput)
                }
                style={[
                  styles.category,
                  searchInput.categoryId?.includes(category._id) && {
                    backgroundColor: "pink",
                  },
                ]}
              >
                <Text style={{ color: "#fff", fontSize: 12 }}>
                  {category.name}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={onStart}
          disabled={!searchInput.categoryId}
        >
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
