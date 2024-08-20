import { useCategoriesQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";

const Categories = () => {
  const { data } = useCategoriesQuery();
  const { setSearchInput, searchInput } = useSearch();
  return (
    <>
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
          onChange={(item) =>
            handleData(item._id, "categoryId", setSearchInput)
          }
        />
      )}
    </>
  );
};

export default Categories;
