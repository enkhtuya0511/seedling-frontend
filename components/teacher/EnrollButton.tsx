import { Text, Pressable } from "react-native";
import { Course, useUpdateCourseMutation } from "@/generated";
import { useAuth } from "@/contexts/AuthProvider";
import { styles } from "@/styles/lesson-style";

type Props = {
  course: Course | null;
  id: string;
};

const EnrollButton = ({ course, id }: Props) => {
  const { user } = useAuth();
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
  return (
    <Pressable
      onPress={() => handleEnroll()}
      style={styles.buttonContainer}
      disabled={course?.enrolledStudentIds?.includes(user?._id as string)}
    >
      <Text style={{ textAlign: "center" }}>
        {course?.enrolledStudentIds?.includes(user?._id as string) ? "Бүртгүүлсэн" : "Бүртгүүлэх"}
      </Text>
    </Pressable>
  );
};

export default EnrollButton;
