import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
// import './current-location.css';



const mapContainerStyle = {
  width: '290px', 
  height: '290px', 
  borderRadius: '10px', 
};

const center = {
  // lat:   42.41077096333509,
  // lng:   -123.44478414481655
  lat: 42.857164919166394, 
  lng: -118.05956862267394
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

const losangeles = {
  lat: 34.018795251541015,
  lng:  -118.49261637166784 
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
          zoom={4}
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




