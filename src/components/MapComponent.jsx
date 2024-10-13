import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  const mapContainerStyle = { height: '100vh', width: '100vw' };

  // Check if location is provided and valid
  if (!location || !location.lat || !location.lng) {
    return <div>Invalid location data</div>; 
  }

  return (
    <LoadScript googleMapsApiKey="AIzaSyC_3hizGJXPaJrpL-EkONx46lBQMzzKG-A">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={location}
        zoom={12}
        options={{
          disableDefaultUI: true, 
          zoomControl: true,       
        }}
      >
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;