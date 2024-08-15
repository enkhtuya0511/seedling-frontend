"use client";
import React, { useState } from "react";
import { StyleSheet, View, Button } from "react-native";
import CreateProfile from "../../components/CreateProfile";
import SignUp from "../../components/SignUp";
import { StatusBar } from "expo-status-bar";

export default function SignUpPage() {
  const [showCreateProfile, setShowCreateProfile] = useState(true);

  const toggleComponent = () => {
    setShowCreateProfile((prev) => !prev);
  };

  return (
    <View style={styles.body}>
      <StatusBar style="dark" />
      {showCreateProfile ? <CreateProfile /> : <SignUp />}
      <Button
        title={showCreateProfile ? "Go to Sign Up" : "Go to Create Profile"}
        onPress={toggleComponent}
      />
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
