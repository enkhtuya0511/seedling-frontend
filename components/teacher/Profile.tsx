import { Text, View, Image } from "react-native";
import { styles } from "@/styles/lesson-style";
import { Course } from "@/generated";
import { useAuth } from "@/contexts/AuthProvider";

type Props = {
  course: Course | null;
};

const Profile = ({ course }: Props) => {
  const { user } = useAuth();
  return (
    <View style={styles.profileContainer}>
      {course?.tutorId.profilePic ? (
        <Image style={styles.profileImage} source={{ uri: course.tutorId.profilePic }} />
      ) : (
        <Image source={require("../../assets/images/user.jpg")} style={styles.profileImage} />
      )}
      <View style={styles.profileDetails}>
        <Text style={styles.profileName}>{course?.tutorId.fullName}</Text>
        <Text style={styles.profileInfo}>{course?.subject}</Text>
        {/* <Text style={styles.profileInfo}>{course?.tutorId.phoneNumber}</Text> */}
        {course?.enrolledStudentIds?.includes(user?._id as string) && (
          <Text style={styles.profileInfo}>Дугаар: {course?.tutorId?.phoneNumber}</Text>
        )}
      </View>
    </View>
  );
};

export default Profile;
