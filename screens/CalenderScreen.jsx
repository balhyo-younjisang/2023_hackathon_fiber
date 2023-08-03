import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { loadingFont } from "../utils/LoadingFonts";

import { CalenderView } from "../components/CalenderContainer";
import { Footer } from "../components/Footer";
import { Schedule } from "../components/ScheduleContainer";

export const Cal = ({ navigation }) => {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        loadingFont().then(() => {
          setIsReady(true);
        });
      }, []);
    
    return (
        <View style={styles.container}>
            {isReady && (
                <>
                    <CalenderView />
                    <Schedule />
                    <Footer navigation={navigation} />
                </>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});