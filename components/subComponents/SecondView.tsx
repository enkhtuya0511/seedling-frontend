import { Image, Pressable, Text, View } from "react-native";
import { styles } from "@/styles/welcome-style";

type Props = {
  onLogin: () => void;
  onRegister: () => void;
};

export const SecondView = ({ onLogin, onRegister }: Props) => {
  return (
    <View style={styles.container} key="2">
      <View style={styles.contentWrapper}>
        <View style={styles.content}>
          <Image source={require("../../assets/images/welcome.png")} style={styles.image} resizeMode="cover" />
          <View>
            <Text style={styles.title}>Seedling-т тавтай морил 👋🏼</Text>
            <Text style={styles.text}>Өөрт тохирсон багш нартайгаа холбогдож, суралцах замдаа итгэлтэйгээр урагшлаарай.</Text>
          </View>
          <View style={styles.buttons}>
            <Pressable onPress={onRegister} style={styles.registerButton}>
              <Text style={styles.registerButtonText}>Бүртгүүлэх</Text>
            </Pressable>
            <Pressable onPress={onLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Нэвтрэх</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};
