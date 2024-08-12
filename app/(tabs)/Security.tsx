"use client";
import { StyleSheet, View, Text, Switch } from "react-native";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/AntDesign";
import { useState } from "react";
import Feather from "react-native-vector-icons/Feather";

export default function Profile() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.body}>
      <View style={styles.headerBox}>
        <View style={styles.headerBox2}>
          <Link href="./account">
            <Icon name="arrowleft" style={styles.icon} />
          </Link>
          <Text style={styles.text}>Security</Text>
        </View>
      </View>
      <View style={styles.switchsBox}>
        <View style={styles.switchBox}>
          <Text style={styles.notificationName}>Намайг санаx</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchBox}>
          <Text style={styles.notificationName}>Some kind of text</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchBox}>
          <Text style={styles.notificationName}>Some kind of text</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
        <View style={styles.switchBox}>
          <Text style={styles.notificationName}>Some kind of text</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  notificationName: {
    fontSize: 20,
  },
  switchBox: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontSize: 22,
  },
  switchsBox: {
    width: "90%",
    height: "75%",
    gap: 40,
  },
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
  headerBox: {
    position: "absolute",
    top: "5%",
    display: "flex",
    flexDirection: "row",
    width: "90%",
    height: "auto",
    justifyContent: "space-between",
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
