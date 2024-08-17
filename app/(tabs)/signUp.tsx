import React, { useState } from "react";
import { Link } from "expo-router";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "@/styles/signUp-style";
import { useAuth } from "@/contexts/AuthProvider";
import { SignUpInput } from "@/generated";

export default function signUp() {
  const { onSignUp, signUpLoading } = useAuth();
  const [image, setImage] = useState<string | null>(null);
  const [inputData, setInputData] = useState({} as SignUpInput);
  const [error, setError] = useState<string | null>(null);

  const signUpHandler = () => {
    setError(null);
    if (!inputData.fullName || !inputData.phoneNumber || !inputData.email || !inputData.password) {
      return setError("Бүх талбаруудыг бөглөх шаардлагатай.");
    }
    onSignUp(inputData);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setInputData((prev) => ({ ...prev, profilePic: result.assets[0].uri }));
    }
  };

  const handleData = (value: string, field: string) => {
    setInputData((prev) => ({ ...prev, [field]: value }));
  };
  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.container}>
            <View style={styles.context}>
              <View style={styles.innerContainer}>
                <Text style={styles.title}>Xyвийн мэдээлэл 📝</Text>
                <View style={{ position: "relative" }}>
                  {image ? (
                    <Image source={{ uri: image }} style={styles.profileImage} />
                  ) : (
                    <Image source={require("../../assets/images/profilePic.png")} style={styles.profileImage} />
                  )}
                  <Pressable style={styles.updatePic} onPress={pickImage}>
                    <Feather name="edit-2" size={18} color="black" />
                  </Pressable>
                </View>
                <TextInput
                  style={[styles.input, error && !inputData.fullName ? styles.inputError : null]}
                  placeholder="Бүтэн нэр"
                  onChangeText={(value) => handleData(value, "fullName")}
                />
                <TextInput
                  style={[styles.input, error && !inputData.phoneNumber ? styles.inputError : null]}
                  placeholder="Утасны дугаар"
                  keyboardType="phone-pad"
                  onChangeText={(value) => handleData(value, "phoneNumber")}
                />
                <TextInput
                  style={[styles.input, error && !inputData.email ? styles.inputError : null]}
                  placeholder="Мэйл хаяг"
                  keyboardType="email-address"
                  onChangeText={(value) => handleData(value, "email")}
                />
                <TextInput
                  style={[styles.input, error && !inputData.password ? styles.inputError : null]}
                  placeholder="Нууц үг"
                  placeholderTextColor={"#828282"}
                  secureTextEntry={true}
                  onChangeText={(value) => handleData(value, "password")}
                />
                {error && <Text style={styles.errorText}>{error}</Text>}
              </View>
              <Pressable style={styles.button} onPress={signUpHandler} disabled={signUpLoading}>
                {signUpLoading ? (
                  <ActivityIndicator size="small" color="#20222a" />
                ) : (
                  <Text style={styles.buttonText}>Бүртгүүлэх</Text>
                )}
              </Pressable>
            </View>
            <Link href={"/signIn"}>
              <Text style={{ color: "#b3b3b3", marginTop: 20 }}>
                Аккаунттай юу? <Text style={{ color: "#fff" }}>Нэвтрэх</Text>
              </Text>
            </Link>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
