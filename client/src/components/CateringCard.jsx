import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import CardLocations from "./CardLocations";
import "./HallCard.css";

export const CateringCard = ({ serviceProvider }) => {
  const dispatch = useDispatch();

  const handleViewDetails = (e) => {
    e.preventDefault();
    dispatch(userActions.viewDetailsClicked({ serviceProvider: serviceProvider }));
  };

  return (
    <div className="hall-card">
      <img className="image" alt="Image" src="https://c.animaapp.com/bhmXrgIq/img/image@2x.png" />
      <div className="frame">
        <div className="info">
          <div className="location">
            <FaRegUser size={30} />
            <p className="element-ave">{serviceProvider.serviceProvider.username}</p>
          </div>
          {/* Additional details */}
          <div className={'details grid-display'}>
            <strong><FaLocationDot size={30} /> {serviceProvider.locations.map((location)=>{return <CardLocations currLocation={location}/>})}</strong>
            <strong><HiMiniUserGroup size={30} /> {serviceProvider.costPerPlate} cost/plate</strong>
            <strong><TbCoinRupeeFilled size={30} /> {serviceProvider.advanceBooking} advance</strong>
            <strong>{serviceProvider.vegMenu.length == 0 ? "nonVeg" : "veg"}</strong>
          </div>
          <div className="frame-3">
            <div className="button-style-small" onClick={handleViewDetails}>
              <div className="text-wrapper-2">View Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
