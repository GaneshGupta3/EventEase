import React, { useRef } from "react";
import { SignInCircleLight } from "./SignInCircleLight";
import "./hallRegister.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registeringServiceProviderActions } from "../store/registeringServiceProvider";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiMapPinAreaDuotone } from "react-icons/pi";
import { FaPlateWheat } from "react-icons/fa6";
import { BiFoodTag } from "react-icons/bi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { SlNote } from "react-icons/sl";
import { FaRupeeSign } from "react-icons/fa";

const Catering = () => {
    const locations = useRef(); // Add a separate ref for locations
    const foodHours = useRef();
    const advanceBooking = useRef();
    const costPerPlate = useRef();
    const totalCost = useRef();
    const menu = useRef();
    const foodType = useRef("");
    const navigate = useNavigate();
    const { username, email, password, serviceDetails, serviceTypes } =
        useSelector((store) => store.registeringServiceProvider);
    const dispatch = useDispatch();

    const handleContinue = async (event) => {
        event.preventDefault();
        const currLocations = locations.current.value.toLowerCase().split(" ");
        const currFoodHours = foodHours.current.value;
        const currAdvanceBooking = advanceBooking.current.value;
        const currCostPerPlate = costPerPlate.current.value;
        const currFoodType = foodType.current.valueOf();
        const currMenu = menu.current.value;
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            foodHours: currFoodHours,
            advanceBooking: currAdvanceBooking,
            costPerPlate: currCostPerPlate,
        };
        if(currFoodType =="veg"){
            serviceDetailsObjects.vegMenu = currMenu;
        }
        else{
            serviceDetailsObjects.nonvegMenu = currMenu;
        }
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        foodHours.current.value = "";
        advanceBooking.current.value = "";
        costPerPlate.current.value = "";
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
        const currLocations = locations.current.value.toLowerCase().split(" ");
        const currFoodHours = foodHours.current.value;
        const currAdvanceBooking = advanceBooking.current.value;
        const currCostPerPlate = costPerPlate.current.value;
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            foodHours: currFoodHours,
            advanceBooking: currAdvanceBooking,
            costPerPlate: currCostPerPlate,
        };
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        foodHours.current.value = "";
        advanceBooking.current.value = "";
        costPerPlate.current.value = "";
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
                                        Catering Service
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
                                            placeholder="Enter the locations provided separated by space"
                                        />
                                    </div>
                                </div>
                                <div className="labels-wrapper">
                                    <div className="labels">
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                            <MdOutlineAccessTimeFilled size={30}/>
                                                <input
                                                    ref={foodHours}
                                                    placeholder="Food Hours in the event"
                                                    className="default"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                            <FaRupeeSign size={30}/>
                                                <input
                                                    className="default"
                                                    ref={advanceBooking}
                                                    placeholder="Advance Payment "
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <FaPlateWheat size={30} />
                                                <input
                                                    ref={costPerPlate}
                                                    className="default"
                                                    placeholder="Cost Per Plate"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <BiFoodTag size={30} />
                                        <select id="box1" ref={foodType}>
                                            <option value={"veg"}>veg</option>
                                            <option value={"non-veg"}>non-veg</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                    <SlNote size={30}/>
                                        <input
                                            className="default"
                                            ref={menu}
                                            placeholder={`menu seperated by comma`}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button-style-small-wrapper">
                            <div className="button-style-small">
                                <div className="send-request">
                                    {serviceTypes.length == 1 ? (
                                        <p onClick={handleRegister}>register</p>
                                    ) : (
                                        <p onClick={handleContinue}>continue</p>
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

export default Catering;
