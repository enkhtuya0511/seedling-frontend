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
    paddingHorizontal: 20,
    gap: 10,
  },
  dropdown: {
    marginHorizontal: 16,
    marginVertical: 10,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    //
    width: 200,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
    color: "#fff",
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "#fff",
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
    backgroundColor: "#ddd",
  },
  selectedTrack: {
    height: 4,
    backgroundColor: "#3b9", //-----
  },
  marker: {
    backgroundColor: "#3b9", // oo
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  pressedMarker: {
    backgroundColor: "#1a6",
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
});
