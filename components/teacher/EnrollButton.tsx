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
          input: { enrolledStudentIds: user?._id },
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
        <View style={styles0.modalOverlay}>
          {loading ? (
            <View style={styles0.loadingContainer}>
              <ActivityIndicator size="large" color="#000" />
            </View>
          ) : (
            <View style={styles0.modalContainer}>
              <Text style={styles0.modalText}>Та 50 минутын хичээл нь {course?.price}₮ хичээлд суухдаа итгэлтэй байна уу?</Text>
              <View style={styles0.modalButtons}>
                <Pressable style={styles0.modalButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles0.modalButtonText}>Үгүй</Text>
                </Pressable>
                <Pressable style={styles0.modalButton} onPress={() => handleEnroll()}>
                  <Text style={styles0.modalButtonText}>Тийм</Text>
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

import { StyleSheet } from "react-native";

export const styles0 = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Dims the background
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingContainer: {
    // width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  modalButton: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: "black",
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: "center",
  },
  modalButtonText: {
    color: "white",
    fontSize: 16,
  },
});
