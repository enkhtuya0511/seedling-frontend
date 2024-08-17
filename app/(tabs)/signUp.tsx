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
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import Feather from "@expo/vector-icons/Feather";
import { styles } from "@/styles/signUp-style";

export default function signUp() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
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
                <TextInput style={styles.input} placeholder="Бүтэн нэр" />
                <TextInput style={styles.input} placeholder="Утасны дугаар" keyboardType="phone-pad" />
                <TextInput style={styles.input} placeholder="Мэйл хаяг" keyboardType="email-address" />
                <TextInput style={styles.input} placeholder="Нууц үг" />
                <TextInput style={styles.input} placeholder="Нууц үгээ батлах" />
              </View>
              <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Бүртгүүлэх</Text>
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
