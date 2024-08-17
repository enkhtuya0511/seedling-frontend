import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 60,
    paddingHorizontal: 30,
    backgroundColor: "#181a21",
    gap: 25,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginVertical: 20,
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
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
  },
  innerContainer: {
    gap: 20,
    borderColor: "#282b33",
    borderTopWidth: 2,
    paddingVertical: 20,
  },
  labelText: {
    color: "#fff",
    fontSize: 14,
  },
  textCon: {
    gap: 8,
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
});
