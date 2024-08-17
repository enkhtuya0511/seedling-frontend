import { Link } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, ActivityIndicator } from "react-native";
import { styles } from "@/styles/signIn-style";

export default function signIn() {
  const { onLogin, loading } = useAuth();
  const [email, onChangeEmail] = useState<string | undefined>();
  const [password, onChangePassword] = useState<string | undefined>();

  const loginHandler = () => {
    if (email && password)
      onLogin({
        email,
        password,
      });
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.context}>
          <View style={styles.innerContainer}>
            <Text style={styles.logo}>🌱</Text>
            <TextInput
              style={styles.input}
              placeholder="Мэйл хаяг"
              placeholderTextColor={"#828282"}
              onChangeText={onChangeEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              placeholder="Нууц үг"
              placeholderTextColor={"#828282"}
              secureTextEntry={true}
            />
            <Pressable style={styles.forgotPassContainer}>
              <Text style={styles.forgotPass}>Нууц үгээ мартсан уу?</Text>
            </Pressable>
          </View>
          {loading ? (
            <View style={styles.button}>
              <ActivityIndicator size="large" color={"#20222a"} />
            </View>
          ) : (
            <Pressable style={styles.button} onPress={loginHandler}>
              <Text style={styles.buttonText}>Нэвтрэх</Text>
            </Pressable>
          )}
        </View>
        <Link href={"/signUp"}>
          <Text style={{ color: "#b3b3b3", marginTop: 20 }}>
            Аккаунтгүй юу? <Text style={{ color: "#fff" }}>Бүртгүүлэх</Text>
          </Text>
        </Link>
      </View>
    </TouchableWithoutFeedback>
  );
}
