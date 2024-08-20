import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Page: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View>
      <Text style={{ color: "#fff" }}>category id: {id}</Text>
    </View>
  );
};

export default Page;
