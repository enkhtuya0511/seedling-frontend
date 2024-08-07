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
  return (
    <View style={styles.body}>
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
      <View style={styles.headerCard}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Өдөр тутмын курсууд</Text>
          <Text style={styles.subtitle}>
            Өөрт хэрэгтэй хичээлээ хайж олоод заавал хамрагдаарай
          </Text>
        </View>
        <View style={styles.border1}>
          <Icon name="book-reader" style={styles.logo1} />
        </View>
      </View>
      <Text style={styles.subjectTitle}>Сэдвээр нь судлах</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBox}
      >
        {subjectList.map((subject) => (
          <View style={styles.courseBox}>
            {/* <View style={styles.textBox}> */}
            <Text style={styles.category}>{subject.attributes.name}</Text>
            <Text style={styles.courses}>
              {subject.attributes.courses} курсууд
            </Text>
            {/* </View> */}
            {/* <View style={styles.border}>
              <Icon name="book-reader" style={styles.logo} />
            </View> */}
          </View>
        ))}
      </ScrollView>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Link href="./home" style={styles.tab1}>
            <View style={styles.tab1}>
              <Octicons name="home" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./order" style={styles.tab1}>
            <View style={styles.tab1}>
              <Feather name="shopping-cart" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./favorite" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="heart" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./profile" style={styles.tab1}>
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
  subjectTitle: {
    color: '"#334155',
    fontSize: 27,
    position: "absolute",
    top: "34%",
    left: "5%",
  },
  subtitle: {
    color: "#94a3b8",
    fontSize: 15,
  },
  title: {
    color: '"#334155',
    fontSize: 20,
  },
  textBox: {
    width: "60%",
    height: "90%",
    gap: 20,
  },
  headerCard: {
    width: "90%",
    height: "20%",
    backgroundColor: "#F6F7FB",
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 }, // Only a vertical shadow
    shadowOpacity: 0.4,
    shadowRadius: 4,
    borderRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "12%",
    display: "flex",
    flexDirection: "row",
    padding: "5%",
  },
  //   textBox: {
  //     gap: 5,
  //   },
  courses: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "500",
  },
  courseBox: {
    backgroundColor: "#F6F7FB",
    width: "15%",
    height: "80%",
    margin: 10,
    borderRadius: 20,
    padding: 20,
    // display: "flex",
    // flexDirection: "row",
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 }, // Only a vertical shadow
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  category: {
    color: "#334155",
    fontSize: 15,
    fontWeight: "500",
  },
  categoryBox: {
    width: "100%",
    height: "14%",
    position: "absolute",
    top: "38%",
    paddingHorizontal: "3%",
  },
  tab1: {
    width: 10,
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
    width: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",
    borderBottomWidth: 3,
  },
  tabBar: {
    width: "100%",
    height: "8%",
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    shadowColor: "#334155",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  iconsBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    top: "5%",
    shadowColor: "#334155",
    shadowOffset: { width: 0, height: 4 }, // Only a vertical shadow
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  name: {
    color: "#334155",
    fontSize: 30,
    fontWeight: "bold",
  },
  body: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
