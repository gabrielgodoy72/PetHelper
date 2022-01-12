import { Image, OverlayTrigger, Tooltip } from "react-bootstrap"

const LocationPin = ({ lat, lng, text }) => {
  return (
    <OverlayTrigger placement="top" overlay={<Tooltip>{text}</Tooltip>}>
      <Image src="/location-pin.png" width='20px'/>
    </OverlayTrigger>
  );
};

export default LocationPin;
