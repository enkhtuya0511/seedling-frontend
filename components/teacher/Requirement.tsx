import { Text, View } from "react-native";
import { Course } from "@/generated";
import { styles } from "@/styles/lesson-style";

type Props = {
  course: Course | null;
};

const Requirement = ({ course }: Props) => {
  return (
    <View>
      <View style={styles.courseDetailItem}>
        <Text style={styles.courseDetailLabel}>Заах түвшин:</Text>
        <Text style={styles.courseDetailValue}>{course?.level?.join(", ")}</Text>
      </View>
      <View style={styles.courseDetailItem}>
        <Text style={styles.courseDetailLabel}>Сонгох боломжтой өдрүүд:</Text>
        <Text style={styles.courseDetailValue}>{course?.availableDays?.join(", ")}</Text>
      </View>
      <View style={styles.courseDetailItem}>
        <Text style={styles.courseDetailLabel}>Сонгох боломжтой цагууд:</Text>
        <Text style={styles.courseDetailValue}>{course?.availableTimes?.join("\n")}</Text>
      </View>
    </View>
  );
};

export default Requirement;
