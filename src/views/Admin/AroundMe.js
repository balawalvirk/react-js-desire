import { GoogleMap, Marker, useLoadScript, Circle } from "@react-google-maps/api";
import React, { useState, useEffect } from "react";
import filtericon from "../../assets/images/filtericon.png";
import boostIcon from "../../assets/svgs/search-normal.svg";
import Icon from "../../components/icons/Icon";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";

// Define map container style
const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

// Default center of the map (San Francisco)
const defaultCenter = {
  lat: 37.7749,
  lng: -122.4194,
};

const AroundMe = () => {
  const [modal, setModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [isDragging, setIsDragging] = useState(false);
  const [clickTimeout, setClickTimeout] = useState(null);
  const [zoom, setZoom] = useState(12); // Initial zoom level

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


  const generateRandomOffset = (location) => {
    const latOffset = (Math.random() - 0.5) * 0.01;
    const lngOffset = (Math.random() - 0.5) * 0.01;
    return {
      lat: location.lat + latOffset,
      lng: location.lng + lngOffset,
    };
  };


  const userAvatars = Array.from({ length: 5 }, () => generateRandomOffset(selectedLocation)); // Change 5 to how many avatars you want


  const onZoomChanged = (map) => {
    setZoom(map.getZoom());
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
          zoom={zoom}
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


          <Circle
            center={selectedLocation}
            radius={zoom * 20}
            options={{
              fillColor: "gray",
              fillOpacity: 0.3,
              strokeColor: "gray",
              strokeOpacity: 0.5,
              strokeWeight: 1,
            }}
          />


          {userAvatars.map((avatarLocation, index) => (
            <Marker
              key={index}
              position={avatarLocation}
              icon={{
                url: "https://randomuser.me/api/portraits/men/75.jpg",
                scaledSize: new window.google.maps.Size(30, 30),
                anchorPoint: new window.google.maps.Point(15, 15),
                shape: {
                  type: "circle",
                  coord: [10, 20, 30, 30]
                }
              }}
            />
          ))}
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
