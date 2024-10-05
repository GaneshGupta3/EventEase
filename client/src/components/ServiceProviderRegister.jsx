import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import "./ServiceProviderRegister.css";
import { LampLight } from "./LampLight";
import { SignInCircleLight } from "./SignInCircleLight";
import "./ServiceProviderRegister.css";
import { useDispatch } from "react-redux";
import {registeringServiceProviderActions} from "../store/registeringServiceProvider.js"

export const ServiceProviderRegister = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const serviceTypes = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleRegister = async (event) => {
        event.preventDefault();

        const currUsername = username.current.value;
        const currEmail = email.current.value;
        const currPassword = password.current.value;
        const currServiceTypes = serviceTypes.current.value.toLowerCase().split(" ");
        dispatch(registeringServiceProviderActions.handleInitialRegistration({
            username: currUsername,
            email : currEmail,
            password : currPassword,
            serviceTypes : currServiceTypes,
        }))


        navigate("/serviceProvider/serviceDetails");

        // console.log(currLocations);

        // if (!currUsername || !currEmail || !currPassword) {
        //     alert("Please fill all fields!");
        //     return;
        // }

        // const registerResponse = await fetch(
        //     "/api/serviceProvider/registerServiceProvider",
        //     {
        //         method: "POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify({
        //             username: currUsername,
        //             email: currEmail,
        //             password: currPassword,
                    
        //         }),
        //     }
        // );
        // console.log(registerResponse);
        // const data = await registerResponse.json();
        // if (!registerResponse.ok) {
        //     alert(data.message);
        // } else {
        //     alert("service provider Successfully created");
        //     navigate("/serviceProvider/login");
        //     // Clear input fields after submitting
        //     username.current.value = "";
        //     email.current.value = "";
        //     password.current.value = "";
        //     serviceTypes.current.value = ""; // Clear services input
        //     // locations.current.value = ""; // Clear locations input
        // }
    };
    const handleCancle = (e) => {
        e.preventDefault();
        navigate("/");
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
                                        Create Account
                                    </div>
                                    <img
                                        onClick={handleCancle}
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
                                                    ref={username}
                                                    className="default"
                                                    placeholder="Enter your Username"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <SignInCircleLight className="sign-in-circle-light-instance" />
                                                <input
                                                    ref={email}
                                                    className="default"
                                                    placeholder="Enter your Email Address"
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
                                                    ref={password}
                                                    placeholder="Password"
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
                                            ref={serviceTypes}
                                            placeholder="Enter the services you provide separated by a space"
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
                        <div onClick={(e)=>handleRegister(e)} className="button-style-small-wrapper" style={{cursor : "pointer"}}>
                            <div className="button-style-small">
                                <div className="send-request">
                                    Continue
                                </div>
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
                            <Link className="text-wrapper" to={"/serviceProvider/login"}>Log in</Link>
                        </div>
                        <div className="frame-7">
                            <div className="don-t-have-an">A User?</div>
                            <Link className="text-wrapper" to={"/user/login"}>User</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServiceProviderRegister;
