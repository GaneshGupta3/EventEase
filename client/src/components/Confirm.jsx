import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Confirm = () => {

    const navigate = useNavigate();
    const { username, email, password, serviceDetails, serviceTypes } =
        useSelector((store) => store.registeringServiceProvider);
    const handleConfirmClicked = async () => {
        const registerResponse = await fetch(
            "/api/serviceProvider/registerServiceProvider",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username,
                    email: email,
                    password: password,
                    serviceDetails: serviceDetails,
                }),
            }
        );
        navigate("/serviceProvider/login");
        console.log(registerResponse);
    };
    return (
        <>
            <button onClick={handleConfirmClicked}>confirm</button>
            <button>cancel</button>
        </>
    );
};

export default Confirm;
