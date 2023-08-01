import { Image, StyleSheet, TouchableOpacity } from "react-native";

export const MoreIcon = ({ src, navigation, marginBottom }) => {
  return (
    <>
      <TouchableOpacity
        style={styles(marginBottom).circle}
        onPress={() => navigation.navigate("Login")}
      >
        <Image source={src}></Image>
      </TouchableOpacity>
    </>
  );
};

const styles = (marginBottomValue) =>
  StyleSheet.create({
    circle: {
      width: 50,
      height: 50,
      backgroundColor: "#D9D9D9",
      borderRadius: 25,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: marginBottomValue ? marginBottomValue : null,
    },
  });
