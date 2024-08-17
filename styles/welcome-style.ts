import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 300,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 15,
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#fff",
    textAlign: "center",
  },
  contentWrapper: {
    width: "100%",
    height: "100%",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 160,
    paddingHorizontal: 40,
    gap: 15,
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    paddingBottom: 100,
  },
  loginButton: {
    width: 350,
    height: 53,
    backgroundColor: "#35383f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  registerButton: {
    width: 350,
    height: 53,
    backgroundColor: "#e8e9eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  registerButtonText: {
    color: "#2c3448",
    fontSize: 20,
    fontWeight: "bold",
  },
  loginButtonText: {
    color: "#d7d8da",
    fontSize: 20,
    fontWeight: "bold",
  },
});
