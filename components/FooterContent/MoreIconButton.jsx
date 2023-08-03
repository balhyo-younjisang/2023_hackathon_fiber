import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoreIcon = ({ src, navigation, href }) => {
  return (
    <>
      <TouchableOpacity
        style={styles.circle}
        onPress={() => navigation.navigate(href)}
      >
        <Image source={src}></Image>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});
