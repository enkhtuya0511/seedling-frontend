import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#181a21",
  },
  scrollStyle: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 50,
    gap: 10,
  },
  modalScrollStyle: {
    display: "flex",
    alignItems: "center",
    paddingVertical: 20,
    gap: 10,
  },
  dropdown: {
    marginHorizontal: 16,
    marginVertical: 1,
    height: 50,
    width: 250,
    backgroundColor: "#fff",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#000000",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#000000",
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
  valuesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  valueText: {
    fontSize: 16,
    color: "#fff",
  },
  sliderContainer: {
    marginVertical: 20,
  },
  track: {
    height: 4,
    // backgroundColor: "#ddd",
    backgroundColor: "#fff",
  },
  selectedTrack: {
    height: 4,
    // backgroundColor: "#3b9", //-----
    backgroundColor: "#fff",
  },
  marker: {
    // backgroundColor: "#3b9", // oo
    backgroundColor: "#fff", // oo
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pressedMarker: {
    backgroundColor: "green",
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectedStyle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 14,
    backgroundColor: "white",
    shadowColor: "#000",
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  loadingStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingLeft: 20,
  },
  logo: {
    fontSize: 30,
  },
  name: {
    color: "#fff",
    fontSize: 23,
    fontWeight: "600",
  },
  filterButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  filterCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  subjectsCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "pink",
    paddingRight: 15,
  },
  clearButton: {
    backgroundColor: "#fff",
    width: 50,
    height: 50,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  modalCon: {
    flex: 1,
    backgroundColor: "#181a21",
    paddingHorizontal: 40,
    paddingVertical: 60,
    minHeight: 950,
  },
});
