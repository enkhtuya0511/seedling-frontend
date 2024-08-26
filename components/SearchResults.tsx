import { useGetTeachersQuery } from "@/generated";
import { useSearch } from "@/contexts/SearchProvider";
import { ActivityIndicator } from "react-native";
import TeacherCard from "./TeacherCard";

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
            <TeacherCard course={teacher} key={id} />
          ))}
        </>
      )}
    </>
  );
};

export default SearchResults;
