import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";

export default function CoursesToExplore() {
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
      <StatusBar style="dark" />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* "Сэдвээр нь судлах" Section */}
        <View style={styles.scrollBox}>
          <View style={styles.titleBox}>
            <Text style={styles.subjectTitle}>Сэдвээр нь судлах</Text>
            <Link href="./courses">
              <Icon name="arrow-right" style={styles.subjectTitle} />
            </Link>
          </View>
          {/* <View style={styles.outerScrollBox}> */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryBox}
          >
            {subjectList.map((subject) => (
              <View style={styles.courseBox} key={subject.id}>
                <Text style={styles.category}>{subject.attributes.name}</Text>
                <Text style={styles.courses}>
                  {subject.attributes.courses} курсууд
                </Text>
              </View>
            ))}
          </ScrollView>
          {/* </View> */}
        </View>

        {/* Other Sections */}
        {otherSections.map((sectionTitle, index) => (
          <View style={styles.otherSection} key={index}>
            <View style={styles.titleBox}>
              <Text style={styles.otherSectionTitle}>{sectionTitle}</Text>
              <Link href="./courses">
                <Icon name="arrow-right" style={styles.subjectTitle} />
              </Link>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryBox}
            >
              {subjectList.map((subject) => (
                <View style={styles.courseBoxOther} key={subject.id}>
                  <Text style={styles.categoryOther}>
                    {subject.attributes.name}
                  </Text>
                  <Text style={styles.coursesOther}>
                    {subject.attributes.courses} курсууд
                  </Text>
                </View>
              ))}
            </ScrollView>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleBox: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    paddingBottom: 80,
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
  courseBox: {
    backgroundColor: "#F6F7FB",
    width: "15%",
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
  //   outerScrollBox: {
  //     backgroundColor: "lime",
  //     width: "100%",
  //   },
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
    // shadowColor: "#334155",
    // shadowOffset: { width: 0, height: 4 },
    // shadowOpacity: 0.25,
    // shadowRadius: 4,
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
