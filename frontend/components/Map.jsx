import { useEffect } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel, addMarker }) => {
  const styles = { height: "25vh", width: "100%" };

  useEffect(() => {}, [location]);
  return (
    <div style={styles}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCFjtXGJfVlgykwAEzkB2Hj3NjgmakdrgQ" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        onClick={addMarker}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
