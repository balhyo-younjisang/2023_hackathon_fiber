import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { ImagePath } from "../../utils/IconPath";
import { useEffect, useState } from "react";

export const MenuDetail = (props) => {
  const [mealTime, setMealTime] = useState();

  useEffect(() => {
    const time = props.time;

    if (time === "아침") setMealTime("brst");
    else if (time === "점심") setMealTime("lunc");
    else if (time === "저녁") setMealTime("dinr");
    else setMealTime("prdtnm");
  }, [props.time]);

  return (
    <>
      <TouchableOpacity onPress={props.onClick}>
        <View style={dstyles(props.isShowMenu).listWrap}>
          <Image source={props.iconSrc} />
          <Text style={styles.title}>{`${props.time}메뉴`}</Text>
          <Image source={ImagePath.PLUS} />
        </View>
        {props.isShowMenu && (
          <>
            <View style={styles.detail}>
              {props.menuData.map((data, key) => {
                return (
                  <Text key={key} style={styles.menu}>
                    {data[`${mealTime}`]}
                  </Text>
                );
              })}
            </View>
          </>
        )}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "BlackHanSans",
    fontSize: 18,
  },

  detail: {
    backgroundColor: "#DADADA",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  menu: {
    fontFamily: "BlackHanSans",
    padding: 10,
    textAlign: "center",
  },
});

const dstyles = (isShowMenu) =>
  StyleSheet.create({
    listWrap: {
      flexDirection: "row",
      borderBottomRightRadius: isShowMenu ? 0 : 10,
      borderBottomLeftRadius: isShowMenu ? 0 : 10,
      borderRadius: 10,
      backgroundColor: "#D9D9D9",
      width: 250,
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 50,
      justifyContent: "flex-start",
      justifyContent: "space-around",
    },
  });
