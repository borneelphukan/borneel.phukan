import React, { useEffect, useRef } from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import CircularScrollProgressBar from "@/components/common/CircularProgressBar";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const fixedPosition = { lat: 50.8170964, lng: 12.9357714 };

const MapWithLocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    language: "en",
    region: "US",
    libraries: ["marker"],
  });

  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const onMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;

    markerRef.current = new google.maps.marker.AdvancedMarkerElement({
      map: map,
      position: fixedPosition,
      title: "My Location",
    });
  };

  useEffect(() => {
    return () => {
      if (markerRef.current) {
        markerRef.current.map = null;
        markerRef.current = null;
      }
    };
  }, []);

  if (loadError) return <div>Error loading map: {loadError.message}</div>;
  if (!isLoaded)
    return (
      <div>
        <CircularScrollProgressBar />
      </div>
    );

  return (
    <div className="justify-center my-10">
      <div className="w-full border shadow-lg rounded px-0 pt-0 pb-0 mb-4 mx-auto">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={fixedPosition}
          zoom={15}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            mapId: process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID,
          }}
          onLoad={onMapLoad}
        ></GoogleMap>
      </div>
    </div>
  );
};

export default MapWithLocation;
