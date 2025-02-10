import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState } from "react";
import filtericon from "../../assets/images/filtericon.png";
import boostIcon from "../../assets/svgs/search-normal.svg";
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
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [isDragging, setIsDragging] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyADMSrJ7cO5UoFG_1PwGU3OHwU4v6Ju7eA",
  });


  const handleClick = () => {

    if (!isDragging) {
      setModal(true);
    } else {

      setClickTimeout(
        setTimeout(() => {
          setModal(true);
        }, 300)
      );
    }
  };

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <>
      <PlaceOfResidenceModal
        isOpen={modal}
        onClose={() => setModal(false)}
        onSelectLocation={setSelectedLocation}
      />
      <div className="relative">
        <GoogleMap
          key={selectedLocation.lat + selectedLocation.lng}
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={selectedLocation}
          options={{
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            zoomControl: true,
            zoomControlOptions: { position: window.google.maps.ControlPosition.RIGHT_BOTTOM },
            draggable: true,
          }}
        >
          <Marker position={selectedLocation} />
        </GoogleMap>
        <div className="absolute top-5 left-5 flex items-center justify-between w-full px-5 pointer-events-auto">
          <p className="text-black font-bold">Around Me</p>
          <div className="flex mx-5">
            <Icon className={"bg-white"} icon={<img alt="" src={boostIcon} />} />
            <Icon className={"bg-white"} icon={<img alt="" src={filtericon} onClick={handleClick} />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AroundMe;
