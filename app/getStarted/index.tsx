import { StyleSheet, View } from "react-native";
import { useRef } from "react";
import PagerView from "react-native-pager-view";
import { SearchZeroView } from "@/components/subComponents/SearchZeroView";
import { SearchFirstView } from "@/components/subComponents/SearchFirstView";
import { SearchSecondView } from "@/components/subComponents/SearchSecondView";
import { SearchThirdView } from "@/components/subComponents/SearchThirdView";
import { SearchFourthView } from "@/components/subComponents/SearchFourthView";
import { SearchFifthView } from "@/components/subComponents/SearchFifthView";

export default function getStarted() {
  const pagerViewRef = useRef<PagerView>(null);
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0} ref={pagerViewRef}>
        <SearchZeroView pagerViewRef={pagerViewRef} />
        <SearchFirstView pagerViewRef={pagerViewRef} />
        <SearchSecondView pagerViewRef={pagerViewRef} />
        <SearchThirdView pagerViewRef={pagerViewRef} />
        <SearchFourthView pagerViewRef={pagerViewRef} />
        <SearchFifthView />
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
