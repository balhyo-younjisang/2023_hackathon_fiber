import { StyleSheet, View, Text } from "react-native";
import { useRecoilState } from "recoil";
import { currentUserInfo } from "../../store/atom";

import { getData } from "../../utils/asyncStorage";
import { useState, useEffect } from "react";

export const NameContainer = () => {
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const getUserInfo = async () => {
      const userInfo = await getData("user");

      setCurrentUser(userInfo);
    };

    getUserInfo();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.rank}>이병</Text>
        <Text style={styles.name}>{currentUser}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    borderBottomColor: "gray",
    borderBottomWidth: 2,
    margin: 10,
  },

  rank: {
    fontFamily: "BlackHanSans",
    fontSize: 19,
    color: "white",
  },

  name: {
    fontFamily: "BlackHanSans",
    fontSize: 25,
    color: "white",
  },
});
