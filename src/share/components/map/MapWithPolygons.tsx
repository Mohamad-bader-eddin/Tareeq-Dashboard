import { GoogleMap, LoadScript, Polygon } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 51.509,
  lng: -0.08,
};

const polygonPaths = [
  { lat: 51.509, lng: -0.08 },
  { lat: 51.503, lng: -0.06 },
  { lat: 51.51, lng: -0.047 },
];

const MapWithPolygons = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCiyuZuf6jsA7mtfN_Q25tGuPEJyh4zTZA">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
        <Polygon
          paths={polygonPaths}
          options={{
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            fillOpacity: 0.35,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapWithPolygons;
