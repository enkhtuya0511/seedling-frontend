import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import Icon1 from "react-native-vector-icons/AntDesign";
import Octicons from "react-native-vector-icons/Octicons";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      {/* Header */}
      <View style={styles.headerBox}>
        <View style={styles.border}>
          <Icon name="book-reader" style={styles.logo} />
        </View>
        <Text style={styles.name}>TutorHub</Text>
        {/* <View style={styles.iconsBox}>
          <Icon1 name="dots-horizontal-circle-outline" style={styles.logo} />
        </View> */}
      </View>

      <View style={styles.userInfo}>
        <Image
          source="https://res-console.cloudinary.com/dsfypbtbn/thumbnails/transform/v1/image/upload/v1/c2FtcGxlcy9tYW4tcG9ydHJhaXQ=/template_primary"
          style={styles.profilePic}
        />
        <View style={styles.emailAndNameBox}>
          <Text style={styles.Username}>Энхбатын Бат-Од</Text>
          <Text style={styles.UserEmail}>batod825@gmail.com</Text>
        </View>
        <Link href="./personalInfo">
          <Feather name="edit-3" style={styles.edit} />
        </Link>
      </View>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollContent}>
        <Link href="./personalInfo">
          <View style={styles.accountItem}>
            <View style={styles.itemBox}>
              <View style={styles.iconStyle}>
                <Icon name="user" style={styles.size} />
              </View>
              <Text style={styles.itemName}>Хувийн мэдээлэл</Text>
            </View>
            <Icon1 name="right" style={styles.size} />
          </View>
        </Link>
        <Link href="./notification">
          <View style={styles.accountItem}>
            <View style={styles.itemBox}>
              <View style={styles.iconStyle}>
                <Feather name="bell" style={styles.size} />
              </View>
              <Text style={styles.itemName}>Мэдэгдэл</Text>
            </View>
            <Icon1 name="right" style={styles.size} />
          </View>
        </Link>
        <Link href="./Security">
          <View style={styles.accountItem}>
            <View style={styles.itemBox}>
              <View style={styles.iconStyle}>
                <Feather name="shield" style={styles.size} />
              </View>
              <Text style={styles.itemName}>Аюулгүй байдал</Text>
            </View>
            <Icon1 name="right" style={styles.size} />
          </View>
        </Link>
        {/* <Link href="./helpcenter">
          <View style={styles.accountItem}>
            <View style={styles.itemBox}>
              <View style={styles.iconStyle}>
                <Ionicons name="help" style={styles.size} />
              </View>
              <Text style={styles.itemName}>Тусламжийн төв</Text>
            </View>
            <Icon1 name="right" style={styles.size} />
          </View>
        </Link> */}
        <Link href="./homeScreen">
          <View style={styles.accountItem}>
            <View style={styles.itemBox}>
              <View style={styles.iconStyle}>
                <Feather name="log-out" style={styles.size} />
              </View>
              <Text style={styles.itemName}>Гарах</Text>
            </View>
            <Icon1 name="right" style={styles.size} />
          </View>
        </Link>
      </ScrollView>

      {/* Tab Bar */}
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Link href="./homeScreen" style={styles.tab1}>
            <View style={styles.tab1}>
              <Octicons name="home" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
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
        <TouchableOpacity style={styles.tab}>
          <Link href="/account" style={styles.tab1}>
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
  itemName: {
    fontSize: 20,
  },
  size: {
    fontSize: 25,
  },
  iconStyle: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e2e8f0",
    borderRadius: 100,
  },
  itemBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  accountItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  UserEmail: {
    color: "#475569",
  },
  Username: {
    fontSize: 20,
    color: "#334155",
  },
  edit: {
    fontSize: 25,
    color: "#334155",
  },
  emailAndNameBox: {
    width: "70%",
    justifyContent: "space-between",
    height: 50,
  },
  userInfo: {
    position: "absolute",
    top: "12%",
    width: "86%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#e2e8f0",
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: "lime",
  },
  scrollContent: {
    paddingBottom: 80,
    paddingTop: 10,
    width: "100%",
    marginTop: 200,
    paddingHorizontal: "5%",
  },
  subjectTitle: {
    color: "#334155",
    fontSize: 27,
    marginLeft: "5%",
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
  courses: {
    color: "#94a3b8",
    fontSize: 11,
    fontWeight: "500",
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
  // iconsBox: {
  //   flexDirection: "row",
  //   gap: 15,
  //   marginLeft: "45%",
  // },
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
  headerBox: {
    width: "100%",
    paddingHorizontal: "5%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    // paddingBottom: "1%",
    position: "absolute",
    top: "5%",
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
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
