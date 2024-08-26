import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { styles } from "@/styles/teacherSave-style";
import { Image } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useAuth } from "@/contexts/AuthProvider";
import { User0, useUpdateUserMutation } from "@/generated";
import { router } from "expo-router";

export default function Favorites() {
  const { user } = useAuth();
  const [userData, setUserData] = useState<User0 | null>(user || null);
  const [expandedSubject, setExpandedSubject] = useState<number | null>(null);
  const [updateUserMutation] = useUpdateUserMutation();

  const handleReadMore = (id: number) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  const handleFavoriteToggle = async (favoriteId: string) => {
    if (userData) {
      const filteredData = userData.favorites?.filter((fav) => fav?._id !== favoriteId);
      setUserData((prev) => ({ ...(prev as User0), favorites: filteredData }));

      try {
        await updateUserMutation({
          variables: {
            input: { favorites: favoriteId },
            userId: user?._id as string,
          },
        });
        console.log("success!");
      } catch (error) {
        console.error("Error updating favorites:", error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.name}>Seedling</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {userData?.favorites?.map((favorite, id) => {
          const description = favorite?.description || "";
          const isExpanded = expandedSubject === id;
          const isFavorite = userData?.favorites?.some((fav) => fav?._id === favorite?._id);
          const displayText = isExpanded
            ? description
            : description.split(" ").slice(0, 9).join(" ") + (description.split(" ").length > 8 ? "..." : "");
          return (
            <View key={id} style={styles.courseBox}>
              <View style={styles.infoBox}>
                <View style={styles.tutorInfoBox}>
                  <Image
                    source={
                      favorite?.tutorId?.profilePic ? { uri: favorite?.tutorId?.profilePic } : require("../../assets/images/user.jpg")
                    }
                    style={styles.profilePic}
                  />
                  <View>
                    <Pressable onPress={() => router.push(`/lesson/${favorite?._id}`)}>
                      <Text style={styles.title}>{favorite?.tutorId?.fullName}</Text>
                      <Text>Үнэ: {favorite?.price}₮</Text>
                      <Text>Дугаар: {favorite?.tutorId?.phoneNumber}</Text>
                    </Pressable>
                  </View>
                  <Pressable onPress={() => handleFavoriteToggle(favorite?._id as string)} style={styles.iconContainer}>
                    <AntDesign color={isFavorite ? "red" : "black"} name="heart" size={23} />
                  </Pressable>
                </View>
                <View style={styles.gap}>
                  <Text>Чиглэл: {favorite?.subject}</Text>
                </View>
                <Text>{displayText}</Text>
                {description.split(" ").length > 8 && (
                  <TouchableOpacity onPress={() => handleReadMore(id)}>
                    <Text>{isExpanded ? "Дэлгэрэнгүйг нуух" : "Дэлгэрэнгүй унших"}</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
