import { StyleSheet, View, Text } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import { StatusBar } from "expo-status-bar";
import SubjectCard from "../../components/SubjectCard";

export default function Subject() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <View style={styles.headerBox2}>
          <Link href="./courses">
            <Icon name="arrowleft" style={styles.icon} />
          </Link>
          <Text style={styles.text}>Subject name goes here</Text>
        </View>
      </View>
      <SubjectCard></SubjectCard>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollBox: {
    marginTop: "25%",
    width: "100%",
  },
  courseContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: "5%",
  },
  category: {
    color: "#334155",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  courses: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "500",
  },
  courseBox: {
    backgroundColor: "#F6F7FB",
    width: "100%",
    height: "100%",
    padding: 15,
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: "center",
    borderRadius: 20,
  },
  courseBox1: {
    width: "48%",
    height: "8%",
    marginBottom: 20,
  },
  headerBox2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  text: {
    fontSize: 25,
  },
  icon: {
    fontSize: 30,
  },
  headerBox: {
    position: "absolute",
    top: "5%",
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "auto",
    justifyContent: "space-between",
    zIndex: 1,
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
