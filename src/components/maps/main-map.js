import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useCallback } from "react";
import styled from "styled-components";

const mapContainerStyle = {
  width: "500px",
  height: "500px",
  borderRadius: "10px",
};

const center = {
  lat: 22.479431573642387,
  lng: -83.76793246671245,
};

const portland = {
  lat: 45.512359076694025,
  lng: -122.62552755809351,
};

const seattle = {
  lat: 47.54522514901589,
  lng: -122.3216516502634,
};

const oakland = {
  lat: 37.808123100884046,
  lng: -122.2501924320138,
};

const sanfran = {
  lat: 37.772200831706805,
  lng: -122.45766729517509,
};

const monterey = {
  lat: 36.61619346845562,
  lng: -121.90191862496427,
};

const losangeles = {
  lat: 34.018795251541015,
  lng: -118.49261637166784,
};

const sandiego = {
  lat: 32.7242918,
  lng: -117.1683419,
};

const culiacan = {
  lat: 24.808279796028675,
  lng: -107.38657342271911,
};

const mazatlan = {
  lat: 23.24354939092022,
  lng: -106.44842395559984,
};

const sanpancho = {
  lat: 20.9030185,
  lng: -105.4156573,
};

const guadalajara = {
  lat: 20.672975927669984,
  lng: -103.35904804752992,
};

const sanmiguel = {
  lat: 20.914434736925376,
  lng: -100.74550833655884,
};

const cdmx = {
  lat: 19.419604630135037,
  lng: -99.18634925800836,
};

const costarica = {
  lat: 10.538145585009858,
  lng: -83.50428819013266,
};

const bogota = {
  lat: 4.719735651249472,
  lng: -74.07374473771112,
};

const guatape = {
  lat: 6.231602509775182,
  lng: -75.15560722306948,
};

const riodejaneiro = {
  lat: -22.973096876884195,
  lng: -43.18427126525455,
};

// Add other locations (seattle, oakland, etc.)

function MainMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Use API key directly from .env
  });

  const onLoad = useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(portland);
    return bounds;
  }, []);

  const onUnmount = useCallback(function callback() {}, []);

  return isLoaded ? (
    <Container>
      <Title>Where we've been</Title>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={2.5}
        center={center}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={portland} />
        <Marker position={seattle} />
        <Marker position={oakland} />
        <Marker position={sanfran} />
        <Marker position={monterey} />
        <Marker position={losangeles} />
        <Marker position={sandiego} />
        <Marker position={culiacan} />
        <Marker position={mazatlan} />
        <Marker position={sanpancho} />
        <Marker position={guadalajara} />
        <Marker position={sanmiguel} />
        <Marker position={cdmx} />
        <Marker position={costarica} />
        <Marker position={bogota} />
        <Marker position={guatape} />
        <Marker position={riodejaneiro} />
      </GoogleMap>
    </Container>
  ) : loadError ? (
    <div>Error loading maps</div>
  ) : (
    <div>Loading maps</div>
  );
}

export default React.memo(MainMap);

const Title = styled.div`
  font-family: "Shrikhand", serif;
  text-align: center;
  font-size: 30px;
  margin-top: 10px;
  color: #006642;
`;

const Container = styled.div`
  background-color: #effded;
  border-radius: 10px;
  display: grid;
  justify-items: center;
  padding: 10px;
`;
