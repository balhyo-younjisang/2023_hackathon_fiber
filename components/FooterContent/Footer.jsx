import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { NavIcon } from "./NavIcon";
import { MoreIcon } from "./MoreIconButton";
import { ImagePath } from "../../utils/IconPath";

export const Footer = ({ navigation }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false);

  const handleShowMoreIcon = () => {
    setShowMoreIcon(!showMoreIcon);
  };

  return (
    <>
      {showMoreIcon && (
        <>
          <View style={styles.moreIconsContainer}>
            <MoreIcon src={ImagePath.MIC} navigation={navigation} href="" />
            <MoreIcon
              src={ImagePath.HOME}
              navigation={navigation}
              href="Home"
            />
            <MoreIcon
              src={ImagePath.SETTING}
              navigation={navigation}
              href="Setting"
            />
          </View>
        </>
      )}
      <View style={styles.container}>
        <NavIcon
          src={ImagePath.CALENDAR}
          navigation={navigation}
          href="Login"
        />
        <NavIcon src={ImagePath.LUNCH} navigation={navigation} href="Menu" />

        <TouchableOpacity onPress={() => handleShowMoreIcon()}>
          <View style={styles.circle}>
            <Image source={ImagePath.MAIN} />
          </View>
        </TouchableOpacity>

        <NavIcon src={ImagePath.MAP} navigation={navigation} href="Map" />
        <NavIcon src={ImagePath.POST} navigation={navigation} href="Join" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: "10%",
    backgroundColor: "#F6F6F6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    elevation: 5,
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },

  moreIconsContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: "10%",
    height: 70,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
  },

  circle: {
    width: 60,
    height: 60,
    backgroundColor: "#D9D9D9",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
});
