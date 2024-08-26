import { useCategoriesQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";
import { View } from "react-native";

const Categories = () => {
  const { data } = useCategoriesQuery();
  const { setSearchInput, searchInput } = useSearch();
  return (
    <View style={{ backgroundColor: "#fff", borderRadius: 10 }}>
      {data?.categories && (
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data.categories}
          search
          maxHeight={300}
          labelField="name"
          valueField="_id"
          placeholder="Төрөл сонгох"
          searchPlaceholder="Хайх..."
          value={searchInput.categoryId}
          onChange={(item) => handleData(item._id, "categoryId", setSearchInput)}
        />
      )}
    </View>
  );
};

export default Categories;
