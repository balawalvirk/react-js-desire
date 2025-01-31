import React, { useState, useCallback } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import boostIcon from "../../assets/images/boosticon.png";
import filtericon from "../../assets/images/filtericon.png";
import Icon from "../../components/icons/Icon";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";

const mapContainerStyle = {
  width: "100vw",
  height: "100vh",
};

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const AroundMe = () => {
  const [modal, setModal] = useState(false);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyCsT9TTMjDoRR1nd_YmcQyLyjNuipt_t48"
  });

  const onMapLoad = useCallback((map) => {
    console.log("Map Loaded", map);
  }, []);

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <>
      <PlaceOfResidenceModal isOpen={modal} onClose={() => setModal(!modal)} />
      <div className="relative cursor-pointer" onClick={() => setModal(true)}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={12}
          center={center}
          onLoad={onMapLoad}
        >
          <Marker position={center} />
        </GoogleMap>
        <div className="absolute top-5 left-5 flex items-center justify-between w-full px-5">
          <p className="text-black font-bold">Around Me</p>
          <div className="flex mx-5">
            <Icon className={"bg-white"} icon={<img alt="" src={boostIcon} />} />
            <Icon className={"bg-white"} icon={<img alt="" src={filtericon} />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AroundMe;
