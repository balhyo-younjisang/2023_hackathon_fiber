import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { NavIcon } from "./NavIcon";
import { MoreIcon } from "./MoreIconButton";

export const Footer = ({ navigation }) => {
  const [showMoreIcon, setShowMoreIcon] = useState(false);

  const calenderIcon = require("../assets/icons/Calender.png");
  const lunchIcon = require("../assets/icons/lunch.png");
  const calcIcon = require("../assets/icons/Calculator.png");
  const todoIcon = require("../assets/icons/Todo.png");
  const mainIcon = require("../assets/icons/Main.png");

  const handleShowMoreIcon = () => {
    setShowMoreIcon(!showMoreIcon);
  };

  return (
    <>
      {showMoreIcon && (
        <>
          <View style={styles.moreIconsContainer}>
            <MoreIcon src={calenderIcon} navigation={navigation} />
            <MoreIcon
              src={calenderIcon}
              navigation={navigation}
              marginBottom={20}
            />
            <MoreIcon src={calenderIcon} navigation={navigation} />
          </View>
        </>
      )}
      <View style={styles.container}>
        <NavIcon src={calenderIcon} navigation={navigation} href="Cal" />
        <NavIcon src={lunchIcon} navigation={navigation} href="Join" />

        <TouchableOpacity onPress={() => handleShowMoreIcon()}>
          <View style={styles.circle}>
            <Image source={mainIcon} />
          </View>
        </TouchableOpacity>

        <NavIcon src={calcIcon} navigation={navigation} href="Join" />
        <NavIcon src={todoIcon} navigation={navigation} href="Join" />
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
