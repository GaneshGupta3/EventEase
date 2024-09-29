import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../store/user";
import { Link, useNavigate } from "react-router-dom";
import { generalUserAction } from "../store/generalUser";
import React from "react";
import "./UserLogin.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const UserLogin = () => {
    const email = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [remember, setRemember] = useState(false);
    const handleRememberToggle = () => {
        remember ? setRemember(false) : setRemember(true);
    };

    const [hidePassword, setHidePassword] = useState(true);
    const handlePasswordToggle = () => {
        hidePassword ? setHidePassword(false) : setHidePassword(true);
    };

    async function handleLogin(event) {
        event.preventDefault();
        const currEmail = email.current.value;
        const currPassword = password.current.value;

        const loginResponse = await fetch("/api/users/userExists", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: currEmail,
                password: currPassword,
            }),
        });
        const data = await loginResponse.json();
        console.log(data);
        if (loginResponse.ok) {
            const response = await fetch(
                "/api/serviceProvider/getServiceProviders"
            );
            const serviceProviders = await response.json();
            console.log(serviceProviders); //all the service providers
            dispatch(
                userActions.loggedIn({
                    username: data.username,
                    currentServiceProviderList: serviceProviders,
                    userDetails: data.userDetails,
                })
            );
            dispatch(generalUserAction.setGeneralUser({ userType: "user" }));
            // navigate("/user/")
        } else {
            console.log("something went wrong login again");
        }
    }

    return (
        <div className="log-in" style={{height : "100vh"}}>
            <div className="frame" >
                <div className="frame-wrapper" style={{height : "auto"}}>
                    <div className="div">
                        <div className="frame-2">
                            <div className="frame-3">
                                <div className="frame-4">
                                    <button className="request-for-visit">
                                        Log in
                                    </button>
                                    <img
                                        className="icon-close-v"
                                        alt="Icon close v"
                                        src="https://c.animaapp.com/L49S2jLO/img/icon---24px---close---v-2.svg"
                                    />
                                </div>
                                <div className="labels">
                                    <div className="text-field-large">
                                        <div className="frame-5">
                                            <img
                                                className="img"
                                                alt="Icon user"
                                                src="https://c.animaapp.com/L49S2jLO/img/icon---24px---user.svg"
                                            />
                                            <input
                                                type="text"
                                                placeholder="enter email : "
                                                ref={email}
                                            />
                                        </div>
                                    </div>
                                    <div className="text-field-large">
                                        <div className="frame-5">
                                            <img
                                                className="img"
                                                alt="Icon lock"
                                                src="https://c.animaapp.com/L49S2jLO/img/icon---20px---lock-.svg"
                                            />
                                            <input
                                                type={
                                                    hidePassword
                                                        ? "password"
                                                        : "text"
                                                }
                                                ref={password}
                                                placeholder="enter password : "
                                            />
                                            <button
                                                onClick={handlePasswordToggle}
                                            >
                                                {hidePassword ? (
                                                    <FaEye />
                                                ) : (
                                                    <FaEyeSlash />
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-6">
                                <div
                                    className="check"
                                    onClick={handleRememberToggle}
                                >
                                    {remember ? (
                                        <TiTick />
                                    ) : (
                                        <div className="check-list" />
                                    )}
                                    <div className="text-wrapper">Remember</div>
                                </div>
                                <div className="text-wrapper-2">
                                    Forgot Password
                                </div>
                            </div>
                        </div>
                        <div className="frame-7">
                            <div className="button-style-small">
                                <div
                                    className="loginButton send-request"
                                    onClick={handleLogin}
                                >
                                    Log in
                                </div>
                            </div>
                            <div className="inner-wrapper">
                                <div className="inner">
                                    <img
                                        className="icon-google"
                                        alt="Icon google"
                                        src="https://c.animaapp.com/L49S2jLO/img/icon---20px---google.svg"
                                    />
                                    <div className="icon-before">
                                        Log in with Google
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img
                            className="line"
                            alt="Line"
                            src="https://c.animaapp.com/L49S2jLO/img/line-3.svg"
                        />
                        <div className="frame-8">
                            <div className="don-t-have-an">
                                Don’t have an account?
                            </div>
                            <Link
                                className="don-t-have-an-2"
                                to="/user/register"
                            >
                                Create Account
                            </Link>
                        </div>
                        <div className="frame-8">
                            <div className="don-t-have-an">
                                service provider?
                            </div>
                            <Link
                                className="don-t-have-an-2"
                                to="/serviceProvider/login"
                            >
                                login as a service Provider
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
