import { Pressable, Text, View } from "react-native";
import { days, times } from "@/utils/dummyData";
import { styles } from "@/styles/search-style";
import { AntDesign } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchThirdView = ({ pagerViewRef }: Props) => {
  return (
    <View style={styles.container} key="4">
      <View style={[styles.content, { paddingTop: 80 }]}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => pagerViewRef.current?.setPage(2)}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <View>
          <Text style={styles.text}>When can u take lessons?</Text>
        </View>
        <View style={[styles.innerContainer, { paddingBottom: 0 }]}>
          <Text style={styles.text}>Days: </Text>
          <View style={styles.daysContainer}>
            {days.map((day) => (
              <Pressable style={[styles.button, { width: 100 }]} key={day.value}>
                <Text style={{ color: "#fff" }}>{day.label}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.text}>Times: </Text>
          {times.map((time) => (
            <Pressable style={styles.button} key={time.value}>
              <Text style={{ color: "#fff" }}>{time.label}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(4)}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
