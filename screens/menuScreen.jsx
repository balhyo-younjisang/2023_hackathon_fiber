import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { MenuHeader } from "../components/MenuContent/MenuHeader";
import { MenuDetail } from "../components/MenuContent/MenuDetail";
import { Footer } from "../components/FooterContent/Footer";
import { ImagePath } from "../utils/IconPath";
import { getMenu, getPxMenu } from "../apis/menu";

export const Menu = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState({
    breakfast: false,
    lunch: false,
    dinner: false,
    px: false,
  });

  const [sumCal, setSumCal] = useState();
  const [menu, setMenu] = useState();
  const [pxMenu, setPxMenu] = useState();

  const handleToggleMenu = (menu) => {
    setMenuVisible({
      ...menuVisible,
      [menu]: !menuVisible[menu],
    });
  };

  useEffect(() => {
    const getMenuData = async () => {
      const menuData = await getMenu();
      const pxData = await getPxMenu();

      setSumCal(menuData.sumCal);
      setMenu(menuData.data);
      setPxMenu(pxData.data);
    };

    getMenuData();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <MenuHeader sumCal={sumCal} />
        <View style={styles.contentContainer}>
          <View style={styles.scrollContainer}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              <MenuDetail
                onClick={() => handleToggleMenu("breakfast")}
                time="아침"
                iconSrc={ImagePath.MORNING_ICON}
                isShowMenu={menuVisible.breakfast}
                menuData={menu}
              />
              <MenuDetail
                onClick={() => handleToggleMenu("lunch")}
                time="점심"
                iconSrc={ImagePath.LUNCH_ICON}
                isShowMenu={menuVisible.lunch}
                menuData={menu}
              />
              <MenuDetail
                onClick={() => handleToggleMenu("dinner")}
                time="저녁"
                iconSrc={ImagePath.DINNER_ICON}
                isShowMenu={menuVisible.dinner}
                menuData={menu}
              />
              <MenuDetail
                time="PK 인기"
                iconSrc={ImagePath.PX}
                isShowMenu={menuVisible.px}
                menuData={pxMenu}
                onClick={() => handleToggleMenu("px")}
              />
            </ScrollView>
          </View>
        </View>
      </View>
      <Footer navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
  },

  contentContainer: {
    width: "100%",
    height: "90%",
  },

  scrollContainer: {
    width: "100%",
    height: "80%",
    alignItems: "center",
  },

  haibamenu: {
    fontSize: 30,
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  menuList: {
    padding: 10,
    backgroundColor: "#D9D9D9", // 리스트의 배경색을 원하는 색상으로 변경 가능
    borderRadius: 5,
  },
});
