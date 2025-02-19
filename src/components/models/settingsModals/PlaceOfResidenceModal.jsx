import React, { useState, useRef } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { IoMdClose } from "react-icons/io";
import StandardModal from "../StandardModal";

const mapContainerStyle = {
  width: "100%",
  height: "300px",
  borderRadius: "12px",
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const PlaceOfResidenceModal = ({ isOpen, onClose, onSelectLocation }) => {
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCE8oZ_Ri2mRNj4fklauAOEzzFGp-d8Nis",
    libraries: ["places"],
  });

  const autocompleteRef = useRef(null);

  const handlePlaceSelect = () => {
    const place = autocompleteRef.current.getPlace();
    if (place && place.geometry) {
      const newLocation = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      setSelectedLocation(newLocation);
      onSelectLocation(newLocation);
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
              className="w-full rounded-full border border-[#F3F4F9] h-[50px] px-2 md:px-3"
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
