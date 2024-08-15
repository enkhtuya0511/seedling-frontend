"use client";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useRouter } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: "Your Full Name",
          email,
          phoneNumber: "Your Phone Number",
          password,
        }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message);
      }

      router.push("./homeScreen");
    } catch (error: any) {
      setError(error.message || "Failed to sign up");
    }
  };

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
        <View style={styles.profileInfoBox}>
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Имэйл</Text>
          </View>
          <TextInput
            placeholder="Имэйл"
            placeholderTextColor={"gray"}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Утасны дугаар</Text>
          </View>
          <TextInput
            placeholder="Oруулах"
            placeholderTextColor={"gray"}
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Нууц үг</Text>
          </View>
          <TextInput
            placeholder="Нууц үг"
            placeholderTextColor={"gray"}
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.namebox}>
            <Text style={styles.inputName}>Нууц үгээ батлаx</Text>
          </View>
          <TextInput
            placeholder="Нууц үгээ батлаx"
            placeholderTextColor={"gray"}
            style={styles.input}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          {/* <View style={styles.rememberMeBox}>
            <Checkbox
              value={isChecked}
              onValueChange={setChecked}
              color={isChecked ? "#334155" : undefined}
            />
            <Text>Намайг санаx</Text>
          </View> */}
          {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Бүртгүүлэх</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    color: "#334155",
    fontSize: 40,
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
  inputName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  namebox: {
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
  buttonText: {
    fontWeight: "700",
    fontSize: 20,
    color: "white",
  },
  input: {
    width: "90%",
    borderColor: "#334155",
    borderBottomWidth: 1,
    height: 40,
    fontSize: 22,
  },
  profileInfoBox: {
    width: "100%",
    height: "auto",
    alignItems: "center",
    gap: 20,
  },
  profilebox: {
    width: "100%",
    height: "70%",
    display: "flex",
    alignItems: "center",
    gap: 40,
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
  body: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  error: {
    color: "red",
    marginTop: 10,
  },
});
