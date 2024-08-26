import { Text, View } from "react-native";
import { Course } from "@/generated";
import { styles } from "@/styles/lesson-style";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";

type Props = {
  course: Course | null;
};

const Price = ({ course }: Props) => {
  return (
    <View style={styles.iconsContainer}>
      <View style={styles.iconContainer}>
        <View style={styles.priceContainer}>
          <FontAwesome name="star" size={24} color="black" />
          <Text>{course?.reviewIds?.length !== 0 ? 4.4 : 0}</Text>
        </View>
        <Text style={styles.profileInfo}>{course?.reviewIds?.length} үнэлгээ</Text>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.priceContainer}>
          <MaterialCommunityIcons name="hand-coin" size={24} color="black" />
          <Text>{course?.price}₮</Text>
        </View>
        <Text style={styles.profileInfo}>50-мин хичээл</Text>
      </View>
    </View>
  );
};

export default Price;
