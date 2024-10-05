import React, { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const defaultPosition = { lat: 50.8170964, lng: 12.9357714 };

const MapWithLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [currentPosition, setCurrentPosition] = useState<{lat: number;lng: number;}>(defaultPosition);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.error("Error retrieving location");
        }
      );
    }
  }, []);

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className=" justify-center my-3">
      <div className="container px-6 py-10 mx-auto mt-8 flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2">
          <div className="w-full border shadow-lg rounded px-8 pt-6 pb-8 mb-4 mx-auto">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentPosition}
              zoom={15}
            >
              <Marker position={currentPosition} />
            </GoogleMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapWithLocation;
