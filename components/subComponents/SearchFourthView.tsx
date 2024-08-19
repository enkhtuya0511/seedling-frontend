import { Pressable, Text, View } from "react-native";
import { GetTeachersInput } from "@/generated";
import { handleData } from "@/utils/services";
import PagerView from "react-native-pager-view";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/search-style";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
  setSearchInput: (arg: GetTeachersInput) => void;
  searchInput: GetTeachersInput;
};

export const SearchFourthView = ({ pagerViewRef, setSearchInput, searchInput }: Props) => {
  return (
    <View style={styles.container} key="5">
      <View style={styles.content}>
        <Pressable
          style={{ width: "100%", paddingLeft: 15 }}
          onPress={() => pagerViewRef.current?.setPage(3)}
        >
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
            onValuesChange={(values) =>handleData(values, "priceRange", setSearchInput)}
            containerStyle={styles.sliderContainer}
            trackStyle={styles.track}
            selectedStyle={styles.selectedTrack}
            markerStyle={styles.marker}
            pressedMarkerStyle={styles.pressedMarker}
          />
          <View style={styles.valuesContainer}>
            <Text style={styles.valueText}>Min: {searchInput?.priceRange.min}</Text>
            <Text style={styles.valueText}>Max: {searchInput?.priceRange.max}</Text>
          </View>
        </View>
        <Pressable
          style={styles.button}
          onPress={() => pagerViewRef.current?.setPage(5)}
        >
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
