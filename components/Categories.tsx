import { GetTeachersInput, useCategoriesQuery } from "@/generated";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";
import { handleData } from "@/utils/services";

type Props = {
  value: string;
  setSearchInput: (arg: GetTeachersInput) => void;
};

const Categories = ({ value, setSearchInput }: Props) => {
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
          value={value}
          onChange={(item) => handleData(item._id, "categoryId", setSearchInput)}
        />
      )}
    </>
  );
};

export default Categories;
