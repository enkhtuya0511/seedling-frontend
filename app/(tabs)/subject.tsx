import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";

export default function HomeScreen() {
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
    { id: 9, attributes: { name: "Физик", courses: "29" } },
    { id: 10, attributes: { name: "Хими", courses: "33" } },
    { id: 11, attributes: { name: "Биологи", courses: "28" } },
    { id: 12, attributes: { name: "Экономикс", courses: "22" } },
    { id: 13, attributes: { name: "Хууль зүй", courses: "18" } },
    { id: 14, attributes: { name: "Инженерчлэл", courses: "30" } },
    { id: 15, attributes: { name: "Спорт", courses: "14" } },
    { id: 16, attributes: { name: "Сэтгэл судлал", courses: "27" } },
    { id: 17, attributes: { name: "Геологи", courses: "21" } },
    { id: 18, attributes: { name: "Удирдлага", courses: "26" } },
    { id: 19, attributes: { name: "Экологи", courses: "16" } },
    { id: 20, attributes: { name: "Анагаах ухаан", courses: "24" } },
    { id: 21, attributes: { name: "Уран зохиол", courses: "19" } },
    { id: 22, attributes: { name: "Социологи", courses: "21" } },
    { id: 23, attributes: { name: "Археологи", courses: "14" } },
    { id: 24, attributes: { name: "Газар зүй", courses: "20" } },
    { id: 25, attributes: { name: "Нийгмийн эрүүл мэнд", courses: "18" } },
    { id: 26, attributes: { name: "Астрономи", courses: "12" } },
    { id: 27, attributes: { name: "Философи", courses: "15" } },
    { id: 28, attributes: { name: "Антропологи", courses: "13" } },
  ];

  return (
    <View style={styles.body}>
      <View style={styles.headerBox}>
        <View style={styles.headerBox2}>
          <Link href="./account">
            <Icon name="arrowleft" style={styles.icon} />
          </Link>
          <Text style={styles.text}>Subject name goes here</Text>
        </View>
      </View>
      <ScrollView style={styles.scrollBox} showsVerticalScrollIndicator={false}>
        <View style={styles.courseContainer}>
          {subjectList.map((subject) => (
            <Link href="./subject" style={styles.courseBox1}>
              <View style={styles.courseBox} key={subject.id}>
                <Text style={styles.category}>{subject.attributes.name}</Text>
                <Text style={styles.courses}>
                  {subject.attributes.courses} курсууд
                </Text>
              </View>
            </Link>
          ))}
        </View>
      </ScrollView>
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
  },
  body: {
    flex: 1,
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
