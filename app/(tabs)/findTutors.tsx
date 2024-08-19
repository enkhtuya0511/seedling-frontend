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
  console.log("data", data);

  const { data: subjects, refetch } = useSubjectsByCategoryQuery({
    variables: {
      categoryId: searchInput.categoryId,
    },
    skip: !searchInput.categoryId,
  });

  function handleData(value: any, field: string) {
    if (field !== "priceRange") {
      setSearchInput((prev) => ({ ...prev, [field]: value }));
    } else {
      setSearchInput((prev) => ({
        ...prev,
        priceRange: { max: value[1].toString(), min: value[0].toString() },
      }));
    }
  }

  useEffect(() => {
    if (searchInput.categoryId) {
      refetch();
    }
  }, [searchInput.categoryId, refetch]);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Text>find teachers!</Text>
        <View>
          <Categories handleData={handleData} value={searchInput.categoryId} />
          <MultiSelectComponent
            data={days}
            handleData={handleData}
            placeholder="Өдөр сонгох"
            field="availableDays"
          />
          <MultiSelectComponent
            data={times}
            handleData={handleData}
            placeholder="Цаг сонгох"
            field="availableTimes"
          />
          <Price handleData={handleData} searchInput={searchInput} />
          {subjects?.subjectsByCategory && (
            <Subjects
              handleData={handleData}
              searchInput={searchInput}
              subjects={subjects.subjectsByCategory}
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
      </View>
    </ScrollView>
  );
}
