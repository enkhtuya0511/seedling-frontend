import { Pressable, Text, View } from "react-native";
import { handlePress } from "@/utils/services";
import { useSearch } from "@/contexts/SearchProvider";
import PagerView from "react-native-pager-view";
import { days, times } from "@/utils/dummyData";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/search-style";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchThirdView = ({ pagerViewRef }: Props) => {
  const { searchInput, setSearchInput } = useSearch();
  return (
    <View style={styles.container} key="4">
      <View style={[styles.content, { paddingTop: 80 }]}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => pagerViewRef.current?.setPage(2)}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <View>
          <Text style={styles.text}>Та хэзээ хичээлд суух{"\n"} боломжтой вэ?</Text>
        </View>
        <View style={[styles.innerContainer, { paddingBottom: 0 }]}>
          <Text style={styles.text}>Өдрүүд: </Text>
          <View style={styles.daysContainer}>
            {days.map((day) => (
              <Pressable
                style={[
                  styles.button,
                  { width: 100 },
                  searchInput?.availableDays?.includes(day.value) && {
                    backgroundColor: "white",
                  },
                ]}
                key={day.value}
                onPress={() => handlePress(day.value, "availableDays", setSearchInput)}
              >
                <Text
                  style={[
                    { color: "#fff" },
                    searchInput?.availableDays?.includes(day.value) && {
                      color: "black",
                    },
                  ]}
                >
                  {day.label}
                </Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.text}>Цагууд: </Text>
          {times.map((time) => (
            <Pressable
              style={[
                styles.button,
                searchInput?.availableTimes?.includes(time.value) && {
                  backgroundColor: "white",
                },
              ]}
              key={time.value}
              onPress={() => handlePress(time.value, "availableTimes", setSearchInput)}
            >
              <Text
                style={[
                  { color: "#fff" },
                  searchInput?.availableTimes?.includes(time.value) && {
                    color: "black",
                  },
                ]}
              >
                {time.label}
              </Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(4)}>
          <Text style={styles.buttonText}>үргэлжлүүлэх</Text>
        </Pressable>
      </View>
    </View>
  );
};
