import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const subjectList = [
    { id: 1, attributes: { name: "Шинжлэх ухаан", courses: "32" } },
    { id: 2, attributes: { name: "Математик", courses: "61" } },
    { id: 3, attributes: { name: "Нийгмийн судлал", courses: "25" } },
    { id: 4, attributes: { name: "Урлаг", courses: "17" } },
    { id: 5, attributes: { name: "Түүх", courses: "19" } },
    { id: 6, attributes: { name: "Хөгжим", courses: "12" } },
    { id: 7, attributes: { name: "Гадаад хэл", courses: "53" } },
    {
      id: 8,
      attributes: { name: "Компьютерийн шинжлэх ухаан", courses: "20" },
    },
  ];

  const otherSections = [
    "Өдөр тутмын курсууд",
    "Математик",
    "Түүх",
    "Хөгжим",
    "Гадаад хэл",
    "Нийгмийн судлал",
  ];

  return (
    <View style={styles.body}>
      <StatusBar style="light" />
      {/* Header */}
      <View style={styles.headerBox}>
        <View style={styles.border}>
          <Icon name="book-reader" style={styles.logo} />
        </View>
        <Text style={styles.name}>TutorHub</Text>
        <View style={styles.iconsBox}>
          <Icon1 name="bell" style={styles.logo} />
        </View>
      </View>
      <View style={styles.teacherInfo}>
        <View style={styles.teacherInfohaederbox}>
          <View style={styles.tutorPic}></View>
          <View style={styles.infobox}>
            <Text style={styles.titleText}>Багшийн нэр:</Text>
            <Text style={styles.info}>John Paul</Text>
            <Text style={styles.titleText}>Төрсөн огноо</Text>
            <Text style={styles.info}>2000/8/25</Text>
            <Text style={styles.titleText}>Сэдэв:</Text>
            <Text style={styles.info}>Математик</Text>
          </View>
        </View>
        <View style={styles.teacherText}>
          <Text>some type of text</Text>
        </View>
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Link href="/homeScreen" style={styles.tab1}>
            <View style={styles.tab1}>
              <Octicons name="home" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Link href="./teacherSave" style={styles.tab1}>
            <View style={styles.tab1}>
              <Feather name="bookmark" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./exploreCourses" style={styles.tab1}>
            <View style={styles.tab1}>
              <Feather name="book" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./account" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="user" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  teacherText: {
    width: "100%",
  },
  infobox: {
    gap: 5,
    justifyContent: "center",
  },
  info: {
    fontSize: 20,
    fontWeight: "600",
  },
  titleText: {
    fontSize: 15,
  },
  tutorPic: {
    width: "38%",
    height: "100%",
    borderWidth: 2,
    borderColor: "black",
  },
  teacherInfohaederbox: {
    width: "100%",
    height: "22%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  teacherInfo: {
    width: "90%",
    height: "80%",
    gap: 20,
  },
  tab1: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    color: "#334155",
    fontSize: 25,
  },
  tabBarIcon1: {
    color: "#334155",
    fontSize: 25,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",
    borderBottomWidth: 3,
  },
  tabBar: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#334155",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
    zIndex: 10,
  },
  iconsBox: {
    flexDirection: "row",
    gap: 15,
    marginLeft: "40%",
  },
  border: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",
    borderRadius: 100,
    borderWidth: 4,
  },
  logo: {
    color: "#334155",
    fontSize: 30,
  },
  border1: {
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",

    borderRadius: 100,
    borderWidth: 5,
  },
  logo1: {
    color: "#334155",
    fontSize: 80,
  },
  headerBox: {
    width: "100%",
    paddingHorizontal: "5%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "1%",
    marginTop: "10%",
    gap: 10,
    marginBottom: "3%",
  },
  name: {
    color: "#334155",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});
