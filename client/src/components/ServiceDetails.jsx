import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./ServiceProviderRegister.css";
import { LampLight } from "./LampLight";
import { SignInCircleLight } from "./SignInCircleLight";
import "./ServiceProviderRegister.css";
import { useDispatch, useSelector } from "react-redux";
import { registeringServiceProviderActions } from "../store/registeringServiceProvider";

const ServiceDetails = () => {
    const locations = useRef(); // Add a separate ref for locations
    const guests = useRef();
    const parkingNumber = useRef();
    const landArea = useRef();
    const advanceBooking = useRef();
    const totalCost = useRef();
    const navigate = useNavigate();
    const { username, email, password, serviceDetails, serviceTypes } =
        useSelector((store) => store.registeringServiceProvider);
    const dispatch = useDispatch();

    const handleContinue = async (event) => {
        event.preventDefault();
        const currLocations = locations.current.value.split(" ");
        const currGuests = guests.current.value;
        const currParkingNumber = parkingNumber.current.value;
        const currLandArea = landArea.current.value;
        const currAdvanceBooking = advanceBooking.current.value;
        const currTotalCost = totalCost.current.value;
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            guests: currGuests,
            parkingNumbers: currParkingNumber,
            landArea: currLandArea,
            advanceBooking: currAdvanceBooking,
            totalCost: currTotalCost,
        };
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        guests.current.value = "";
        parkingNumber.current.value = "";
        landArea.current.value = "";
        advanceBooking.current.value = "";
        totalCost.current.value = "";
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
        const currLocations = locations.current.value.split(" ");
        const currGuests = guests.current.value;
        const currParkingNumber = parkingNumber.current.value;
        const currLandArea = landArea.current.value;
        const currAdvanceBooking = advanceBooking.current.value;
        const currTotalCost = totalCost.current.value;
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            guests: currGuests,
            parkingNumbers: currParkingNumber,
            landArea: currLandArea,
            advanceBooking: currAdvanceBooking,
            totalCost: currTotalCost,
        };
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        guests.current.value = "";
        parkingNumber.current.value = "";
        landArea.current.value = "";
        advanceBooking.current.value = "";
        totalCost.current.value = "";
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
                                        {serviceTypes[0]}
                                    </div>
                                    <img
                                        onClick={handleCancel}
                                        style={{ cursor: "pointer" }}
                                        className="icon-close-v"
                                        alt="Icon close v"
                                        src="https://c.animaapp.com/tRsqlKbF/img/icon---24px---close---v-2.svg"
                                    />
                                </div>
                                <div className="labels-wrapper">
                                    <div className="labels">
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <img
                                                    className="img"
                                                    alt="Icon user"
                                                    src="https://c.animaapp.com/tRsqlKbF/img/icon---24px---user.svg"
                                                />
                                                <input
                                                    ref={locations}
                                                    className="default"
                                                    placeholder="Enter locations"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <SignInCircleLight className="sign-in-circle-light-instance" />
                                                <input
                                                    ref={guests}
                                                    className="default"
                                                    placeholder="Enter Guest Capacity"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <img
                                                    className="img"
                                                    alt="Icon lock"
                                                    src="https://c.animaapp.com/tRsqlKbF/img/icon---20px---lock-.svg"
                                                />
                                                <input
                                                    className="default"
                                                    ref={parkingNumber}
                                                    placeholder="Parking Capacity"
                                                />
                                                <img
                                                    className="img"
                                                    alt="Icon eye hide"
                                                    src="https://c.animaapp.com/tRsqlKbF/img/icon---20px---eye-hide.svg"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <LampLight />
                                        <input
                                            className="default"
                                            ref={landArea}
                                            placeholder="Enter the landArea"
                                        />
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <LampLight />
                                        <input
                                            className="default"
                                            ref={advanceBooking}
                                            placeholder="Enter the Advance Booking"
                                        />
                                    </div>
                                </div>
                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <LampLight />
                                        <input
                                            className="default"
                                            ref={totalCost}
                                            placeholder="Enter the total cost"
                                        />
                                    </div>
                                </div>

                                {/* <div className="text-field-large">
                                  <div className="frame-5 locationContainer">
                                      <img
                                          className="img"
                                          alt="Icon map"
                                          src="https://c.animaapp.com/tRsqlKbF/img/icon---map-2@2x.png"
                                      />
                                      <input
                                          ref={locations}
                                          className="default"
                                          placeholder="Enter the locations provided separated by space"
                                      />
                                  </div>
                              </div> */}
                            </div>
                        </div>

                        <img
                            className="line"
                            alt="Line"
                            src="https://c.animaapp.com/tRsqlKbF/img/line-3.svg"
                        />
                        <div className="frame-6">
                            <div className="don-t-have-an">
                                Have an account?
                            </div>
                            <Link
                                className="text-wrapper"
                                to={"/serviceProvider/login"}
                            >
                                Log in
                            </Link>
                        </div>
                        <div className="frame-7">
                            <div className="don-t-have-an">A User?</div>
                            <Link className="text-wrapper" to={"/user/login"}>
                                User
                            </Link>
                        </div>
                        {serviceTypes.length == 1 ? (
                            <div
                                onClick={(e) => handleRegister(e)}
                                className="button-style-small-wrapper"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="button-style-small">
                                    <div className="send-request">Register</div>
                                </div>
                            </div>
                        ) : (
                            <div
                                onClick={(e) => handleContinue(e)}
                                className="button-style-small-wrapper"
                                style={{ cursor: "pointer" }}
                            >
                                <div className="button-style-small">
                                    <div className="send-request">Continue</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
