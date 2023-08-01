import AsyncStorage from "@react-native-async-storage/async-storage";

/** 데이터를 AsyncStorage에 저장하는 함수 */
export const storeData = async (key, value) => {
    try {
        const stringValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, stringValue);
    } catch (e) {
        console.error(e.message);
    }
}

/** AsyncStorage에 저장된 데이터를 가져오는 함수 */
export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        if (value !== null) {
            const data = JSON.parse(value);
            return data;
        }
    } catch (e) {
        console.log(e.message);
    }
};

/** AsyncStorage에 저장된 데이터를 삭제하는 함수 */
export const removeData = async (key) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error(e.message);
    }
};