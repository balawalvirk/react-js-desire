import { Circle, GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useState } from 'react';
import filtericon from "../../assets/images/filtericon.png";
import userImage1 from '../../assets/images/user1.png';
import userImage2 from '../../assets/images/user2.png';
import userImage3 from '../../assets/images/user3.png';
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
  const [users, setUsers] = useState([
    {
      id: 1,
      position: { lat: 37.7749, lng: -122.4194 },
      image: userImage1,
    },
    {
      id: 2,
      position: { lat: 37.7749 + 0.01, lng: -122.4194 + 0.01 },
      image: userImage2,
    },
    {
      id: 3,
      position: { lat: 37.7749 - 0.01, lng: -122.4194 - 0.01 },
      image: userImage3,
    },
  ]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyADMSrJ7cO5UoFG_1PwGU3OHwU4v6Ju7eA",
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps...</p>;

  return (
    <>
      <PlaceOfResidenceModal
        isOpen={modal}
        onClose={() => setModal(false)}
        onSelectLocation={setSelectedLocation}
      />
      <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={selectedLocation}
          zoom={12}
        >
          <Marker position={selectedLocation} />
          <Circle
            center={selectedLocation}
            radius={500}
            options={{
              fillColor: 'rgba(255, 0, 0, 0.1)',
              strokeColor: 'rgba(255, 0, 0, 0.5)',
            }}
          />
          {users.map((user) => (
            <Marker
              key={user.id}
              position={user.position}
              icon={{
                url: user?.image,
                scaledSize: new window.google.maps.Size(60, 60),
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(25, 25),
              }}
            />
          ))}
        </GoogleMap>

        <div className="absolute top-5 left-5 flex items-center justify-between w-full px-5 pointer-events-auto">
          <p className="text-black font-bold">Around Me</p>
          <div className="flex mx-5">
            <Icon className={"bg-white"} icon={<img alt="" src={boostIcon} />} />
            <Icon className={"bg-white"} icon={<img alt="" src={filtericon} onClick={() => setModal(false)} />} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AroundMe;
