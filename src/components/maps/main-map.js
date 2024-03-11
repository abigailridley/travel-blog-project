import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
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
const seattle ={
  lat: 47.54522514901589, 
  lng: -122.3216516502634
}

function MainMap () {
  const { isLoaded, loadError} = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDBPlDo3ZffAlsGwLaDF2mvj5m1md3qogc',
   
  });

  const onLoad = React.useCallback(function callback() {
    const bounds = new window.google.maps.LatLngBounds(portland);
    return (bounds)
  }, [])

  const onUnmount = React.useCallback(function callback(){}, [])

  return isLoaded ? (
    <div className="map-container">
      
      <div>
      <h2 className="map-title">Where we've been</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={portland}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={portland} />
          <Marker position={seattle} />
        </GoogleMap>
      </div>
      
    </div>
  ) : loadError ? (
    <div>Error loading maps</div>
    ) : (
      <div>Loading maps</div>
  );
};

export default React.memo(MainMap)




