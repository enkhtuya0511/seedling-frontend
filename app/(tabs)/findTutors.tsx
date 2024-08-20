import { useEffect, useState } from "react";
import {
  GetTeachersInput,
  useGetTeachersQuery,
  useSubjectsByCategoryQuery,
} from "@/generated";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import Categories from "@/components/Categories";
import MultiSelectComponent from "@/components/MultiSelectCom";
import Price from "@/components/Price";
import { days, times } from "@/utils/dummyData";
import { styles } from "@/styles/findTutors-style";
import Subjects from "@/components/Subjects";
import { StatusBar } from "expo-status-bar";

export default function findTutors() {
  const [searchInput, setSearchInput] = useState<GetTeachersInput>({
    categoryId: "66c26275a158f892e3d0c567",
    availableDays: [],
    availableTimes: [],
    priceRange: {
      min: "0",
      max: "40000",
    },
  });

  const { data, loading } = useGetTeachersQuery({
    variables: {
      input: searchInput,
    },
    skip: !searchInput,
  });
  // console.log("data", data);

  const { data: subjects, refetch } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: searchInput.categoryId,
    },
    skip: !searchInput.categoryId,
  });

  useEffect(() => {
    if (searchInput.categoryId) {
      refetch();
    }
  }, [searchInput.categoryId, refetch]);
  return (
    <View style={styles.container}>
        <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollStyle}>
        <Text>find teachers!</Text>
        <View>
          <Categories
            value={searchInput.categoryId}
            setSearchInput={setSearchInput}
          />
          <MultiSelectComponent
            data={days}
            placeholder="Өдөр сонгох"
            field="availableDays"
            setSearchInput={setSearchInput}
          />
          <MultiSelectComponent
            data={times}
            placeholder="Цаг сонгох"
            field="availableTimes"
            setSearchInput={setSearchInput}
          />
          <Price searchInput={searchInput} setSearchInput={setSearchInput} />
          {subjects?.subjectsByCategory && (
            <Subjects
              searchInput={searchInput}
              subjects={subjects.subjectsByCategory}
              setSearchInput={setSearchInput}
            />
          )}
        </View>
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            {data?.getTeachers?.map((teacher, id) => (
              <View key={id}>
                <Text>{teacher?.subject}</Text>
                <Text>{teacher?.price}</Text>
                <Text>{teacher?.description}</Text>
                <Text>{teacher?.availableDays}</Text>
                <Text>{teacher?.availableTimes}</Text>
              </View>
            ))}
          </>
        )}
      </ScrollView>
    </View>
  );
}
