import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  itemText: {
    fontSize: 19,
    color: "#fff",
  },
  iconContainer: {
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#262a35",
    borderRadius: 100,
  },
  itemBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  accountItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  email: {
    color: "#bdbcbd",
    fontSize: 15,
  },
  username: {
    fontSize: 20,
    color: "#fff",
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  profileContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "#2d3036",
    borderBottomWidth: 2,
    gap: 7,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  logo: {
    fontSize: 30,
  },
  headerContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  name: {
    color: "#fff",
    fontSize: 27,
    fontWeight: "600",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
    backgroundColor: "#181a21",
    gap: 20,
  },
});
