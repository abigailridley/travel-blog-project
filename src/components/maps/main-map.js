import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
// import './current-location.css';



const mapContainerStyle = {
  width: '260px', 
  height: '260px', 
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
const oakland = {
  lat:  37.808123100884046,
  lng: -122.2501924320138
   
};

const sanfran = {
  lat:  37.772200831706805,
  lng:  -122.45766729517509
};

const monterey = {
  lat: 36.61619346845562,
  lng:   -121.90191862496427
  
};
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
    <div className="main-map-container">
      
      <div>
      <h2 className="main-map-title">Where we've been</h2>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={3}
          center={portland}
          onLoad={onLoad}
        onUnmount={onUnmount}
        >
          <Marker position={portland} />
          <Marker position={seattle} />
          <Marker position={oakland} />
          <Marker position={sanfran} />
          <Marker position={monterey} />
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




