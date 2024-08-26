import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  certificationsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  imageWrapper: {
    position: "relative",
    width: 150,
    height: 150,
    margin: 10,
  },
  certificationImage: {
    width: "100%",
    height: "100%",
  },
  loadingIndicator: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -12 }, { translateY: -12 }],
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  tabs: {
    flexDirection: "row",
    marginBottom: 20,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
    alignItems: "center",
  },
  activeTab: {
    borderBottomColor: "green",
  },
  tabText: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "left",
  },
  content: {
    flex: 1,
  },
  vidContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoContainer: {
    width: "100%",
    height: "100%",
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  loader: {
    position: "absolute",
    top: "50%",
    left: "50%",
    marginLeft: -20,
    marginTop: -20,
  },
  noVideoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
