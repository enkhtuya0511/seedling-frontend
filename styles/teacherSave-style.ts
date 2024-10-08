import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: "#181a21",
    gap: 20,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  infoBox: {
    width: "100%",
    gap: 10,
  },
  tutorInfoBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  gap: {
    flexDirection: "row",
    gap: 5,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    position: "absolute",
    right: 0,
    top: 0,
  },
  courseBox: {
    backgroundColor: "#F6F7FB",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#334155",
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    alignItems: "flex-start",
    justifyContent: "center",
    width: 370,
    height: "auto",
    marginBottom: 20,
    position: "relative",
  },
  name: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "600",
  },
  title: {
    color: "#334155",
    fontSize: 17,
    // width: "95%",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
  },
  enroll: {
    width: 100,
    height: 30,
    borderColor: "black",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 40,
    shadowColor: "#334155",
    shadowOpacity: 0.7,
    shadowRadius: 15,
  },
  logo: {
    fontSize: 30,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },
});
