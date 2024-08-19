import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/search-style";
import PagerView from "react-native-pager-view";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
};

export const SearchFourthView = ({ pagerViewRef }: Props) => {
  const [priceRange, setRange] = useState<number[]>([0, 40000]);
  return (
    <View style={styles.container} key="5">
      <View style={styles.content}>
        <Pressable style={{ width: "100%", paddingLeft: 15 }} onPress={() => pagerViewRef.current?.setPage(3)}>
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.text}>What's your budget for per lesson?</Text>
        <View style={styles.innerContainer}>
          <MultiSlider
            isMarkersSeparated={true}
            values={[0, 40000]}
            min={0}
            max={40000}
            step={1}
            onValuesChange={(values) => setRange(values)}
            containerStyle={styles.sliderContainer}
            trackStyle={styles.track}
            selectedStyle={styles.selectedTrack}
            markerStyle={styles.marker}
            pressedMarkerStyle={styles.pressedMarker}
          />
          <View style={styles.valuesContainer}>
            <Text style={styles.valueText}>Min: {priceRange[0]}</Text>
            <Text style={styles.valueText}>Max: {priceRange[1]}</Text>
          </View>
        </View>
        <Pressable style={styles.button} onPress={() => pagerViewRef.current?.setPage(5)}>
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
