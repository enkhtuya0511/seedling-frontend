import React, { useState } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { MultiSelect } from "react-native-element-dropdown";
import { availableType } from "@/utils/dummyData";
import { styles } from "@/styles/MultiSelect-style";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  data: availableType[];
  placeholder: string;
  field: string;
};

const MultiSelectComponent = ({ data, placeholder, field }: Props) => {
  const [selected, setSelected] = useState<string[]>([]);
  const { setSearchInput } = useSearch();

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
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={selected}
        search
        searchPlaceholder="Хайх..."
        onChange={(item) => {
          handleData(item, field, setSearchInput);
          setSelected(item);
        }}
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

export default MultiSelectComponent;


