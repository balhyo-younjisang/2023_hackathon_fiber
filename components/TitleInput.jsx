import { TextInput, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import { loadingFont } from "../utils/LoadingFonts";

export const TitleInput = ({}) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        loadingFont().then(() => {
        setIsReady(true);
        });
    }, []);

    return (
        <View>
            {isReady && (
            <>
                <TextInput 
                style={styles.input}
                value={title}
                returnKeyType="next"
                />
            </>
        )}
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
    },
});