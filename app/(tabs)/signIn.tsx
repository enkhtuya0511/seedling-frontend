import { Link } from "expo-router";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable } from "react-native";
import { styles } from "@/styles/signIn-style";

export default function signIn() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.context}>
          <View style={styles.innerContainer}>
            <Text style={styles.logo}>🌱</Text>
            <TextInput
              style={styles.input}
              onChangeText={() => console.log("input")}
              placeholder="Мэйл хаяг"
              placeholderTextColor={"#828282"}
            />
            <TextInput
              style={styles.input}
              onChangeText={() => console.log("input")}
              placeholder="Нууц үг"
              placeholderTextColor={"#828282"}
              secureTextEntry={true}
            />
            <Pressable style={styles.forgotPassContainer}>
              <Text style={styles.forgotPass}>Нууц үгээ мартсан уу?</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Нэвтрэх</Text>
          </Pressable>
        </View>
        <Text style={{ color: "#b3b3b3", marginTop: 20 }}>
          Аккаунтгүй юу?{" "}
          <Link href={"/signUp"} style={{ color: "#fff" }}>
            Бүртгүүлэх
          </Link>
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
