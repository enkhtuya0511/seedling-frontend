import { Text, Pressable, Modal, View, ActivityIndicator } from "react-native";
import { Course, useUpdateCourseMutation } from "@/generated";
import { useAuth } from "@/contexts/AuthProvider";
import { styles } from "@/styles/lesson-style";
import { useState } from "react";

type Props = {
  course: Course | null;
  id: string;
};

const EnrollButton = ({ course, id }: Props) => {
  const { user } = useAuth();
  const [updateCourseMutation] = useUpdateCourseMutation();
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);
      const { data } = await updateCourseMutation({
        variables: {
          courseId: id,
          input: { enrolledStudentIds: [user?._id] as string[] },
        },
      });
      if (data?.updateCourse) {
        setModalVisible(false);
      }
    } catch (error) {
      console.log("error updating course: ", error);
    }
  };
  return (
    <Pressable
      onPress={() => setModalVisible(true)}
      style={styles.buttonContainer}
      disabled={course?.enrolledStudentIds?.includes(user?._id as string)}
    >
      <Text style={{ textAlign: "center" }}>
        {course?.enrolledStudentIds?.includes(user?._id as string) ? "Бүртгүүлсэн" : "Бүртгүүлэх"}
      </Text>

      <Modal visible={modalVisible} animationType="none" transparent={true}>
        <View style={styles.modalOverlay}>
          {loading ? (
            <View style={styles.enrollLoading}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Та 50 минутын хичээл нь {course?.price}₮ хичээлд суухдаа итгэлтэй байна уу?</Text>
              <View style={styles.modalButtons}>
                <Pressable style={styles.modalButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalButtonText}>Үгүй</Text>
                </Pressable>
                <Pressable style={styles.modalButton} onPress={() => handleEnroll()}>
                  <Text style={styles.modalButtonText}>Тийм</Text>
                </Pressable>
              </View>
            </View>
          )}
        </View>
      </Modal>
    </Pressable>
  );
};

export default EnrollButton;
