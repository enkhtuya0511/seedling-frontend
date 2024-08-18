import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    fontSize: 23,
    fontWeight: "600",
  },
  dropdown: {
    marginHorizontal: 16,
    marginVertical: 10,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  innerContainer: {
    backgroundColor: "#fff",
    color: "#000000",
    padding: 20,
    borderRadius: 10,
    width: "94%",
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 3,
  },
  desc: {
    fontSize: 13,
    fontWeight: "100",
  },
  button: {
    margin: 14,
    height: 50,
    borderColor: "#181a21",
    borderWidth: 1.5,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  categories: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: 20,
    marginBottom: 20,
  },
  category: {
    fontSize: 16,
    fontWeight: "semibold",
    paddingLeft: 5,
  },
  categoryContainer: {
    gap: 10,
    padding: 20,
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
});
