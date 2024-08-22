import { useGetTeachersQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { View, Text, ActivityIndicator } from "react-native";

const SearchResults = () => {
  const { searchInput } = useSearch();
  const { data, loading } = useGetTeachersQuery({
    variables: {
      input: searchInput,
    },
    skip: !searchInput,
  });
  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" color="#fff" />
      ) : (
        <>
          {data?.getTeachers?.map((teacher, id) => (
            <View key={id}>
              <Text style={{ color: "#fff" }}>{teacher?.subject}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.price}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.level}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.description}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.availableDays}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.availableTimes}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.tutorId.fullName}</Text>
              <Text style={{ color: "#fff" }}>{teacher?.tutorId.email}</Text>
            </View>
          ))}
        </>
      )}
    </>
  );
};

export default SearchResults;
