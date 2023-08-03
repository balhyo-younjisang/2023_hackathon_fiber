import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { removeData } from "../../utils/asyncStorage";
import { currentUserInfo } from "../../store/atom";
import { useRecoilState, RecoilEnv } from "recoil";
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const LogoutButton = ({ navigation }) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserInfo);

  const handleLogout = () => {
    const removeUserData = async () => {
      await removeData("user");
    };

    removeUserData();
    setCurrentUser(undefined);

    navigation.navigate("Login");
  };

  return (
    <>
      <View>
        <TouchableOpacity onPress={handleLogout} style={stlyes.logoutBtn}>
          <Text style={stlyes.logoutText}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const stlyes = StyleSheet.create({
  logoutBtn: {
    marginTop: 20,
    width: 250,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#058C44",
    padding: 10,
    borderRadius: 5,
    bottom: -150,
  },

  logoutText: {
    color: "#fff",
    fontFamily: "BlackHanSans",
    fontSize: 20,
  },
});
