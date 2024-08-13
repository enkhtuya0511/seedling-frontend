import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";
import { blue } from "react-native-reanimated/lib/typescript/reanimated2/Colors";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.body}>
      <Icon name="book-reader" style={styles.logo} />
      <View style={styles.textBox1}>
        <Text style={styles.textbox}>Tutorhub-д тавтай</Text>
        <Text style={styles.textbox}>морил</Text>
      </View>
      <TouchableOpacity style={styles.tutortbtn}>
        <Link href="./profile" style={styles.studentbtn1}>
          <View style={styles.studentbtn2}>
            <Text style={styles.btntext}>Эхэлцгээе</Text>
          </View>
        </Link>
      </TouchableOpacity>
      <TouchableOpacity style={styles.tutortbtn1}>
        <Link href="./signIn" style={styles.studentbtn1}>
          <View style={styles.studentbtn2}>
            <Text style={styles.btntext1}>Нэвтрэх</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: "#334155",
    fontSize: 90,
    position: "absolute",
    top: "30%",
  },
  textBox1: {
    position: "absolute",
    top: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    fontFamily: "sans-serif",
    fontSize: 40,
    color: "#334155",
  },
  btntext1: {
    color: "#334155",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: "2%",
  },
  btntext: {
    color: "white",
    fontSize: 20,
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
  studentbtn1: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  studentbtn2: {
    width: "320%",
    height: "100%",
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  tutortbtn: {
    width: "80%",
    height: "7%",
    backgroundColor: "#334155",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "20%",
  },
  tutortbtn1: {
    width: "80%",
    height: "7%",
    backgroundColor: "rgb(232, 233, 235)",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
  },
});
