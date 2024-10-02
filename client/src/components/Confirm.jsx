import React from "react";
import { useSelector } from "react-redux";

const Confirm = () => {
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
