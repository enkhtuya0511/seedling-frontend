// import Resume from "@/components/teacher/Resume";
// import React, { useState } from "react";
// import { View, Text, Button, Modal, TouchableOpacity, FlatList } from "react-native";

// const teachersData = [
//   { id: "1", name: "Thina O.", price: 15, native: true, professional: true },
//   { id: "2", name: "Keziah T.", price: 4, native: false, professional: false },
//   // More teachers...
// ];

// export default function App() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [filteredTeachers, setFilteredTeachers] = useState(teachersData);

//   // Initial filter options
//   const [filters, setFilters] = useState({
//     price: [1, 40],
//     native: false,
//     superTutor: false,
//     professional: false,
//   });

//   const applyFilters = () => {
//     let filteredData = teachersData.filter((teacher) => {
//       return (
//         teacher.price >= filters.price[0] &&
//         teacher.price <= filters.price[1] &&
//         (!filters.native || teacher.native) &&
//         (!filters.professional || teacher.professional)
//       );
//     });

//     setFilteredTeachers(filteredData);
//     setModalVisible(false); // Hide the filter modal after applying
//   };

//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       {/* Header */}
//       <Text style={{ fontSize: 24 }}>Online English tutors & teachers</Text>

//       {/* Filter Button */}
//       <TouchableOpacity onPress={() => setModalVisible(true)}>
//         <Text>English</Text>
//       </TouchableOpacity>

//       {/* Teacher List */}
//       <FlatList
//         data={filteredTeachers}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={{ marginVertical: 8 }}>
//             <Text>{item.name}</Text>
//             <Text>{item.price} $</Text>
//           </View>
//         )}
//       />

//       {/* Filter Modal */}
//       <Modal visible={modalVisible} animationType="slide" transparent={true}>
//         <View style={{ flex: 1, backgroundColor: "white", padding: 40 }}>
//           <TouchableOpacity onPress={() => setModalVisible(false)}>
//             <Text style={{ fontSize: 18 }}>X</Text>
//           </TouchableOpacity>

//           {/* Filters */}
//           <Text>Price per lesson</Text>
//           {/* Slider for price range could go here */}

//           <TouchableOpacity onPress={() => setFilters({ ...filters, native: !filters.native })}>
//             <Text>{filters.native ? "✓" : ""} Native speaker</Text>
//           </TouchableOpacity>

//           <TouchableOpacity onPress={() => setFilters({ ...filters, professional: !filters.professional })}>
//             <Text>{filters.professional ? "✓" : ""} Professional</Text>
//           </TouchableOpacity>

//           {/* Apply Filters Button */}
//           <TouchableOpacity onPress={applyFilters} style={{ backgroundColor: "pink", padding: 12, marginTop: 16 }}>
//             <Text>Apply filters</Text>
//           </TouchableOpacity>
//         </View>
//       </Modal>
//     </View>
//   );
// }

import { useCategoriesQuery } from "@/generated";
import { View, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Categories from "@/components/Categories";
import Price from "@/components/Price";
import Subjects from "@/components/Subjects";
import SearchResults from "@/components/SearchResults";
import Loading from "@/components/Loading";
import AvailableTimes from "@/components/AvailableTimes";
import AvailableDays from "@/components/AvailableDays";
import Levels from "@/components/Levels";
import { styles } from "@/styles/findTutors-style";

export default function findTutors() {
  const { loading } = useCategoriesQuery();
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={[loading && styles.loadingStyle]}>
        {loading ? (
          <Loading />
        ) : (
          <View style={styles.scrollStyle}>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <Categories />
              <AvailableDays />
            </View>
            <View style={{ display: "flex", flexDirection: "row" }}>
              <AvailableTimes />
              <Levels />
            </View>
            <Price />
            <Subjects />
            <SearchResults />
          </View>
        )}
      </ScrollView>
    </View>
  );
}
