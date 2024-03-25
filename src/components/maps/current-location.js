import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './current-location.css';
import React from 'react';



const mapContainerStyle = {
  width: '300px', 
  height: '300px', 
  borderRadius: '10px', 
};

const sanfran = {
  lat:  37.772200831706805,
  lng:  -122.45766729517509
};

function CurrentLocationMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(sanfran);
    return (bounds)
  }, [])

  const onUnmount = React.useCallback(function callback(){}, [])

  return isLoaded ? (
    <div className="map-container">
      
      <div>
      <h2 className="map-title">Current Location</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={sanfran}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={sanfran} />
        
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




