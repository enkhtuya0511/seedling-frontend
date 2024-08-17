import { Link } from "expo-router";
import { useState } from "react";
import { useAuth } from "@/contexts/AuthProvider";
import { LoginInput } from "@/generated";
import { View, Text, TextInput, TouchableWithoutFeedback, Keyboard, Pressable, ActivityIndicator } from "react-native";
import { styles } from "@/styles/signIn-style";

export default function signIn() {
  const { onLogin, loading } = useAuth();
  const [inputData, setInputData] = useState({} as LoginInput);
  const [error, setError] = useState<string | null>(null);

  const loginHandler = () => {
    setError(null);
    if (!inputData.email || !inputData.password) {
      setError("Бүх талбаруудыг бөглөх шаардлагатай.");
    } else {
      onLogin(inputData);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.context}>
          <View style={styles.innerContainer}>
            <Text style={styles.logo}>🌱</Text>
            <TextInput
              style={[styles.input, error && !inputData.email ? styles.inputError : null]}
              placeholder="Мэйл хаяг"
              placeholderTextColor={"#828282"}
              onChangeText={(value) => setInputData((prev) => ({ ...prev, email: value }))}
              keyboardType="email-address"
            />
            <TextInput
              style={[styles.input, error && !inputData.password ? styles.inputError : null]}
              onChangeText={(value) => setInputData((prev) => ({ ...prev, password: value }))}
              placeholder="Нууц үг"
              placeholderTextColor={"#828282"}
              secureTextEntry={true}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
            <Pressable style={styles.forgotPassContainer}>
              <Text style={styles.forgotPass}>Нууц үгээ мартсан уу?</Text>
            </Pressable>
          </View>
          <Pressable style={styles.button} onPress={loginHandler} disabled={loading}>
            {loading ? <ActivityIndicator size="small" color="#20222a" /> : <Text style={styles.buttonText}>Нэвтрэх</Text>}
          </Pressable>
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
