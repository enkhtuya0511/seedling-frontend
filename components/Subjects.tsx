import { GetTeachersInput } from "@/generated";
import { Dropdown } from "react-native-element-dropdown";
import { styles } from "@/styles/findTutors-style";

type Props = {
  searchInput: GetTeachersInput;
  handleData: (arg: any, field: string) => void;
  subjects: string[];
};

const Subjects = ({ handleData, searchInput, subjects }: Props) => {
  const subjectsData =
    subjects?.map((subject) => ({
      label: subject,
      value: subject,
    })) || [];
  return (
    <>
      {subjectsData && (
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
          onChange={(item) => handleData(item.value, "subject")}
        />
      )}
    </>
  );
};

export default Subjects;
