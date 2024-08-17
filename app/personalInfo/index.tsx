import { Text, View, Pressable, Image } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { useAuth } from "@/contexts/AuthProvider";
import { styles } from "@/styles/profile-style";

export default function Page() {
  const { user } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.itemBox}>
          <Pressable onPress={() => router.navigate(`/profile`)}>
            <AntDesign name="arrowleft" size={24} color="#fff" />
          </Pressable>
          <Text style={styles.headerText}>Хувийн мэдээлэл</Text>
        </View>
        <Pressable onPress={() => router.push(`/updateProfile/${user?._id}`)}>
          <Feather name="edit-3" size={30} color="#fff" />
        </Pressable>
      </View>

      {user?.profilePic.length === 0 ? (
        <Image source={require("../../assets/images/user.jpg")} style={styles.profilePic} />
      ) : (
        <Image source={{ uri: "https://avatar.iran.liara.run/public/86" }} style={styles.profilePic} />
      )}
      <View style={styles.innerContainer}>
        <View style={styles.textCon}>
          <Text style={styles.labelText}>Бүтэн нэр</Text>
          <Text style={styles.text}>{user?.fullName}</Text>
        </View>
        <View style={styles.textCon}>
          <Text style={styles.labelText}>Мэйл хаяг</Text>
          <Text style={styles.text}>{user?.email}</Text>
        </View>
        <View style={styles.textCon}>
          <Text style={styles.labelText}>Утасны дугаар</Text>
          <Text style={styles.text}>{user?.phoneNumber}</Text>
        </View>
      </View>
    </View>
  );
}
