import { useEffect, useState } from "react";
import { loadingFont } from "../utils/LoadingFonts";
import { Svg, Line } from "react-native-svg";
import { Text, View, StyleSheet } from "react-native";
import { NavIcon } from "./NavIcon";

export const Schedule = ({ navigation }) => {
    const [isReady, setIsReady] = useState(false);
    const plusIcon = require("../assets/icons/Plus.png");

    useEffect(() => {
        loadingFont().then(() => {
            setIsReady(true);
        });
    }, []);

    return (
        <View style={styles.container}>
            {isReady && (
                <>
                    <Text style={styles.title}> 일정 </Text>
                    <Svg style={styles.line} height="2" width="80%">
                        <Line
                        x1="0%"
                        y1="0"
                        x2="100%"
                        y2="100%"
                        stroke="rgba(0, 0, 0, 0.2)"
                        strokeWidth="1"></Line>
                    </Svg>
                    <View style={styles.box}>

                    </View>
                    <NavIcon style={styles.plus} src={plusIcon} navigation={navigation} href="Write" />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: "center",
        fontFamily: "BlackHanSans",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 25,
    },
    line: {
        position: "relative",
        left: "10%",
    },
    box: {
        width: "100%",
        height: "58%",
    },
    plus: {
        width: 35,
        height: 35,
        left: "85%",
    },
});