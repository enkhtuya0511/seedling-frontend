import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#181a21",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  weight: {
    fontWeight: "bold",
  },
  itemBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "7%",
    marginTop: "10%",
    paddingHorizontal: 20,
    shadowColor: "white",
    shadowOpacity: 0.8,
    shadowRadius: 30,
  },

  textBox: {
    width: "80%",
    height: "55%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 300,
    height: 300,
    zIndex: 1,
  },
  text: {
    color: "white",
    fontSize: 28,
    paddingLeft: 10,
    fontWeight: "bold",
    textAlign: "center",
  },
  url: {
    width: 300,
    backgroundColor: "rgb(75 85 99)",
    height: "17%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    shadowColor: "white",
    shadowOpacity: 0.35,
    shadowRadius: 20,
  },
  url1: {
    width: 300,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});
