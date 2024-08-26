import { useEffect } from "react";
import { useSubjectsByCategoryQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";
import { Pressable, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const Subjects = () => {
  const { searchInput, setSearchInput } = useSearch();
  const { data, refetch } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: searchInput.categoryId,
    },
    skip: !searchInput.categoryId,
  });

  const subjectsData =
    data?.subjectsByCategory?.map((subject: string) => ({
      label: subject,
      value: subject,
    })) || [];

  useEffect(() => {
    if (searchInput.categoryId) {
      refetch();
    }
  }, [searchInput.categoryId, refetch]);
  return (
    <View style={styles.subjectsCon}>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={subjectsData}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Чиглэл сонгох"
        searchPlaceholder="Хайх..."
        value={searchInput.subject}
        onChange={(item) => handleData(item.value, "subject", setSearchInput)}
      />
      <Pressable onPress={() => handleData(null, "subject", setSearchInput)} style={styles.clearButton}>
        <Feather name="x" size={30} color="black" />
      </Pressable>
    </View>
  );
};

export default Subjects;
