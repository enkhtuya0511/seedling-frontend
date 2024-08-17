import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

type Props = {
  onStart: () => void;
};

export const FirstView = ({ onStart }: Props) => {
  const [showLoader, setShowLoader] = useState(false);
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      setShowLoader(true);
    }, 1000);

    const timer = setTimeout(() => {
      onStart();
    }, 2500);

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(timer);
    };
  }, []);
  return (
    <View style={styles.container} key="1">
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>🌱</Text>
        <Text style={styles.appName}>Seedling</Text>
      </View>
      <View style={styles.loaderContainer}>{showLoader && <ActivityIndicator size="large" color={"#fff"} />}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 80,
    color: "#fff",
  },
  appName: {
    fontSize: 36,
    color: "#fff",
    marginTop: 20,
    fontWeight: "bold",
  },
  loaderContainer: {
    flex: 1,
    justifyContent: "center",
  },
});

//🌱 Meaning of Seedling Emoji (🌱): "An image of the first plant growth that comes out of a seed - the seedling emoji - generally conveys new beginnings or starting over.
