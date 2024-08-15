import { View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/Fontisto";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/teacherSave-style";
import TeacherdataCard from "../../components/TeacherDataCard";

export default function SavedTeachers() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
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

      <TeacherdataCard></TeacherdataCard>

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
