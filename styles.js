import { StyleSheet, Platform } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: Platform.OS === "android" ? Constants.statusBarHeight : 0,
  },

  safeAreaView: {
    gap: 10,
  },

  logoView: {
    backgroundColor: "#393939",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "flex-start",
  },

  logo: {
    width: 60,
    height: 30,
    marginLeft: 10,
  },

  globalContent: {
    gap: 10,
  },

  filmInfos: {
    backgroundColor: "#212121",
    paddingLeft: 10,
    paddingTop: 10,
  },

  title: {
    color: "white",
    fontSize: 38,
    fontWeight: "400",
  },

  filmData: {
    flexDirection: "row",
    gap: 10,
  },

  textData: {
    color: "#868686",
  },

  imgAndResume: {
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
  },

  filmImg: {
    width: 105,
    height: 150,
  },

  filmResume: {
    gap: 15,
    width: 245,
  },

  resume: {
    color: "white",
  },

  button: {
    backgroundColor: "#0277BD",
    width: 245,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },

  textButton: {
    color: "#fff",
    fontWeight: "600",
  },

  rates: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 5,
  },

  star: {
    alignItems: "center",
    gap: 2,
    height: 70,
    width: 80,
  },

  rateStar: {
    flexDirection: "row",
    alignItems: "center",
  },

  rate01: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  rate02: {
    color: "#fff",
    fontSize: 12,
  },

  rateNumber: {
    color: "#727272",
    fontSize: 11,
  },

  emptyStar: {
    height: 70,
    width: 80,
    alignItems: "center",
    gap: 6,
  },

  emptyStarText: {
    color: "#fff",
    fontWeight: "800",
  },

  score: {
    height: 70,
    width: 90,
    alignItems: "center",
    gap: 5,
  },

  metascoreRate: {
    backgroundColor: "#62C750",
    width: 23,
    height: 23,
    alignItems: "center",
    justifyContent: "center",
  },

  metascoreNumber: {
    color: "#fff",
  },

  metascoreName: {
    color: "#fff",
    fontWeight: "600",
  },

  metascoreReviews: {
    color: "#727272",
    fontSize: 11,
  },

  actorInfos: {
    backgroundColor: "#212121",
    paddingLeft: 10,
    paddingBottom: 10,
  },

  cast: {
    gap: 10,
  },

  castTop: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  topTitle: {
    color: "#fff",
    fontSize: 22,
  },

  allButton: {
    marginRight: 10,
    fontSize: 12,
  },
  textSeeAllButton: {
    color: "#0277BD",
    fontWeight: "700",
  },

  actorsCarroussel: {
    flexDirection: "row",
    gap: 5,
  },

  actor: {
    backgroundColor: "#2A2A2A",
    width: 145,
    height: 275,
    gap: 10,
  },

  actorPic: {
    width: 145,
    height: 215,
  },

  actorRealName: {
    color: "#fff",
    marginLeft: 10,
  },

  characterName: {
    color: "#565656",
    marginLeft: 10,
  },

  bottomView: {
    gap: 3,
  },

  post: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },

  name: {
    color: "#565656",
    fontSize: 14,
  },
});

export default styles;
