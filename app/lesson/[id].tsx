import React from "react";
import { useLocalSearchParams } from "expo-router";
import { Text, View, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";

const Page: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return <Text style={{ color: "pink" }}>lesson id: {id}</Text>;
};

export default Page;
