import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "@/styles/search-style";
import { GetTeachersInput, useGetTeachersQuery } from "@/generated";

type Props = {
  searchInput: GetTeachersInput;
};

export const SearchFifthView = ({ searchInput }: Props) => {
  const { data, loading } = useGetTeachersQuery({
    variables: {
      input: searchInput,
    },
    skip: !searchInput,
  });
  // console.log("data", data);
  return (
    <View style={styles.container} key="5">
      <View style={[styles.content, loading && styles.loadingContainer]}>
        {loading ? (
          <View>
            <Text style={styles.text}>Finding teachers </Text>
            <Text style={styles.text}>who will motivate you!</Text>
            <ActivityIndicator
              size="large"
              color="#fff"
              style={{ marginTop: 30 }}
            />
          </View>
        ) : (
          <View>
            <Text style={styles.text}>teachers will display here!</Text>

            {data?.getTeachers?.length === 0 ? (
              <Text style={styles.text}>no results!</Text>
            ) : (
              <>
                {data?.getTeachers?.map((teacher) => (
                  <View key={teacher?._id}>
                    <Text style={styles.text}>{teacher?.categoryId}</Text>
                    <Text style={styles.text}>{teacher?.subject}</Text>
                    <Text style={styles.text}>{teacher?.price}</Text>
                    <Text style={styles.text}>{teacher?.availableDays}</Text>
                    <Text style={styles.text}>{teacher?.availableTimes}</Text>
                    <Text style={styles.text}>{teacher?.description}</Text>
                  </View>
                ))}
              </>
            )}
          </View>
        )}
      </View>
    </View>
  );
};
