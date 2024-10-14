import React from "react";
import { FaCarAlt, FaRegUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { HiMiniUserGroup } from "react-icons/hi2";
import { TbCoinRupeeFilled } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
<<<<<<< HEAD
import { FaCamera } from "react-icons/fa";
import { IoMdImages } from "react-icons/io";
=======
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
import "./HallCard.css";

const PhotoGrapherCard = ({serviceProvider}) => {
  const dispatch = useDispatch();

  const handleViewDetails = (e) => {
    e.preventDefault();
    dispatch(userActions.viewDetailsClicked({ serviceProvider: serviceProvider }));
  };

  return (
    <div className="hall-card">
<<<<<<< HEAD
      <img className="image" alt="Image" src={serviceProvider.path ? serviceProvider.path : "../../p3.jpg"} />
=======
      <img className="image" alt="Image" src="../../hall1.jpg" />
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
      <div className="frame">
        <div className="info">
          <div className="location">
            <FaRegUser size={30} />
            <p className="element-ave">{serviceProvider.serviceProvider.username}</p>
          </div>
          {/* Additional details */}
          <div className={'details grid-display'}>
<<<<<<< HEAD
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
=======
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
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGrapherCard