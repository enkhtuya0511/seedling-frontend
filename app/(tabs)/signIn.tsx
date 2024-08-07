"use client";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import { TextInput } from "react-native-gesture-handler";
import Checkbox from "expo-checkbox";
import { useState } from "react";

export default function Profile() {
  const [isChecked, setChecked] = useState(false);
  return (
    <View style={styles.body}>
      <View style={styles.headerBox}>
        <View style={styles.logoBorder}>
          <Icon name="book-reader" style={styles.logo} />
        </View>
        <View style={styles.headerwordBox}>
          <Text style={styles.headerText}>Cайн уу</Text>
          <Text>Нэвтрэхийн тулд мэйл хаяг, нууц </Text>
          <Text>үгээ оруулна уу</Text>
        </View>
      </View>
      <View style={styles.profilebox}>
        <View style={styles.profileInfoBox}>
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Mэйл хаяг</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Hууц үг</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
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
        <Link href="./fotgotPassword">
          <Text style={styles.forgotpw}>Нууц үгээ мартсан</Text>
        </Link>
      </View>
      <TouchableOpacity style={styles.button}>
        <Link href="./homeScreen" style={styles.button1}>
          <View style={styles.button1}>
            <Text style={styles.buttonText}>Нэвтрэх</Text>
          </View>
        </Link>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  forgotpw: {
    color: "#334155",
    fontSize: 20,
  },
  logoBorder: {
    width: 80,
    height: 80,
    borderColor: "#334155",
    borderRadius: 100,
    borderWidth: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  headerBox: {
    position: "absolute",
    top: "5%",
    width: "90%",
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    gap: 20,
  },
  profilePicBox: {
    width: "100%",
    height: 100,
    alignItems: "center",
  },
  profilebox: {
    width: "100%",
    height: "50%",
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
  headerwordBox: {
    gap: 5,
    width: "76%",
    // height: "auto",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  profilePic: {
    width: 100,
    height: 100,
    position: "absolute",
    borderRadius: 100,
  },
  logo: {
    color: "#334155",
    fontSize: 60,
    position: "absolute",
    top: "5%",
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
