import { StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import { GetTeachersInput } from "@/generated";
import PagerView from "react-native-pager-view";
import { SearchZeroView } from "@/components/subComponents/SearchZeroView";
import { SearchFirstView } from "@/components/subComponents/SearchFirstView";
import { SearchSecondView } from "@/components/subComponents/SearchSecondView";
import { SearchThirdView } from "@/components/subComponents/SearchThirdView";
import { SearchFourthView } from "@/components/subComponents/SearchFourthView";
import { SearchFifthView } from "@/components/subComponents/SearchFifthView";

export default function getStarted() {
  const pagerViewRef = useRef<PagerView>(null);
  const [searchInput, setSearchInput] = useState<GetTeachersInput>({
    categoryId: "66c26275a158f892e3d0c567",
    availableDays: [],
    availableTimes: [],
    priceRange: {
      min: "0",
      max: "40000",
    },
  });

  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerViewRef}>
        <SearchZeroView
          onStart={() => {
            pagerViewRef.current?.setPage(1);
          }}
          setSearchInput={setSearchInput}
          searchInput={searchInput}
        />
        <SearchFirstView
          pagerViewRef={pagerViewRef}
          categoryId={searchInput.categoryId}
          setSearchInput={setSearchInput}
        />
        <SearchSecondView
          pagerViewRef={pagerViewRef}
          setSearchInput={setSearchInput}
        />
        <SearchThirdView
          pagerViewRef={pagerViewRef}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <SearchFourthView
          pagerViewRef={pagerViewRef}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
        <SearchFifthView searchInput={searchInput} />
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a21",
    paddingTop: 50,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
  },
});
