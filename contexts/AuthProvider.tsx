import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, usePathname } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useUserLazyQuery, useLoginMutation, User, LoginInput, useSignUpMutation, SignUpInput } from "@/generated";

type Props = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: User | undefined;
  onLogin: (user: LoginInput) => void;
  onLogout: () => void;
  setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
  loading: boolean;
  onSignUp: (user: SignUpInput) => void;
  signUpLoading: boolean;
};
const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: Props) => {
  const [loginMutation] = useLoginMutation();
  const [signUpMutation, { loading: signUpLoading }] = useSignUpMutation();
  const [user, setUser] = useState<User | undefined>();
  const [getUser, { data: userdata, loading }] = useUserLazyQuery();
  const pathName = usePathname();
  const navigation = useNavigation<any>();

  useEffect(() => {
    const checkUser = async () => {
      const token = await AsyncStorage.getItem("@token");
      if (token) {
        await getUser({ variables: { token: token as string } });
        if (pathName === "/") {
          router.push("/home");
        }
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    if (userdata) {
      setUser(userdata.user as User);
      // console.log("first", userdata.user);
      if (pathName === "/") {
        router.push("/home");
      }
    }
  }, [userdata]);

  const onLogin = async (user: LoginInput) => {
    try {
      const { data } = await loginMutation({
        variables: {
          input: { email: user.email, password: user.password },
        },
      });
      if (data?.login) {
        AsyncStorage.setItem("@token", data.login.token as string);

        const userData = await getUser({
          variables: { token: data.login.token as string },
        });
        if (userData.data?.user) {
          setUser(userData.data.user as User);
          router.push("/home");
        } else {
          console.error("Failed to get user data after login");
        }
      }
    } catch (error) {
      console.log("error during login: ", error);
    }
  };

  const onLogout = async () => {
    try {
      await AsyncStorage.removeItem("@token");
      navigation.navigate("index");
      setUser(undefined);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  const onSignUp = async (user: SignUpInput) => {
    try {
      const { data } = await signUpMutation({
        variables: { input: user },
      });
      if (data?.signUp) {
        router.push("/signIn");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ onLogout, onLogin, user, setUser, loading, signUpLoading, onSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  return React.useContext(AuthContext);
};
