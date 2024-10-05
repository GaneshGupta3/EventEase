import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registeringServiceProviderActions } from "../store/registeringServiceProvider";
import BalloonDecorator from "./BalloonDecorator";
import Catering from "./Catering";
import Hall from "./hall";
import "./ServiceProviderRegister.css";

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
        const currLocations = locations.current.value.toLowerCase().split(",");
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
        const currLocations = locations.current.value.toLowerCase().split(",");
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
        <>
            {serviceTypes[0]=="hall" && <Hall />}
            {serviceTypes[0]=="balloon_decorator" && <BalloonDecorator />}
            {serviceTypes[0]=="catering" && <Catering />}
        </>
    );
};

export default ServiceDetails;
