import {
  Image,
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.body}>
      <View style={styles.textBox1}>
        <Text style={styles.textbox}>Welcoeme to</Text>
        <Text style={styles.textbox}>TutorHub</Text>
        <Text> hola</Text>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity style={styles.studentbtn}>
          <Text style={styles.btntext}>Student</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tutortbtn}>
          <Text style={styles.btntext}>Tutor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.orBox}>
        <Text style={styles.styleText}>Or</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textBox1: {
    position: "absolute",
    top: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  textbox: {
    fontFamily: "Playwrite",
    fontSize: 30,
    color: "orange",
  },
  styleText: {
    fontSize: 15,
  },
  orBox: {
    position: "absolute",
    backgroundColor: "white",
    bottom: "17.5%",
  },
  btntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonBox: {
    width: "100%",
    height: "17%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: "10%",
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  studentbtn: {
    width: "70%",
    height: "38%",
    backgroundColor: "orange",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  tutortbtn: {
    width: "70%",
    height: "38%",
    backgroundColor: "orange",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
  },
});
