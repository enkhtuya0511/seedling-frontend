import { ScrollView, Text, View } from "react-native";
import { Course } from "@/generated";
import { useState } from "react";
import { Pressable } from "react-native";
import Education from "./Education";
import WorkExprience from "./WorkExprience";
import Certifications from "./Certifications";
import { styles } from "@/styles/teacher-style";

type Props = {
  course: Course | null;
};

const TestResume = ({ course }: Props) => {
  const [activeTab, setActiveTab] = useState("education");
  return (
    <View>
      <Text style={styles.header}>Resume</Text>
      <View style={styles.tabs}>
        <Pressable style={[styles.tabButton, activeTab === "education" && styles.activeTab]} onPress={() => setActiveTab("education")}>
          <Text style={styles.tabText}>Боловсрол</Text>
        </Pressable>
        <Pressable
          style={[styles.tabButton, activeTab === "workExperience" && styles.activeTab]}
          onPress={() => setActiveTab("workExperience")}
        >
          <Text style={styles.tabText}>Ажлын туршлага</Text>
        </Pressable>
        <Pressable
          style={[styles.tabButton, activeTab === "certifications" && styles.activeTab]}
          onPress={() => setActiveTab("certifications")}
        >
          <Text style={styles.tabText}>Гэрчилгээ</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        {activeTab === "education" && <Education course={course} />}
        {activeTab === "workExperience" && <WorkExprience course={course} />}
        {activeTab === "certifications" && <Certifications course={course} />}
      </ScrollView>
    </View>
  );
};

export default TestResume;
