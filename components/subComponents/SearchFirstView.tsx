import { Pressable, Text, View } from "react-native";
import { useState } from "react";
import { GetTeachersInput, useSubjectsByCategoryQuery } from "@/generated";
import { handleData } from "@/utils/services";
import AntDesign from "@expo/vector-icons/AntDesign";
import PagerView from "react-native-pager-view";
import { styles } from "@/styles/search-style";

type Props = {
  pagerViewRef: React.RefObject<PagerView>;
  categoryId: string;
  setSearchInput: (arg: GetTeachersInput) => void;
};

export const SearchFirstView = ({
  pagerViewRef,
  categoryId,
  setSearchInput,
}: Props) => {
  const [selected, setSelected] = useState<string | null>(null);
  const { data } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: categoryId,
    },
  });
  return (
    <View style={styles.container} key="2">
      <View style={styles.content}>
        <Pressable
          style={{ width: "100%", paddingLeft: 15 }}
          onPress={() => pagerViewRef.current?.setPage(0)}
        >
          <AntDesign name="arrowleft" size={24} color="#fff" />
        </Pressable>
        <Text style={{ color: "#fff" }}>
          Which subject do you want to focus on?
        </Text>
        <View style={styles.innerContainer}>
          <Text style={styles.text}>Subjects: </Text>
          {data?.subjectsByCategory && (
            <>
              {data.subjectsByCategory?.map((subject, id) => (
                <Pressable
                  style={[
                    styles.button,
                    selected?.includes(subject) && { backgroundColor: "pink" },
                  ]}
                  key={id}
                  onPress={() => {
                    handleData(subject, "subject", setSearchInput);
                    setSelected(subject);
                  }}
                >
                  <Text style={{ color: "#fff" }}>{subject}</Text>
                </Pressable>
              ))}
            </>
          )}
        </View>
        <Pressable
          style={styles.button}
          onPress={() => pagerViewRef.current?.setPage(2)}
          disabled={!selected}
        >
          <Text style={styles.buttonText}>continue</Text>
        </Pressable>
      </View>
    </View>
  );
};
