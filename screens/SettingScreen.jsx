import { SettingContainer } from "../components/SettingContent/SettingContainer";
import { getData } from "../utils/asyncStorage";
import { useState, useEffect } from "react";
import { Footer } from "../components/FooterContent/Footer";

export const Setting = ({ navigation }) => {
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
      <SettingContainer userInfo={currentUser} navigation={navigation} />
      <Footer navigation={navigation} />
    </>
  );
};
