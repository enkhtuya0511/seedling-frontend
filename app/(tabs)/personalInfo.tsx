"use client";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";

export default function Profile() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <View style={styles.headerBox2}>
          <Link href="./account">
            <Icon name="arrowleft" style={styles.icon} />
          </Link>
          <Text style={styles.text}>Хувийн мэдээлэл</Text>
        </View>
      </View>
      <View style={styles.profilebox}>
        <View style={styles.profilePicBox}>
          <Image
            source="https://res-console.cloudinary.com/dsfypbtbn/thumbnails/transform/v1/image/upload/v1/c2FtcGxlcy9tYW4tcG9ydHJhaXQ=/template_primary"
            style={styles.profilePic}
          />
        </View>
        <View style={styles.profileInfoBox}>
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Бүтэн нэр</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Mэйл хаяг</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Утасны дугаар</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Төрсөн өдөр</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
        </View>
      </View>
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
  rememberMeBox: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  button: {
    width: "80%",
    height: "7%",
    borderRadius: 40,
    backgroundColor: "#334155",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    position: "absolute",
    bottom: "8%",
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
  inputName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  namebox: {
    width: "90%",
  },
  input: {
    width: "90%",
    borderColor: "#334155",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 25,
  },
  profileInfoBox: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    gap: 25,
  },
  profilePicBox: {
    width: "90%",
    height: 120,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#e2e8f0",
    marginBottom: 20,
  },
  profilebox: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
  },
  border: {
    borderColor: "#334155",
    borderWidth: 4,
    borderRadius: 40,
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 35,
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
  profilePic: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 100,
  },
  logo: {
    color: "#334155",
    fontSize: 40,
  },
  body: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
