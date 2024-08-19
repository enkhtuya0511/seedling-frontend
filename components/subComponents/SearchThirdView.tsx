import { Pressable, Text, View } from "react-native";
import { days, times } from "@/utils/dummyData";
import { styles } from "@/styles/search-style";
import { AntDesign } from "@expo/vector-icons";
import PagerView from "react-native-pager-view";
import { GetTeachersInput } from "@/generated";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
  handlePress: (arg: string, field: keyof GetTeachersInput) => void;
  searchInput: GetTeachersInput;
};

export const SearchThirdView = ({
  pagerViewRef,
  handlePress,
  searchInput,
}: Props) => {
  return (
    <View style={styles.container} key="4">
      <View style={[styles.content, { paddingTop: 80 }]}>
        <Pressable
          style={{ width: "100%", paddingLeft: 15 }}
          onPress={() => pagerViewRef.current?.setPage(2)}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <View>
          <Text style={styles.text}>When can u take lessons?</Text>
        </View>
        <View style={[styles.innerContainer, { paddingBottom: 0 }]}>
          <Text style={styles.text}>Days: </Text>
          <View style={styles.daysContainer}>
            {days.map((day) => (
              <Pressable
                style={[
                  styles.button,
                  { width: 100 },
                  searchInput?.availableDays?.includes(day.value) && {
                    backgroundColor: "pink",
                  },
                ]}
                key={day.value}
                onPress={() => handlePress(day.value, "availableDays")}
              >
                <Text style={{ color: "#fff" }}>{day.label}</Text>
              </Pressable>
            ))}
          </View>
          <Text style={styles.text}>Times: </Text>
          {times.map((time) => (
            <Pressable
              style={[
                styles.button,
                searchInput?.availableTimes?.includes(time.value) && {
                  backgroundColor: "pink",
                },
              ]}
              key={time.value}
              onPress={() => handlePress(time.value, "availableTimes")}
            >
              <Text style={{ color: "#fff" }}>{time.label}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable
          style={styles.button}
          onPress={() => pagerViewRef.current?.setPage(4)}
        >
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
