import { router, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable, ScrollView, ActivityIndicator } from "react-native";
import { useCourseQuery } from "@/generated";
import { StatusBar } from "expo-status-bar";
import { AntDesign } from "@expo/vector-icons";
import { styles } from "@/styles/lesson-style";

import VideoComponent from "@/components/teacher/Video";
import Profile from "@/components/teacher/Profile";
import Price from "@/components/teacher/Price";
import EnrollButton from "@/components/teacher/EnrollButton";
import About from "@/components/teacher/About";
import Requirement from "@/components/teacher/Requirement";
import TestResume from "@/components/teacher/TestResume";

const Page: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, loading } = useCourseQuery({
    variables: {
      courseId: id,
    },
    skip: !id,
  });
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
          <Profile course={data.course} />
          <Price course={data.course} />
          <EnrollButton id={id} course={data.course} />
          <About course={data.course} />
          <TestResume course={data.course} />
          <Requirement course={data.course} />
          <VideoComponent teacherVideo={data.course.videoLesson as string} />
        </View>
      )}
    </ScrollView>
  );
};

export default Page;
