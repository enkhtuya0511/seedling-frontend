import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181a21",
    justifyContent: "center",
    alignItems: "center",
  },
  context: {
    width: "85%",
    padding: 20,
    borderRadius: 15,
    alignItems: "center",
  },
  innerContainer: {
    width: "100%",
    alignItems: "center",
    gap: 15,
  },
  logo: {
    fontSize: 80,
    color: "#fff",
    marginVertical: 15,
  },
  input: {
    width: "100%",
    height: 50,
    color: "#ffffff",
    backgroundColor: "#2c2f3f",
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  forgotPassContainer: {
    alignSelf: "flex-end",
  },
  forgotPass: {
    color: "#b3b3b3",
    textDecorationLine: "underline",
  },
  button: {
    width: "100%",
    height: 60,
    backgroundColor: "#e8e9eb",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#20222a",
    fontSize: 18,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  inputError: {
    borderColor: "red",
    borderWidth: 1,
  },
});
