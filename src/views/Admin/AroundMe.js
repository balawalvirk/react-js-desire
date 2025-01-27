import React, { useState } from "react";
import boostIcon from "../../assets/images/boosticon.png";
import filtericon from "../../assets/images/filtericon.png";
import map from "../../assets/images/google-map.png";
import mapContents from '../../assets/images/map-contents.png';
import Icon from "../../components/icons/Icon";
import PlaceOfResidenceModal from "../../components/models/settingsModals/PlaceOfResidenceModal";
const AroundMe = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <PlaceOfResidenceModal isOpen={modal} onClose={(prev) => setModal(!prev)} />
      <div className="relative cursor-pointer " onClick={() => setModal(true)}>
        <img src={map} className="w-screen h-screen relative " alt="" />
        <div className="absolute inset-0 items-center top-5 left-5">
          <div className="flex items-center justify-between">
            <p className="text-black font-bold">Around Me</p>
            <div className="flex mx-5">
              <Icon
                className={'bg-white'}
                icon={<img alt="" src={boostIcon} />}
              />
              <Icon
                className={'bg-white'}
                icon={<img alt="" src={filtericon} />}
              />
            </div>
          </div>
        </div>
        <img src={mapContents} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="" />
      </div>

    </>
  );
};

export default AroundMe;
