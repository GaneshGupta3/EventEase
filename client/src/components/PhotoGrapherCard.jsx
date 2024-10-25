import React from "react";
import { FaCarAlt, FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { FaCamera } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
import "./HallCard.css";

const PhotoGrapherCard = ({serviceProvider}) => {
  const dispatch = useDispatch();

  const handleViewDetails = (e) => {
    e.preventDefault();
    dispatch(userActions.viewDetailsClicked({ serviceProvider: serviceProvider }));
  };

  return (
    <div className="hall-card">
      <img className="image" alt="Image" src={serviceProvider.path ? serviceProvider.path : "../../p3.jpg"} />
      <div className="frame">
        <div className="info">
          <div className="location">
            <FaRegUser size={30} />
            <p className="element-ave">{serviceProvider.serviceProvider.username}</p>
          </div>
          {/* Additional details */}
          <div className={'details grid-display'}>
            <strong><FaCamera size={30}/>
            {serviceProvider.cameraDetails}</strong>
            <strong><TbCoinRupeeFilled size={30} /> {serviceProvider.advanceBooking} advance</strong>
            <strong><TbCoinRupeeFilled size={30} /> {serviceProvider.costPerPhoto} /photo</strong>
            <strong><IoMdImages size={30}/>{serviceProvider.photoMaterial}</strong>
          </div>
          <div className="frame-3">
            <div className="button-style-small" onClick={handleViewDetails}>
              <div className="text-wrapper-2" onclick>View Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrapherCard