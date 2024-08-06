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
import Icon from "react-native-vector-icons/FontAwesome";

export default function Student() {
  const [fontsLoaded] = useFonts({
    Playwrite: require("@/assets/fonts/Playwrite.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.body}>
      <Icon name="stack-overflow" style={styles.logo} />
      <View style={styles.inputBox}>
        <TextInput placeholder="First Name" style={styles.input} />
        <TextInput placeholder="Last Name" style={styles.input} />
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    width: "100%",
    height: "40%",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  input: {
    width: "90%",
    height: "15%",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 40,
    padding: 10,
  },
  logo: {
    color: "orange",
    fontSize: 80,
    position: "absolute",
    top: "20%",
  },
  body: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
