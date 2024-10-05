import React, { useRef } from "react";
import { SignInCircleLight } from "./SignInCircleLight";
import "./hall.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registeringServiceProviderActions } from "../store/registeringServiceProvider";
import { MdOutlineAttachMoney } from "react-icons/md";
import { PiMapPinAreaDuotone } from "react-icons/pi";

const BalloonDecorator = () => {
    const locations = useRef(); // Add a separate ref for locations
    const chargesPerSquareFeet = useRef();
    const densityBalloons = useRef();
    const maximumLandCoverage = useRef();
    const navigate = useNavigate();
    const { serviceTypes } = useSelector(
        (store) => store.registeringServiceProvider
    );
    const dispatch = useDispatch();

    const handleContinue = async (event) => {
        event.preventDefault();
        const currLocations = locations.current.value.toLowerCase().split(" ");
        const currChargesPerSquareFeet = chargesPerSquareFeet.current.value;
        const currDensityBalloons = densityBalloons.current.value;
        const currMaximumLandCoverage = maximumLandCoverage.current.value;
        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            chargesPerSquareFeet: currChargesPerSquareFeet,
            densityBalloons: currDensityBalloons,
            maximumLandCoverage: currMaximumLandCoverage,
        };
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        chargesPerSquareFeet.current.value = "";
        densityBalloons.current.value = "";
        maximumLandCoverage.current.value = "";
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
        const currChargesPerSquareFeet = chargesPerSquareFeet.current.value;
        const currDensityBalloons = densityBalloons.current.value;
        const currMaximumLandCoverage = maximumLandCoverage.current.value;

        const serviceDetailsObjects = {
            serviceName: serviceTypes[0],
            locations: currLocations,
            chargesPerSquareFeet: currChargesPerSquareFeet,
            densityBalloons: currDensityBalloons,
            maximumLandCoverage: currMaximumLandCoverage,
        };
        console.log(serviceDetailsObjects);
        dispatch(
            registeringServiceProviderActions.handleContinue({
                serviceDetail: serviceDetailsObjects,
            })
        );
        locations.current.value = "";
        chargesPerSquareFeet.current.value = "";
        densityBalloons.current.value = "";
        maximumLandCoverage.current.value = "";
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
                                        Balloon Decorator
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
                                                <img
                                                    className="img"
                                                    alt="Icon user"
                                                    src="https://c.animaapp.com/Q5aOeDDp/img/icon---24px---user.svg"
                                                />
                                                <input
                                                    ref={chargesPerSquareFeet}
                                                    placeholder="Charges / square ft."
                                                    className="default"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <SignInCircleLight className="sign-in-circle-light-instance" />
                                                <input
                                                    className="default"
                                                    ref={densityBalloons}
                                                    placeholder="Density of Balloons(/square ft.)"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <PiMapPinAreaDuotone
                                                    size={30}
                                                />
                                                <input
                                                    ref={maximumLandCoverage}
                                                    className="default"
                                                    placeholder="Maximum Land Area"
                                                />
                                            </div>
                                        </div>
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

export default BalloonDecorator;
