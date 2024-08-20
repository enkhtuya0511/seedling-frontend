import { View, TouchableOpacity, Text } from "react-native";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { MultiSelect } from "react-native-element-dropdown";
import { times } from "@/utils/dummyData";
import { styles } from "@/styles/MultiSelect-style";
import AntDesign from "@expo/vector-icons/AntDesign";

const AvailableTimes = () => {
  const { setSearchInput, searchInput } = useSearch();
  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.selectedTextStyle}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <MultiSelect
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={times}
        labelField="label"
        valueField="value"
        placeholder="Цаг сонгох"
        value={searchInput.availableTimes}
        search
        searchPlaceholder="Хайх..."
        onChange={(item) => handleData(item, "availableTimes", setSearchInput)}
        renderItem={renderItem}
        renderSelectedItem={(item, unSelect) => (
          <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
            <View style={styles.selectedStyle}>
              <Text style={styles.textSelectedStyle}>{item.label}</Text>
              <AntDesign color="black" name="delete" size={17} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AvailableTimes;
