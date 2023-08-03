import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useState, useEffect } from "react";
import { Footer } from "../components/FooterContent/Footer";

export const Map = ({ navigation }) => {
  const [currentLat, setCurrentLat] = useState();
  const [currentLng, setCurrentLng] = useState();
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    const getCurrentPos = async () => {
      const { coords } = await Location.getCurrentPositionAsync();
      setCurrentLat(coords.latitude);
      setCurrentLng(coords.longitude);

      //   setMarkers([[currentLat, currentLng], ...markers]);
    };

    getCurrentPos();
  }, []);

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: currentLat,
          longitude: currentLng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      />
      {/* {markers.map((pos, key) => {
        return (
          <Marker
            key={key}
            coordinate={{
              latitude: pos[0],
              longitude: pos[1],
            }}
            title={"현재 위치"}
          />
        );
      })} */}
      <Footer navigation={navigation} />
    </>
  );
};
