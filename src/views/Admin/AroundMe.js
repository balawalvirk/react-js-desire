import { GoogleApiWrapper, Map, Marker, Circle } from "google-maps-react";
import React, { useState, useEffect } from "react";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";
import boostIcon from "../../assets/svgs/search-normal.svg";
import Icon from "../../components/icons/Icon";
import filtericon from "../../assets/images/filtericon.png";
import userImage1 from '../../assets/images/user1.png';
import userImage2 from '../../assets/images/user2.png';
import userImage3 from '../../assets/images/user3.png';

const defaultCenter = {
  lat: 37.8000,
  lng: -122.4194,
};

const AroundMe = (props) => {
  const [modal, setModal] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(defaultCenter);
  const [users, setUsers] = useState([
    {
      id: 1,
      position: { lat: 37.7749, lng: -122.194 },
      image: userImage1,
    },
    {
      id: 2,
      position: { lat: 37.7749 + 0.21, lng: -122.4194 + 0.11 },
      image: userImage2,
    },
    {
      id: 3,
      position: { lat: 37.7999 - 0.21, lng: -122.4194 - 0.01 },
      image: userImage3,
    },
  ]);
  const [zoomLevel, setZoomLevel] = useState(10);

  useEffect(() => {
    const radius = zoomLevel > 12 ? 5000 : zoomLevel * 1000;
    setRadius(radius);
  }, [zoomLevel]);

  const [radius, setRadius] = useState(4000);

  return (
    <>
      <PlaceOfResidenceModal
        isOpen={modal}
        onClose={() => setModal(false)}
        onSelectLocation={setSelectedLocation}
      />

      <div className="">
        <Map
          className="mainMap relative"
          google={props.google}
          zoom={zoomLevel}
          initialCenter={selectedLocation}
          center={selectedLocation}
          mapTypeControl={false}

        // onZoomChanged={() => {
        //   const zoom = props.google.maps.Map.getZoom();
        //   setZoomLevel(zoom);
        // }}
        >
          <Marker position={selectedLocation} />
          <Circle
            center={selectedLocation}
            radius={radius}
            strokeColor="#000000"
            strokeOpacity={0.5}
            strokeWeight={0}
            fillColor="#272829"
            fillOpacity={0.2}
            animated={true}
          />
          {users && users.length > 0 &&
            users.map((user) => (
              <Marker
                key={user?.id}
                position={user?.position}
                icon={{
                  url: user?.image,
                  scaledSize: new window.google.maps.Size(150, 150),
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(25, 25),
                }}
              />
            ))}
          <div className="absolute top-5 left-5 flex items-center justify-between w-full px-5 pointer-events-auto">
            <p className="text-black font-bold">Around Me</p>
            <div className="flex mx-5">
              <Icon className={"bg-white"} icon={<img alt="" src={boostIcon} />} />
              <Icon className={"bg-white"} icon={<img alt="" src={filtericon} onClick={() => setModal(true)} />} />
            </div>
          </div>
        </Map>
      </div>
    </>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCE8oZ_Ri2mRNj4fklauAOEzzFGp-d8Nis",
})(AroundMe)
