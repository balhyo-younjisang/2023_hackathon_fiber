import { StyleSheet, View, Text } from "react-native";

export const NameContainer = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.rank}>이병</Text>
        <Text style={styles.name}>윤지상</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    margin: 10,
  },

  rank: {
    fontFamily: "BlackHanSans",
    fontSize: 19,
  },

  name: {
    fontFamily: "BlackHanSans",
    fontSize: 25,
  },
});
