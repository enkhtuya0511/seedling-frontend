import { Text, View } from "react-native";
import { GetTeachersInput } from "@/generated";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { styles } from "@/styles/findTutors-style";
import { handleData } from "@/utils/services";

type Props = {
  searchInput: GetTeachersInput;
  setSearchInput: (arg: GetTeachersInput) => void;
};

const Price = ({ searchInput, setSearchInput }: Props) => {
  return (
    <>
      <MultiSlider
        isMarkersSeparated={true}
        values={[0, 40000]}
        min={0}
        max={40000}
        step={1000}
        onValuesChange={(values) => handleData(values, "priceRange", setSearchInput)}
        containerStyle={styles.sliderContainer}
        trackStyle={styles.track}
        selectedStyle={styles.selectedTrack}
        markerStyle={styles.marker}
        pressedMarkerStyle={styles.pressedMarker}
      />
      <View style={styles.valuesContainer}>
        <Text style={styles.valueText}>Min: {searchInput.priceRange?.min}</Text>
        <Text style={styles.valueText}>Max: {searchInput.priceRange?.max}</Text>
      </View>
    </>
  );
};

export default Price;
