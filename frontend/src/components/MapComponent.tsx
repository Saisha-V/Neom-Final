import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default icon issue for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent = () => {
  // Array of marker positions and their popup content
  const markers = [
    { position: [28.7041, 77.1025], popup: "New Delhi" }, // Capital city
    { position: [19.076, 72.8777], popup: "Mumbai" }, // Financial capital
    { position: [13.0827, 80.2707], popup: "Chennai" }, // Major city in South India
    { position: [12.9716, 77.5946], popup: "Bengaluru" }, // Tech hub
    { position: [22.5726, 88.3639], popup: "Kolkata" }, // Cultural capital of India
    { position: [26.9124, 75.7873], popup: "Jaipur" }, // Pink city
  ];

  return (
    <>
      <div className="text-center pb-10 bg-[#F9F7F2]">
        <h3 className="text-2xl text-gray-800 font- tracking-wide font-ivy font-light bg-[#F9F7F2]">
          Find events on map
        </h3>
      </div>
      <div className="px-40 pb-20 bg-[#F9F7F2]">
        <MapContainer
          center={[28.6277, 77.3684]}
          zoom={5}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position}>
              <Popup>{marker.popup}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
