import React from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable, Image, ScrollView, ActivityIndicator } from "react-native";
import { useCourseQuery, useUpdateCourseMutation } from "@/generated";
import { styles } from "@/styles/lesson-style";
import { MaterialCommunityIcons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { Video, AVPlaybackStatus } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "@/contexts/AuthProvider";

const Page: React.FC = () => {
  const { user } = useAuth();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, loading } = useCourseQuery({
    variables: {
      courseId: id,
    },
  });
  const video = React.useRef<Video>(null);
  const [status, setStatus] = React.useState<AVPlaybackStatus | null>(null);

  const [updateCourseMutation] = useUpdateCourseMutation();

  const handleEnroll = async () => {
    try {
      const { data } = await updateCourseMutation({
        variables: {
          courseId: id,
          input: { enrolledStudentIds: user?._id },
        },
      });
      console.log("after req: ", data?.updateCourse.enrolledStudentIds);
    } catch (error) {
      console.log("error updating course: ", error);
    }
  };
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Ачаалж байна...</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />
      <Pressable style={{ width: "100%", paddingBottom: 10, paddingLeft: 5 }} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </Pressable>
      {data?.course && (
        <View style={{ gap: 20, marginBottom: 100 }}>
          <View style={styles.profileContainer}>
            {data?.course.tutorId.profilePic ? (
              <Image style={styles.profileImage} source={{ uri: data?.course.tutorId.profilePic }} />
            ) : (
              <Image source={require("../../assets/images/user.jpg")} style={styles.profileImage} />
            )}
            <View style={styles.profileDetails}>
              <Text style={styles.profileName}>{data.course.tutorId.fullName}</Text>
              <Text style={styles.profileInfo}>{data.course.subject}</Text>
              <Text style={styles.profileInfo}>{data.course.tutorId.phoneNumber}</Text>
            </View>
          </View>
          <View style={styles.iconsContainer}>
            <View style={styles.iconContainer}>
              <View style={styles.priceContainer}>
                <FontAwesome name="star" size={24} color="black" />
                <Text>{data.course.reviewIds ? 4.4 : 0}</Text>
              </View>
              <Text style={styles.profileInfo}>{data.course.reviewIds?.length} үнэлгээ</Text>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.priceContainer}>
                <MaterialCommunityIcons name="hand-coin" size={24} color="black" />
                <Text>{data.course.price}₮</Text>
              </View>
              <Text style={styles.profileInfo}>50-мин хичээл</Text>
            </View>
          </View>

          <Pressable
            onPress={() => handleEnroll()}
            style={styles.buttonContainer}
            disabled={data.course.enrolledStudentIds?.includes(user?._id as string)}
          >
            <Text style={{ textAlign: "center" }}>
              {data.course.enrolledStudentIds?.includes(user?._id as string) ? "Бүртгүүлсэн" : "Бүртгүүлэх"}
            </Text>
          </Pressable>
          <View>
            <Text style={styles.reviewTitle}>Миний тухай</Text>
            <View>
              <Text style={styles.reviewText}>{data.course.description}</Text>
            </View>
          </View>

          {data.course.tutorId.tutorProfile?.resume && (
            <View style={styles.resumeContainer}>
              <Text style={styles.resumeTitle}>Resume</Text>
              <View style={styles.resumeItem}>
                <Text style={styles.resumeText}>{data.course.tutorId.tutorProfile?.resume?.education}</Text>
              </View>
            </View>
          )}

          <View>
            <View style={styles.courseDetailItem}>
              <Text style={styles.courseDetailLabel}>Заах түвшин:</Text>
              <Text style={styles.courseDetailValue}>{data.course.level?.join(", ")}</Text>
            </View>
            <View style={styles.courseDetailItem}>
              <Text style={styles.courseDetailLabel}>Сонгох боломжтой өдрүүд:</Text>
              <Text style={styles.courseDetailValue}>{data.course?.availableDays?.join(", ")}</Text>
            </View>
            <View style={styles.courseDetailItem}>
              <Text style={styles.courseDetailLabel}>Сонгох боломжтой цагууд:</Text>
              <Text style={styles.courseDetailValue}>{data.course?.availableTimes?.join(", ")}</Text>
            </View>
          </View>

          {data.course.videoLesson && (
            <View style={styles.videoContainer}>
              <Video
                ref={video}
                style={styles.video}
                source={{
                  uri: data.course.videoLesson as string,
                }}
                useNativeControls
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(status)}
              />
            </View>
          )}
        </View>
      )}
    </ScrollView>
  );
};

export default Page;
