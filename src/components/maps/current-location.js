import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './current-location.css';
import React from 'react';



const mapContainerStyle = {
  width: '300px', 
  height: '300px', 
  borderRadius: '10px', 
};

const portland = {
  lat:  45.512359076694025,
  lng: -122.62552755809351,
  
};

function CurrentLocationMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(portland);
    return ( bounds)
  }, [])

  const onUnmount = React.useCallback(function callback(){}, [])

  return isLoaded ? (
    <div className="map-container">
      
      <div>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={portland}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={portland} />
        </GoogleMap>
      </div>
      <h2 className="map-title">Current Location</h2>
    </div>
  ) : loadError ? (
    <div>Error loading maps</div>
    ) : (
      <div>Loading maps</div>
  );
};

export default React.memo(CurrentLocationMap)




