import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/teacherSave-style";

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
          <Link href="./teacher" style={styles.courseBox1} key={subject.id}>
            <View style={styles.courseBox}>
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
            </View>
          </Link>
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
