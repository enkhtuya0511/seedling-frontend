import { useCategoriesQuery } from "@/generated";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "@/components/Categories";
import Price from "@/components/Price";
import Subjects from "@/components/Subjects";
import SearchResults from "@/components/SearchResults";
import Loading from "@/components/Loading";
import AvailableTimes from "@/components/AvailableTimes";
import AvailableDays from "@/components/AvailableDays";
import { styles } from "@/styles/findTutors-style";

export default function findTutors() {
  const { loading } = useCategoriesQuery();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[loading && styles.loadingStyle]}
      >
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.scrollStyle}>
            <Categories />
            <AvailableDays />
            <AvailableTimes />
            <Price />
            <Subjects />
            <SearchResults />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
