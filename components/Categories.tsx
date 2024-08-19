import { useCategoriesQuery } from "@/generated";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";

type Props = {
  value: string;
  handleData: (arg: any, field: string) => void;
};

const Categories = ({ value, handleData }: Props) => {
  const { data } = useCategoriesQuery();
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
          //   value={searchInput.categoryId}
          value={value}
          //   onChange={(item) => setSearchInput((prev) => ({ ...prev, categoryId: item._id }))}
          onChange={(item) => handleData(item, "categoryId")}
        />
      )}
    </>
  );
};

export default Categories;
