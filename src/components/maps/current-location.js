import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";
import "./current-location.css";

const mapContainerStyle = {
  width: "275px",
  height: "275px",
  borderRadius: "10px",
};

const riodejaneiro = {
  lat: -22.973096876884195,
  lng: -43.18427126525455,
};

function CurrentLocationMap() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(riodejaneiro);
    return bounds;
  }, []);

  const onUnmount = React.useCallback(function callback() {}, []);

  return isLoaded ? (
    <div className="map-container">
      <div>
        <h2 className="map-title">Current Location</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={riodejaneiro}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={riodejaneiro} />
        </GoogleMap>
      </div>
    </div>
  ) : loadError ? (
    <div>Error loading maps</div>
  ) : (
    <div>Loading maps</div>
  );
}

export default React.memo(CurrentLocationMap);
