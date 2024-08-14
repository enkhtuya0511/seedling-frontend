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
          <Icon1 name="search" style={styles.logo} />
          <Icon1 name="bell" style={styles.logo} />
        </View>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* "Сэдвээр нь судлах" Section */}
        {subjectList.map((subject) => (
          <View style={styles.courseBox1} key={subject.id}>
            <Link href="./teacher" style={styles.courseBox}>
              <Text style={styles.category}>Багш</Text>
              <View style={styles.infoBox}>
                <View style={styles.tutorInfoBox}>
                  <View style={styles.border}>
                    <Icon name="book-reader" style={styles.logo} />
                  </View>
                  <View>
                    <Text style={styles.title}>Tutor Name</Text>
                    <Text>Age: 20</Text>
                  </View>
                </View>
                <View style={styles.gap}>
                  <Text>Сэдэв:</Text>
                  <Text>{subject.attributes.name}</Text>
                </View>
              </View>
            </Link>
          </View>
        ))}
      </ScrollView>

      {/* Tab Bar */}
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
  bottominfoBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gap: {
    gap: 5,
  },
  tutorInfoBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoBox: {
    width: "100%",
    borderColor: "rgb(100 116 139)",
    borderTopWidth: 1,
    gap: 10,
  },
  titleBox: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  scrollBox: {
    width: "100%",
    height: 180,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  otherSection: {
    width: "100%",
    height: 200,
  },
  scrollContent: {
    alignItems: "center",
  },
  subjectTitle: {
    color: "#334155",
    fontSize: 27,
  },
  otherSectionTitle: {
    color: "#334155",
    fontSize: 22,
    marginLeft: "5%",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 15,
  },
  title: {
    color: "#334155",
    fontSize: 20,
  },
  textBox: {
    width: "60%",
    height: "90%",
    gap: 20,
  },
  headerCard: {
    width: "90%",
    height: 150,
    backgroundColor: "#F6F7FB",
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "5%",
    padding: 10,
  },
  courses: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "500",
  },
  courseBox1: {
    width: "90%",
    height: "10%",
    margin: 10,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  courseBox: {
    backgroundColor: "#F6F7FB",
    borderRadius: 20,
    padding: 20,
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: "center",
    gap: 10,
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  courseBoxOther: {
    backgroundColor: "#F6F7FB",
    width: "20%",
    height: "80%",
    margin: 10,
    borderRadius: 20,
    padding: 20,
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: "flex-start",
  },
  category: {
    color: "#334155",
    fontSize: 15,
    fontWeight: "500",
    textAlign: "center",
  },
  categoryOther: {
    color: "#334155",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "center",
  },
  coursesOther: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "400",
  },
  categoryBox: {
    width: "100%",
    height: "100%",
    paddingRight: "5%",
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
    marginLeft: "29%",
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
  },
  name: {
    color: "#334155",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    backgroundColor: "white",
  },
});
