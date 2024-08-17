import PagerView from "react-native-pager-view";
import { useRef } from "react";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";
import { FirstView } from "@/components/subComponents/FirstView";
import { SecondView } from "@/components/subComponents/SecondView";

export default function HomeScreen() {
  const pagerViewRef = useRef<PagerView>(null);
  const loginHandler = () => {
    router.push("/signIn");
  };
  const registerHandler = () => {
    router.push("/signUp");
  };

  return (
    <View style={styles.container}>
      <PagerView style={styles.pagerView} initialPage={0} ref={pagerViewRef}>
        <View style={styles.page}>
          <FirstView
            onStart={() => {
              pagerViewRef.current?.setPage(1);
            }}
          />
        </View>
        <View style={styles.page}>
          <SecondView onLogin={loginHandler} onRegister={registerHandler} />
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a21",
  },
  pagerView: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
  },
});
