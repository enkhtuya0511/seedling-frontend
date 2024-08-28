import React, { useState } from "react";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";
import { useAuth } from "@/contexts/AuthProvider";
import { UpdateUserInput, useUpdateUserMutation } from "@/generated";
import * as ImagePicker from "expo-image-picker";
import { AntDesign, Feather } from "@expo/vector-icons";
import { Text, View, Pressable, Image, TextInput, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from "react-native";
import { styles } from "@/styles/updateProfile-style";

const Page: React.FC = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { user } = useAuth();
  const [updateUserMutation, { loading }] = useUpdateUserMutation();
  const [image, setImage] = useState<string | null>(null);
  const [inputData, setInputData] = useState({} as UpdateUserInput);
  const [toast, setToast] = useState<string | null>(null);

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

  const handleUpdate = async () => {
    try {
      const { data } = await updateUserMutation({
        variables: {
          userId: id,
          input: inputData,
        },
      });
      if (data) {
        setToast("Мэдээлэл амжилттай шинэчлэгдлээ.");
      }
    } catch (error) {
      console.log("Error updating user: ", error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.itemBox}>
            <Pressable onPress={() => router.navigate(`/profile`)}>
              <AntDesign name="arrowleft" size={24} color="#fff" />
            </Pressable>
            <Text style={styles.headerText}>Хувийн мэдээлэл шинэчлэх</Text>
          </View>
        </View>

        <View style={{ position: "relative" }}>
          {image ? (
            <Image source={{ uri: image }} style={styles.profilePic} />
          ) : (
            <>
              {user?.profilePic.length === 0 ? (
                <Image source={require("../../assets/images/user.jpg")} style={styles.profilePic} />
              ) : (
                <Image source={{ uri: user?.profilePic }} style={styles.profilePic} />
              )}
            </>
          )}
          <Pressable style={styles.updatePic} onPress={pickImage}>
            <Feather name="edit-2" size={18} color="black" />
          </Pressable>
        </View>

        <View style={styles.innerContainer}>
          <View style={styles.textCon}>
            <Text style={styles.labelText}>Бүтэн нэр</Text>
            <TextInput
              style={styles.text}
              defaultValue={user?.fullName}
              onChangeText={(value) => setInputData((prev) => ({ ...prev, fullName: value }))}
            />
          </View>
          <View style={styles.textCon}>
            <Text style={styles.labelText}>Мэйл хаяг</Text>
            <TextInput
              style={styles.text}
              defaultValue={user?.email}
              onChangeText={(value) => setInputData((prev) => ({ ...prev, email: value }))}
            />
          </View>
          <View style={styles.textCon}>
            <Text style={styles.labelText}>Утасны дугаар</Text>
            <TextInput
              style={styles.text}
              defaultValue={user?.phoneNumber}
              onChangeText={(value) => setInputData((prev) => ({ ...prev, phoneNumber: value }))}
            />
          </View>
        </View>
        {toast && <Text style={styles.toastText}>{toast}</Text>}

        <Pressable style={styles.button} onPress={() => handleUpdate()} disabled={loading}>
          {loading ? <ActivityIndicator size="small" color="#20222a" /> : <Text style={styles.buttonText}>Хадгалах</Text>}
        </Pressable>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Page;
