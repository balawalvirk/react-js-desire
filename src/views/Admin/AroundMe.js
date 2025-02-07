import React, { useState, useCallback, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import boostIcon from "../../assets/images/boosticon.png";
import filtericon from "../../assets/images/filtericon.png";
import Icon from "../../components/icons/Icon";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const AroundMe = () => {
  const [modal, setModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter); // Track selected location

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyADMSrJ7cO5UoFG_1PwGU3OHwU4v6Ju7eA",
  });

  const onMapLoad = useCallback((map) => {
    console.log("Map Loaded", map);
  }, []);

  // Log selectedLocation whenever it updates
  useEffect(() => {
    console.log("Updated Location:", selectedLocation);
  }, [selectedLocation]);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <>
      <PlaceOfResidenceModal
        isOpen={modal}
        onClose={() => setModal(false)}
        onSelectLocation={setSelectedLocation} // Update location when selected
      />
      <div className="relative">
        <GoogleMap
          key={selectedLocation.lat + selectedLocation.lng}
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={selectedLocation}
          onLoad={onMapLoad}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            zoomControlOptions: { position: window.google.maps.ControlPosition.RIGHT_BOTTOM },
          }}
        >
          <Marker position={selectedLocation} />
        </GoogleMap>

        <div className="absolute top-5 left-5 flex items-center justify-between w-full px-5 pointer-events-auto">
          <p className="text-black font-bold">Around Me</p>
          <div className="flex mx-5">
            <Icon className={"bg-white"} icon={<img alt="" src={boostIcon} />} />
            <Icon className={"bg-white"} icon={<img alt="" src={filtericon} />} />
          </div>
        </div>

        <div
          className="absolute inset-0 pointer-events-auto"
          onClick={() => setModal(true)}
        />
      </div>

    </>
  );
};

export default AroundMe;
