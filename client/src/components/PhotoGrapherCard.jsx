import React from "react";
import { FaCarAlt, FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import "./HallCard.css";

const PhotoGrapherCard = ({serviceProvider}) => {
  const dispatch = useDispatch();

  const handleViewDetails = (e) => {
    e.preventDefault();
    dispatch(userActions.viewDetailsClicked({ serviceProvider: serviceProvider }));
  };

  return (
    <div className="hall-card">
      <img className="image" alt="Image" src="../../hall1.jpg" />
      <div className="frame">
        <div className="info">
          <div className="location">
            <FaRegUser size={30} />
            <p className="element-ave">{serviceProvider.serviceProvider.username}</p>
          </div>
          {/* Additional details */}
          <div className={'details grid-display'}>
            <strong><FaLocationDot size={30} /> {serviceProvider.locations}</strong>
            <strong><HiMiniUserGroup size={30} /> {serviceProvider.guests} Guests</strong>
            <strong><TbCoinRupeeFilled size={30} /> {serviceProvider.advanceBooking} advance</strong>
            <strong><FaCarAlt size={30} /> {serviceProvider.parkingNumbers} parkings</strong>
          </div>
          <div className="frame-3">
            <div className="button-style-small" onClick={handleViewDetails}>
              <div className="text-wrapper-2">View Details</div>
            </div>
            <div className="element">₹{serviceProvider.totalCost}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrapherCard