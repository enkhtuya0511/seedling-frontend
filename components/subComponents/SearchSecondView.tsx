import { Pressable, Text, View } from "react-native";
import { useSearch } from "@/contexts/SearchProvider";
import PagerView from "react-native-pager-view";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/search-style";
import { handlePress } from "@/utils/services";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchSecondView = ({ pagerViewRef }: Props) => {
  const { setSearchInput, searchInput } = useSearch();
  return (
    <View style={styles.container} key="3">
      <View style={styles.content}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => pagerViewRef.current?.setPage(1)}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.text}>What's your subject's level?</Text>
        <View style={styles.innerContainer}>
          {levels.map((level, id) => (
            <Pressable
              style={[styles.button, searchInput?.level?.includes(level) && { backgroundColor: "pink" }]}
              key={id}
              onPress={() => handlePress(level, "level", setSearchInput)}
            >
              <Text style={{ color: "#fff" }}>{level}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(3)}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const levels = ["Aнхан шат", "Дунд шат", "Ахисан шат"];
