import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './current-location.css';
import React from 'react';



const mapContainerStyle = {
  width: '300px', 
  height: '300px', 
  borderRadius: '10px', 
};

const portland = {
  lat: 45.51223,
  lng: -122.63075,
  
};

function CurrentLocationMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(portland);
    map.fitBounds(bounds);
  }, [])

  const onUnmount = React.useCallback(function callback(map){}, [])

  return isLoaded ? (
    <div className="map-container">
      <h2 className="map-title">Current Location</h2>
      <div className="rounded-map-container">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={portland}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={portland} />
        </GoogleMap>
      </div>
    </div>
  ) : loadError ? (
    <div>Error loading maps</div>
    ) : (
      <div>Loading maps</div>
  );
};

export default React.memo(CurrentLocationMap)




