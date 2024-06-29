import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import React from 'react';
import styled from 'styled-components';




const mapContainerStyle = {
  width: '500px', 
  height: '500px', 
  borderRadius: '10px', 
};

const center = {
 lat: 41.18712773588114, 
 lng: -107.75307365840668
 
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

const sandiego = {
  lat: 32.7242918,
  lng:  -117.1683419
};

const culiacan = {
  lat: 24.808279796028675,
  lng:  -107.38657342271911
};

const mazatlan = {
  lat:  23.24354939092022,
  lng: -106.44842395559984
};

const sanpancho = {
  lat: 20.9030185,
  lng:  -105.4156573
};

const guadalajara = {
  lat: 20.672975927669984, 
  lng: -103.35904804752992
}
const sanmiguel = {
  lat: 20.914434736925376, 
  lng:-100.74550833655884
}
const cdmx = {
  lat: 19.419604630135037, 
  lng: -99.18634925800836
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
    
  <Container>
      
    <Title>Where we've been</Title>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={3.5}
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
          
        </GoogleMap>
    </Container>
      
    
  ) : loadError ? (
    <div>Error loading maps</div>
    ) : (
      <div>Loading maps</div>
  );
};

export default React.memo(MainMap)




const Title = styled.div`
font-family: "Shrikhand", serif;
text-align: center;
font-size: 30px;
margin-top: 10px;
color: #006642;
`
const Container = styled.div`
background-color: #effded;

border-radius: 10px;
display: grid;

justify-items: center; 
padding: 10px;
`