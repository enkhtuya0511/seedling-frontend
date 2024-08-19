import { ActivityIndicator, Text, View } from "react-native";
import { styles } from "@/styles/search-style";

export const SearchFifthView = () => {
  const loading = true;
  return (
    <View style={styles.container} key="5">
      <View style={[styles.content, loading && styles.loadingContainer]}>
        {loading ? (
          <View>
            <Text style={styles.text}>Finding teachers </Text>
            <Text style={styles.text}>who will motivate you!</Text>
            <ActivityIndicator size="large" color="#fff" style={{ marginTop: 30 }} />
          </View>
        ) : (
          <Text style={styles.text}>teachers will display here!</Text>
        )}
      </View>
    </View>
  );
};
