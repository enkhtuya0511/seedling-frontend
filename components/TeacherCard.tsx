import { View, Text, ScrollView } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import { styles } from "@/styles/teacherSave-style";

export default function TeacherdataCard() {
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
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
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
    </View>
  );
}
