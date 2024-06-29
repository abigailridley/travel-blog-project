import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './current-location.css';
import React from 'react';



const mapContainerStyle = {
  width: '275px', 
  height: '275px', 
  borderRadius: '10px', 
};

const cdmx = {
 lat: 19.419604630135037, 
 lng: -99.18634925800836
}



function CurrentLocationMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(cdmx);
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
          center={cdmx}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={cdmx} />
        
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




