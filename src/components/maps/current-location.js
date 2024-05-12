import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './current-location.css';
import React from 'react';



const mapContainerStyle = {
  width: '275px', 
  height: '275px', 
  borderRadius: '10px', 
};

const sandiego = {
  lat: 32.7242918,
  lng:  -117.1683419
};

function CurrentLocationMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(sandiego);
    return (bounds)
  }, [])

  const onUnmount = React.useCallback(function callback(){}, [])

  return isLoaded ? (
    <div className="map-container">
      
      <div>
      <h2 className="map-title">Current Location</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={9}
          center={sandiego}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={sandiego} />
        
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




