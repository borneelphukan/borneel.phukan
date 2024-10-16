import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const fixedPosition = { lat: 50.8170964, lng: 12.9357714 };

const MapWithLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });
  

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="justify-center my-10">
      <div className="w-full border shadow-lg rounded px-0 pt-0 pb-0 mb-4 mx-auto">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={fixedPosition}
          zoom={15}
        >
          <Marker position={fixedPosition} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapWithLocation;
