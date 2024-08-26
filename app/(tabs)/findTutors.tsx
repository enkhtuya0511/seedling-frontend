import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { useCategoriesQuery } from "@/generated";
import { StatusBar } from "expo-status-bar";
import { styles } from "@/styles/findTutors-style";
import { Ionicons, Feather } from "@expo/vector-icons";

import Loading from "@/components/Loading";
import Categories from "@/components/Categories";
import Subjects from "@/components/Subjects";
import Levels from "@/components/Levels";
import AvailableDays from "@/components/AvailableDays";
import AvailableTimes from "@/components/AvailableTimes";
import Price from "@/components/Price";
import SearchResults from "@/components/SearchResults";

export default function App() {
  const { loading } = useCategoriesQuery();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[loading && styles.loadingStyle]}>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.scrollStyle}>
            <View style={styles.headerContainer}>
              <Text style={styles.logo}>🌱</Text>
              <Text style={styles.name}>Seedling</Text>
            </View>
            <View style={styles.filterCon}>
              <Categories />
              <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.filterButton}>
                <Ionicons name="filter-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>

            <Modal visible={modalVisible} animationType="slide" transparent={true}>
              <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.modalCon}>
                  <Pressable onPress={() => setModalVisible(false)}>
                    <Feather name="x" size={30} color="white" />
                  </Pressable>
                  <View style={styles.modalScrollStyle}>
                    <Subjects />
                    <Levels />
                    <AvailableDays />
                    <AvailableTimes />
                    <Price />
                  </View>
                </View>
              </ScrollView>
            </Modal>
            <SearchResults />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
