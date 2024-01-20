import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { Markers } from "../views/types/AddPolygonsFormType";
import { FormikProps } from "formik";
import { Location } from "../views/types/AddPolygonsFormType";

const PolygonsMap = <T extends Record<string, unknown>>({
  formik,
}: PolygonsMapProps<T>) => {
  const [selectedMarkers, setSelectedMarkers] = useState<Markers[]>([]);
  const locations: Location[] = [];

  const handleMapClick = (e: google.maps.MapMouseEvent) => {
    // Update the selectedLocation state when the map is clicked
    setSelectedMarkers((prev) => [
      ...prev,
      {
        id: selectedMarkers.length + 1,
        position: {
          lat: e.latLng?.lat() as number,
          lng: e.latLng?.lng() as number,
        },
      },
    ]);
    selectedMarkers.forEach((loc) =>
      locations.push({
        latitude: loc.position.lat,
        longitude: loc.position.lng,
      })
    );
    locations.push({
      latitude: e.latLng?.lat() as number,
      longitude: e.latLng?.lng() as number,
    });
    formik.setFieldValue("locations", locations);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCiyuZuf6jsA7mtfN_Q25tGuPEJyh4zTZA">
      <GoogleMap
        center={{ lat: 33.513674, lng: 36.276526 }}
        zoom={13}
        mapContainerStyle={{ height: "400px", width: "100%" }}
        onClick={handleMapClick}
      >
        {selectedMarkers.map((marker) => (
          <Marker key={marker.id} position={marker.position}></Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

type PolygonsMapProps<T> = {
  formik: FormikProps<T>;
};

export default PolygonsMap;
