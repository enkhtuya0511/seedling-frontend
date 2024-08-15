"use client";
import React from "react";
import { StyleSheet, View } from "react-native";
import CreateProfile from "../../components/CreateProfile";
import SignUp from "../../components/SignUp";
import { StatusBar } from "expo-status-bar";

export default function SignUpPage() {
  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      <CreateProfile></CreateProfile>
      <SignUp></SignUp>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    overflow: "hidden",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
