import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 35 }}>🌱</Text>
      <Text style={{ color: "#fff", fontSize: 18, paddingBottom: 10 }}>
        Seedling
      </Text>
      <ActivityIndicator size="large" color={"#fff"} />
    </View>
  );
};

export default Loading;
