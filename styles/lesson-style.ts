import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
    paddingVertical: 50,
  },
  profileContainer: {
    flexDirection: "row",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileDetails: {
    justifyContent: "center",
    gap: 4,
  },
  profileName: {
    fontSize: 17,
    fontWeight: "bold",
  },
  profileInfo: {
    fontSize: 14,
    color: "#555",
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  reviewDate: {
    fontSize: 14,
    color: "#888",
  },
  reviewText: {
    fontSize: 16,
  },
  resumeContainer: {
    marginBottom: 20,
  },
  resumeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  resumeItem: {
    marginBottom: 10,
  },
  resumeText: {
    fontSize: 16,
  },
  buttonContainer: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#dcdce9",
  },
  iconsContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 15,
  },
  iconContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    width: "100%",
    paddingBottom: 10,
    paddingLeft: 5,
  },
  courseDetailItem: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    gap: 5,
  },
  courseDetailLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#333",
  },
  courseDetailValue: {
    fontSize: 16,
    color: "#555",
  },
  videoContainer: {
    marginBottom: 20,
  },
  video: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  videoStatusContainer: {
    marginTop: 5,
  },
  videoStatusText: {
    fontSize: 14,
    color: "#555",
  },
});
