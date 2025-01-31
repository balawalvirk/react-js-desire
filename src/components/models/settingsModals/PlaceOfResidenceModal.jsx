import React, { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { GoStopwatch } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { TbArrowCurveRight } from "react-icons/tb";
import StandardModal from "../StandardModal";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const PlaceOfResidenceModal = ({ isOpen, onClose }) => {
  const [selectedLocation, setSelectedLocation] = useState(center);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    libraries: ["places"],
  });

  const autocompleteRef = useRef(null);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      setSelectedLocation({
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      });
    }
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <StandardModal isOpen={isOpen} onClose={onClose}>
      <div>
        <div className="flex justify-between mb-6">
          <p className="text-xl font-bold">Select City</p>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        <div className="mb-5">
          <Autocomplete
            onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
            onPlaceChanged={handlePlaceSelect}
          >
            <input
              className="w-full border border-[#F3F4F9] h-[50px] px-3"
              placeholder="Search a location"
              type="text"
            />
          </Autocomplete>
        </div>

        <div className="relative">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={selectedLocation}
          >
            <Marker position={selectedLocation} />
          </GoogleMap>
        </div>
      </div>
    </StandardModal>
  );
};

export default PlaceOfResidenceModal;
