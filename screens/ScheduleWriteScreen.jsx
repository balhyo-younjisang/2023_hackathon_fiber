import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { loadingFont } from "../utils/LoadingFonts";
import { TitleInput } from "../components/TitleInput";

export const Write = ({}) => {
    const[isReady, setIsReady] = useState(false);

    useEffect(() => {
        loadingFont().then(() => {
            setIsReady(true);
        });
    }, []);

    return (
        <View style={styles.container}>
            {isReady && (
                <>
                    <View style={styles.header}>
                        <Text style={styles.cancel}>취소</Text>
                        <Text style={styles.WrtieBtn}>작성</Text>
                    </View>
                    <TitleInput />
                </>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
    },
    header: {
        width: "100%",
        height: 50,
        backgroundColor: "#ccc",

    },
    cancel: {
        fontFamily: "BlackHanSans",
        color: "red",
        fontSize: 20,
        position: "relative",
        top: 17,
        left: 20,
    },
    WrtieBtn: {
        fontFamily: "BlackHanSans",
        color: "blue",
        fontSize: 20,
        position: "relative",
        bottom: 3,
        left: 360,
    },
    WriteIcon: {
        position: "relative",
        left: 200,
        top: 20,

    },

})