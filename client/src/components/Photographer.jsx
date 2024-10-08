import React, { useRef } from "react";
import { BiFoodTag } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { FaPlateWheat } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registeringServiceProviderActions } from "../store/registeringServiceProvider";
import { IoMdFilm } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { FaImage } from "react-icons/fa6";
import "./hallRegister.css";

const Photographer = () => {
    const locations = useRef();
    const photoMaterial = useRef();
    const cameraDetails = useRef();
    const costPerPhoto = useRef();
    const advanceBooking = useRef();
    const navigate = useNavigate();
    const { serviceTypes } = useSelector((store) => store.registeringServiceProvider);
    const dispatch = useDispatch();

    const handleContinue = async (event) => {
        event.preventDefault();
        const currLocations = locations.current.value.toLowerCase().split(",");
        const currPhotoMaterial = photoMaterial.current.value;
        const currCameraDetails = cameraDetails.current.value;
        const currCostPerPhoto = costPerPhoto.current.value;
        const currAdvanceBooking = advanceBooking.current.value; // Change to split by comma
        if(!currLocations || !currPhotoMaterial ||!currCameraDetails ||!currCostPerPhoto ){
            return alert("please fill all the fields");
        }
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            photoMaterial: currPhotoMaterial,
            cameraDetails: currCameraDetails,
            costPerPhoto: currCostPerPhoto,
            advanceBooking : currAdvanceBooking
        };
        
        console.log(serviceDetailsObjects);
        
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        
        // Clear inputs
        locations.current.value = "";
        photoMaterial.current.value = "";
        cameraDetails.current.value = "";
        costPerPhoto.current.value = "";
        advanceBooking.current.value = ""; // Clear advanceBooking input
    };
    
    const handleCancel = (e) => {
        e.preventDefault();
        dispatch(
            registeringServiceProviderActions.handleClearRegisteringDetails()
        );
        navigate("/");
    };
    
    const handleRegister = async (e) => {
        e.preventDefault();
        const currLocations = locations.current.value.toLowerCase().split(",");
        const currPhotoMaterial = photoMaterial.current.value;
        const currCameraDetails = cameraDetails.current.value;
        const currCostPerPhoto = costPerPhoto.current.value;
        const currAdvanceBooking = advanceBooking.current.value; // Change to split by comma
        
        if(!currLocations || !currPhotoMaterial ||!currCameraDetails ||!currCostPerPhoto  ){
            return alert("please fill all the fields");
        }
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            photoMaterial: currPhotoMaterial,
            cameraDetails: currCameraDetails,
            costPerPhoto: currCostPerPhoto,
            advanceBooking : currAdvanceBooking
        };

        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );

        // Clear inputs
        locations.current.value = "";
        photoMaterial.current.value = "";
        cameraDetails.current.value = "";
        costPerPhoto.current.value = "";
        advanceBooking.current.value = "";
        navigate("/serviceProvider/confirm");
    };

    return (
        <div className="create-account">
            <div className="frame">
                <div className="log-in">
                    <div className="div">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="request-for-visit">
                                        Photography Service
                                    </div>
                                    <img
                                        onClick={handleCancel}
                                        className="icon-close-v"
                                        alt="Icon close v"
                                        src="https://c.animaapp.com/Q5aOeDDp/img/icon---24px---close---v-2.svg"
                                    />
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <img
                                            className="img"
                                            alt="Icon map"
                                            src="https://c.animaapp.com/Q5aOeDDp/img/icon---map-2-1@2x.png"
                                        />
                                        <input
                                            className="default"
                                            ref={locations}
                                            placeholder="Enter the locations provided seperated by comma"
                                        />
                                    </div>
                                </div>
                                <div className="labels-wrapper">
                                    <div className="labels">
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <IoMdFilm size={30}/>
                                                <select ref={photoMaterial} className="default">
                                                  <option value="">Select Material Type</option>
                                                  <option value="films">Photographic Films</option>
                                                  <option value="plates">Photographic plates</option>
                                                  <option value="paper">Photographic paper</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                            <FaCamera size={30}/>
                                                <input
                                                    className="default"
                                                    ref={cameraDetails}
                                                    placeholder="Camera Details"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <FaImage size={30}/>
                                                <input
                                                    ref={costPerPhoto}
                                                    className="default"
                                                    placeholder="Cost Per Photo"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                    <FaRupeeSign size={30}/>
                                        <input
                                            className="default"
                                            ref={advanceBooking}
                                            placeholder={`Advance Booking`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-style-small-wrapper">
                            <div className="button-style-small">
                                <div className="send-request">
                                    {serviceTypes.length === 1 ? (
                                        <p onClick={handleRegister}>Register</p>
                                    ) : (
                                        <p onClick={handleContinue}>Continue</p>
                                    )}
                                </div>
                            </div>
                        </div>
                        <img
                            className="line"
                            alt="Line"
                            src="https://c.animaapp.com/Q5aOeDDp/img/line-3.svg"
                        />
                        <div className="frame-6">
                            <div className="don-t-have-an">
                                Have an account?
                            </div>
                            <Link
                                to={"/serviceProvider/login"}
                                onClick={handleCancel}
                                className="text-wrapper"
                            >
                                Log in
                            </Link>
                        </div>
                        <div className="frame-7">
                            <div className="don-t-have-an">A User?</div>
                            <Link
                                to={"/user/login"}
                                className="text-wrapper"
                                onClick={handleCancel}
                            >
                                User
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Photographer;