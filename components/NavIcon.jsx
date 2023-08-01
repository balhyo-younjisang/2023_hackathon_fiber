import { TouchableOpacity, Image } from "react-native";

//                       navigation 객체, 이미지 경로, 아이콘 클릭 시 이동할 경로
export const NavIcon = ({ navigation, src, href }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(href)}>
        <Image source={src}></Image>
      </TouchableOpacity>
    </>
  );
};
