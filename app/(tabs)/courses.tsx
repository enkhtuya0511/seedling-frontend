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
  return (
    <View style={styles.body}>
      <View style={styles.headerBox}>
        <View style={styles.headerBox2}>
          <Link href="./account">
            <Icon name="arrowleft" style={styles.icon} />
          </Link>
          <Text style={styles.text}>Мэдэгдэл</Text>
        </View>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
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
