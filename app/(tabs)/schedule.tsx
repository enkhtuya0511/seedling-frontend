import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { Link } from "expo-router";
import Icon from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";
import Icon1 from "react-native-vector-icons/Fontisto";
import Feather from "react-native-vector-icons/Feather";
import { StatusBar } from "expo-status-bar";

const CalendarScreen = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [schedules, setSchedules] = useState<{
    [key: string]: { marked: boolean; dotColor: string };
  }>({});
  const [modalVisible, setModalVisible] = useState(false);
  const [newSchedule, setNewSchedule] = useState("");

  const onDayPress = (day: any) => {
    setSelectedDate(day.dateString);
    setModalVisible(true);
  };

  const addSchedule = () => {
    setSchedules({
      ...schedules,
      [selectedDate]: { marked: true, dotColor: "red" },
    });
    setModalVisible(false);
    setNewSchedule("");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.headerBox}>
        <View style={styles.border}>
          <Icon name="book-reader" style={styles.logo} />
        </View>
        <Text style={styles.name}>TutorHub</Text>
        <View style={styles.iconsBox}>
          <Icon1 name="search" style={styles.logo} />
          <Icon1 name="bell" style={styles.logo} />
        </View>
      </View>
      <Calendar
        onDayPress={onDayPress}
        markedDates={schedules}
        theme={{
          selectedDayBackgroundColor: "#00adf5",
          todayTextColor: "#00adf5",
        }}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text>Add Schedule for {selectedDate}</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter schedule"
              value={newSchedule}
              onChangeText={setNewSchedule}
            />
            <Button title="Add" onPress={addSchedule} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Link href="./homeScreen" style={styles.tab1}>
            <View style={styles.tab1}>
              <Octicons name="home" style={styles.tabBarIcon1} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Link href="/schedule" style={styles.tab1}>
            <View style={styles.tab1}>
              <Feather name="calendar" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./exploreCourses" style={styles.tab1}>
            <View style={styles.tab1}>
              <Feather name="book" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
        <TouchableOpacity>
          <Link href="./account" style={styles.tab1}>
            <View style={styles.tab1}>
              <Icon name="user" style={styles.tabBarIcon} />
            </View>
          </Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: "#334155",
    fontSize: 30,
    fontWeight: "bold",
  },
  iconsBox: {
    flexDirection: "row",
    gap: 15,
    marginLeft: "29%",
  },
  border: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",
    borderRadius: 100,
    borderWidth: 4,
  },
  logo: {
    color: "#334155",
    fontSize: 30,
  },
  headerBox: {
    width: "100%",
    paddingHorizontal: "5%",
    height: "auto",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: "1%",
    marginTop: "10%",
    gap: 10,
  },
  tab1: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBarIcon: {
    color: "#334155",
    fontSize: 25,
  },
  tabBarIcon1: {
    color: "#334155",
    fontSize: 25,
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#334155",
    borderBottomWidth: 3,
  },
  tabBar: {
    width: "100%",
    height: 60,
    position: "absolute",
    bottom: 0,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    shadowColor: "#334155",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 4,
    zIndex: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default CalendarScreen;
