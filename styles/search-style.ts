import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },
  text: {
    fontSize: 14,
    lineHeight: 22,
    color: "#fff",
  },
  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 160,
    paddingHorizontal: 40,
    gap: 15,
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 7,
    paddingBottom: 100,
  },
  button: {
    width: 350,
    height: 53,
    backgroundColor: "#35383f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  buttonText: {
    color: "#d7d8da",
    fontSize: 20,
    fontWeight: "bold",
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
  valuesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 30,
  },
  valueText: {
    fontSize: 16,
    color: "#fff",
  },
  daysContainer: {
    flexWrap: "wrap",
    display: "flex",
    width: "100%",
    gap: 10,
    flexDirection: "row",
  },
  loadingContainer: {
    justifyContent: "center",
    paddingTop: 0,
    paddingBottom: 100,
  },
  category: {
    width: 150,
    padding: 10,
    height: 80,
    backgroundColor: "#35383f",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
