import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "@/styles/teacherSave-style";
import { Image } from "expo-image";
import { useAuth } from "@/contexts/AuthProvider";
import { Course, useUpdateUserMutation } from "@/generated";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

type Props = {
  course: Course | null;
};

const TeacherCard = ({ course }: Props) => {
  const { user } = useAuth();
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);
  const [updateUserMutation] = useUpdateUserMutation();
  const description = course?.description || "";
  const isExpanded = expandedSubject === course?._id;
  let isFavorite = user?.favorites?.some((fav) => fav?._id === course?._id);
  const displayText = isExpanded
    ? description
    : description.split(" ").slice(0, 9).join(" ") + (description.split(" ").length > 8 ? "..." : "");

  const handleReadMore = (id: string) => {
    setExpandedSubject(expandedSubject === id ? null : id);
  };

  const handleFavoriteToggle = async (favoriteId: string) => {
    // if (isFavorite) {
    //   isFavorite = false;
    // } else {
    //   isFavorite = true;
    // }
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
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.courseBox}>
        <View style={styles.infoBox}>
          <View style={styles.tutorInfoBox}>
            <Image
              source={course?.tutorId?.profilePic ? { uri: course?.tutorId?.profilePic } : require("../assets/images/user.jpg")}
              style={styles.profilePic}
            />
            <View>
              <Pressable onPress={() => router.push(`/lesson/${course?._id}`)}>
                <Text style={styles.title}>{course?.tutorId?.fullName}</Text>
                <Text>Үнэ: {course?.price}₮</Text>
                <Text>Дугаар: {course?.tutorId?.phoneNumber}</Text>
              </Pressable>
            </View>

            <Pressable onPress={() => handleFavoriteToggle(course?._id as string)} style={styles.iconContainer}>
              <AntDesign name={isFavorite ? "heart" : "hearto"} size={24} color={isFavorite ? "red" : "black"} />
            </Pressable>
          </View>
          <View style={styles.gap}>
            <Text>Чиглэл: {course?.subject}</Text>
          </View>
          <Text>{displayText}</Text>
          {description.split(" ").length > 8 && (
            <TouchableOpacity onPress={() => handleReadMore(course?._id as string)}>
              <Text>{isExpanded ? "Дэлгэрэнгүйг нуух" : "Дэлгэрэнгүй унших"}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default TeacherCard;
