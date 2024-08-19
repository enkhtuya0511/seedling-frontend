import { Pressable, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/search-style";
import PagerView from "react-native-pager-view";
import { useState } from "react";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
  handleData: (arg: any, field: string) => void;
};

export const SearchSecondView = ({ pagerViewRef, handleData }: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
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
              style={[styles.button, selected?.includes(level) && { backgroundColor: "pink" }]}
              key={id}
              onPress={() => {
                // handleData(level, "level");
                setSelected(level);
              }}
            >
              <Text style={{ color: "#fff" }}>{level}</Text>
            </Pressable>
          ))}
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(3)} disabled={!selected}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

const levels = ["Aнхан шат", "Дунд шат", "Aхисан шат"];
