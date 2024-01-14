import { useState } from "react";
import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { Box } from "@mui/material";
import { InputMargin } from "../../constants";

const MapContainer = () => {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: 33.513674,
    lng: 36.276526,
  });

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    // Update the selectedLocation state when the map is clicked
    setSelectedLocation({
      lat: e.latLng?.lat() as number,
      lng: e.latLng?.lng() as number,
    });
  };
  console.log(selectedLocation);

  return (
    <Box sx={{ width: "100%", height: "300px", mb: InputMargin }}>
      <LoadScript
        googleMapsApiKey={`${
          import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY
        }`}
      >
        <GoogleMap
          mapContainerStyle={{ height: "100%", width: "100%" }}
          zoom={15}
          center={selectedLocation}
          onClick={handleMapClick}
        >
          {/* Display the selected location as a Marker */}
          <Marker position={selectedLocation} />

          {/* You can add other components or UI elements here */}
        </GoogleMap>
      </LoadScript>
    </Box>
  );
};

export default MapContainer;
