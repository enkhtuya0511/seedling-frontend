import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import Icon from "react-native-vector-icons/FontAwesome5";

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
        <Text>long text app about</Text>
      </View>
      <View style={styles.btnBox}>
        <TouchableOpacity style={styles.button}>
          <Link href="./signUp" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Link href="./signIn" style={styles.button1}>
            <View style={styles.button1}>
              <Text style={styles.buttonText}>Sign In</Text>
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnBox: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "18%",
    position: "absolute",
    bottom: "10%",
  },
  logo: {
    color: "#334155",
    fontSize: 120,
    position: "absolute",
    top: "25%",
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
  btntext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
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
    backgroundColor: "green",
  },
  tutortbtn: {
    width: "80%",
    height: "40%",
    backgroundColor: "#334155",
    borderRadius: 48,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#334155",
    shadowOpacity: 0.4,
    shadowRadius: 20,
  },
  button: {
    width: "80%",
    height: "40%",
    borderRadius: 40,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  button1: {
    width: 242,
    height: 53,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
});
