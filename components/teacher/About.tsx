import { Text, View } from "react-native";
import { Course } from "@/generated";
import { styles } from "@/styles/lesson-style";

type Props = {
  course: Course | null;
};

const About = ({ course }: Props) => {
  return (
    <View>
      <Text style={styles.reviewTitle}>Миний тухай</Text>
      <View>
        <Text style={styles.reviewText}>{course?.description}</Text>
      </View>
    </View>
  );
};

export default About;
