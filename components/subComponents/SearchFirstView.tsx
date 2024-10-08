import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { useSubjectsByCategoryQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import PagerView from "react-native-pager-view";
import { styles } from "@/styles/search-style";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchFirstView = ({ pagerViewRef }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const { searchInput, setSearchInput } = useSearch();
  const { data } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: searchInput.categoryId,
    },
  });
  return (
    <View style={styles.container} key="2">
      <View style={styles.content}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => pagerViewRef.current?.setPage(0)}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={{ color: "#fff" }}>Таны сурахыг хүсэж буй чиглэл{"\n"} юу вэ?</Text>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Чиглэлүүд: </Text>
          {data?.subjectsByCategory && (
            <>
              {data.subjectsByCategory?.map((subject, id) => (
                <Pressable
                  style={[styles.button, selected?.includes(subject) && { backgroundColor: "white" }]}
                  key={id}
                  onPress={() => {
                    handleData(subject, "subject", setSearchInput);
                    setSelected(subject);
                  }}
                >
                  <Text style={[{ color: "#fff" }, selected?.includes(subject) && { color: "black" }]}>{subject}</Text>
                </Pressable>
              ))}
            </>
          )}
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(2)} disabled={!selected}>
          <Text style={styles.buttonText}>үргэлжлүүлэх</Text>
        </Pressable>
      </View>
    </View>
  );
};
