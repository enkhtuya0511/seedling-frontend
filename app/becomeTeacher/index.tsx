import { Text, View, Image, TouchableOpacity } from "react-native";
import { styles } from "@/styles/becomeATeacher-style";
import { Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.headerContainer}>
        <View style={styles.itemBox}>
          <Pressable onPress={() => router.navigate(`/profile`)}>
            <AntDesign
              name="arrowleft"
              size={25}
              color="#fff"
              style={styles.weight}
            />
          </Pressable>
          <Text style={styles.headerText}>Багш болох</Text>
        </View>
      </View>
      <View>
        <Image
          source={require("../../assets/images/clouds.png")}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.textBox}>
          <Text style={styles.text}>
            Багш болохын тулд энэ товчийг дарж веб хуудсанд зочилно уу.
          </Text>
          <TouchableOpacity style={styles.url}>
            <Link
              href="https://tutor-back-end-rose.vercel.app/"
              style={styles.url1}
            >
              <View style={styles.url1}>
                <Text style={styles.buttonText}>Энд дарна уу</Text>
              </View>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
