import { useEffect } from "react";
import { useSubjectsByCategoryQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { handleData } from "@/utils/services";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";
import { ActivityIndicator } from "react-native";

const Subjects = () => {
  const { searchInput, setSearchInput } = useSearch();
  const { data, refetch, loading } = useSubjectsByCategoryQuery({
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
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
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
      )}
    </>
  );
};

export default Subjects;
