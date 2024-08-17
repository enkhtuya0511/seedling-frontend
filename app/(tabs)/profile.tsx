import { Image } from "expo-image";
import { useAuth } from "@/contexts/AuthProvider";
import { View, Text, Pressable } from "react-native";
import { styles } from "@/styles/settings-style";
import { Feather, AntDesign, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Profile() {
  const { onLogout, user } = useAuth();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.name}>Аккаунт</Text>
      </View>

      <View style={styles.profileContainer}>
        {user?.profilePic.length === 0 ? (
          <Image source={require("../../assets/images/user.jpg")} style={styles.profilePic} />
        ) : (
          <Image source={{ uri: "https://avatar.iran.liara.run/public/86" }} style={styles.profilePic} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.username}>{user?.fullName}</Text>
          <Text style={styles.email}>{user?.email}</Text>
        </View>
        <Pressable onPress={() => router.push(`/profile/${user?._id}`)}>
          <Feather name="edit-3" size={30} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.accountItem}>
        <View style={styles.itemBox}>
          <View style={styles.iconContainer}>
            <FontAwesome name="user" size={24} color="#fff" />
          </View>
          <Text style={styles.itemText}>Хувийн мэдээлэл</Text>
        </View>
        <Pressable onPress={() => router.push(`/profile/${user?._id}`)}>
          <AntDesign name="right" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.accountItem}>
        <View style={styles.itemBox}>
          <View style={styles.iconContainer}>
            <FontAwesome5 name="chalkboard-teacher" size={24} color="#fff" />
          </View>
          <Text style={styles.itemText}>Багш болох</Text>
        </View>
        <Pressable onPress={() => router.push(`/becomeTeacher`)}>
          <AntDesign name="right" size={24} color="#fff" />
        </Pressable>
      </View>

      <View style={styles.accountItem}>
        <View style={styles.itemBox}>
          <View style={styles.iconContainer}>
            <AntDesign name="key" size={24} color="#fff" />
          </View>
          <Text style={styles.itemText}>Нууц үгээ солих</Text>
        </View>
        <AntDesign name="right" size={24} color="#fff" />
      </View>

      <View style={styles.accountItem}>
        <View style={styles.itemBox}>
          <View style={styles.iconContainer}>
            <Feather name="log-out" size={24} color="#fff" />
          </View>
          <Pressable onPress={onLogout}>
            <Text style={styles.itemText}>Гарах</Text>
          </Pressable>
        </View>
        <AntDesign name="right" size={24} color="#fff" />
      </View>
    </View>
  );
}
