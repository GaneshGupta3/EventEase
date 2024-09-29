import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaKey } from "react-icons/fa6";
import "./ServiceProviderRegister.css";

const ServiceProviderRegister = () => {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const serviceTypes = useRef();
    const locations = useRef(); // Add a separate ref for locations
    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();

        const currUsername = username.current.value;
        const currEmail = email.current.value;
        const currPassword = password.current.value;
        const currServiceTypes = serviceTypes.current.value.split(" ");
        const currLocations = locations.current.value.split(" "); // Use locations ref

        console.log(currLocations);

        if (!currUsername || !currEmail || !currPassword) {
            alert("Please fill all fields!");
            return;
        }

        const registerResponse = await fetch(
            "/api/serviceProvider/registerServiceProvider",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: currUsername,
                    email: currEmail,
                    password: currPassword,
                    serviceTypes: currServiceTypes,
                    locations: currLocations,
                }),
            }
        );
        const data = await registerResponse.json();
        if (!registerResponse.ok) {
            alert(data.message);
        } else {
            alert("service provider Successfully created");
            navigate("/serviceProvider/login");
            // Clear input fields after submitting
            username.current.value = "";
            email.current.value = "";
            password.current.value = "";
            serviceTypes.current.value = ""; // Clear services input
            locations.current.value = ""; // Clear locations input
        }
    };

    return (
        <div className="create-account">
            <div className="frame" style={{ height: "100vh" }}>
                <div className="log-in">
                    <div className="div">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="request-for-visit">
                                        Create Account
                                    </div>
                                    <img
                                        className="icon-close-v"
                                        alt="Icon close v"
                                        src="https://c.animaapp.com/WW0sOHBk/img/icon---24px---close---v-2.svg"
                                    />
                                </div>
                                <div className="labels-wrapper">
                                    <div className="labels">
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <IoPersonCircleOutline
                                                    size={25}
                                                />
                                                <input
                                                    type="text"
                                                    className="Input"
                                                    ref={username}
                                                    placeholder="Enter your username"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <MdOutlineMail size={25} />
                                                <input
                                                    type="text"
                                                    className="Input"
                                                    ref={email}
                                                    placeholder="Enter your email"
                                                />
                                            </div>
                                        </div>
                                        <div className="text-field-large">
                                            <div className="frame-5">
                                                <FaKey size={25} />
                                                <input
                                                    type="password"
                                                    className="Input"
                                                    ref={password}
                                                    placeholder="Enter your password"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <input
                                            type="text"
                                            className="Input"
                                            ref={serviceTypes} // Unique ref for services
                                            placeholder="Enter your services separated by space"
                                        />
                                    </div>
                                </div>

                                <div className="text-field-large">
                                    <div className="frame-5">
                                        <input
                                            type="text"
                                            className="Input"
                                            ref={locations} // Use a separate ref for locations
                                            placeholder="Enter operated locations separated by space"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="button-style-small-wrapper"
                            onClick={handleRegister}
                        >
                            <div className="button-style-small">
                                <div className="send-request">
                                    Create Account
                                </div>
                            </div>
                        </div>
                        <img
                            className="line"
                            alt="Line"
                            src="https://c.animaapp.com/WW0sOHBk/img/line-3.svg"
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
                        <div className="frame-6">
                            <div className="don-t-have-an">User?</div>
                            <Link className="text-wrapper" to={"/user/login"}>
                                User
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProviderRegister;
