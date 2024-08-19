import PagerView from "react-native-pager-view";
import { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchZeroView } from "@/components/subComponents/SearchZeroView";
import { SearchFirstView } from "@/components/subComponents/SearchFirstView";
import { SearchSecondView } from "@/components/subComponents/SearchSecondView";
import { SearchThirdView } from "@/components/subComponents/SearchThirdView";
import { SearchFourthView } from "@/components/subComponents/SearchFourthView";
import { SearchFifthView } from "@/components/subComponents/SearchFifthView";
import { GetTeachersInput } from "@/generated";

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

  const handlePress = (label: string, field: keyof GetTeachersInput) => {
    setSearchInput((prev) => {
      const currentFieldArray = (prev[field] || []) as string[];
      if (currentFieldArray?.includes(label))
        return {
          ...prev,
          [field]: currentFieldArray.filter((item) => item !== label),
        };
      else return { ...prev, [field]: [...currentFieldArray, label] };
    });
  };

  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerViewRef}>
        <SearchZeroView
          onStart={() => {
            pagerViewRef.current?.setPage(1);
          }}
          handleData={handleData}
        />
        <SearchFirstView
          pagerViewRef={pagerViewRef}
          categoryId={searchInput.categoryId}
          handleData={handleData}
        />
        <SearchSecondView pagerViewRef={pagerViewRef} handleData={handleData} />
        <SearchThirdView
          pagerViewRef={pagerViewRef}
          handlePress={handlePress}
          searchInput={searchInput}
        />
        <SearchFourthView
          pagerViewRef={pagerViewRef}
          handleData={handleData}
          searchInput={searchInput}
        />
        <SearchFifthView searchInput={searchInput}/>
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
