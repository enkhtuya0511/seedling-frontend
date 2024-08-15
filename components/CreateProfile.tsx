"use client";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import Checkbox from "expo-checkbox";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import Icon1 from "react-native-vector-icons/Feather";
import { Image } from "expo-image";

export default function CreateProfile() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <View style={styles.border}>
          <Icon name="book-reader" style={styles.logo} />
        </View>
        <Text style={styles.headerText}>Бүртгэл үүсгэх</Text>
      </View>
      <View style={styles.profilebox}>
        <View style={styles.profilePicBox}>
          <Image
            source="https://res-console.cloudinary.com/dsfypbtbn/thumbnails/transform/v1/image/upload/v1/c2FtcGxlcy9tYW4tcG9ydHJhaXQ=/template_primary"
            style={styles.profilePic}
          />
          <TouchableOpacity style={styles.editbox}>
            <Icon1 name="edit-2" style={styles.edit} />
          </TouchableOpacity>
        </View>
        <View style={styles.profileInfoBox}>
          <TextInput
            placeholder="Бүтэн нэр"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <TextInput
            placeholder="Утасны дугаар"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <TextInput
            placeholder="Төрсөн өдөр"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <View style={styles.rememberMeBox}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#334155" : undefined}
            />
            <Text>Намайг санаx</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href="./signUp" style={styles.button1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Бүртгүүлэх</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  editbox: {
    borderRadius: 40,
    borderColor: "black",
    borderWidth: 2,
    padding: 2,
    marginLeft: 60,
  },
  edit: {
    fontSize: 14,
  },
  box: {
    width: "90%",
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
    height: 50,
    fontSize: 25,
    paddingHorizontal: 10,
  },
  profileInfoBox: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    gap: 20,
  },
  profilePicBox: {
    width: "100%",
    height: 100,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  profilebox: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    gap: 40,
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
    gap: 10,
    width: "100%",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePic: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 100,
    backgroundColor: "lime",
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
