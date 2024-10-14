import React from "react";
import "./ViewDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../store/user";
import { IoMdArrowBack } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import VegMenu from "./VegMenu";
import NonVegMenu from "./NonVegMenu";
import { FaWhatsapp } from "react-icons/fa";

const ViewDetailsCatering = () => {
    const { currServiceProvider } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const handleSendMessage = () => {
        console.log("send button clicked");
        const message = encodeURIComponent(
            "Hello, I would like to inquire about..."
        );
        const url = `https://wa.me/${currServiceProvider.serviceProvider.phoneNumber}?text=${message}`;
        window.open(url, "_blank");
    };
    console.log(currServiceProvider);
    const backClicked = () => {
        dispatch(userActions.cancelViewDetails());
    };
    return (
        <>
            <div className="property-details">
                <div className="frame">
                    <div className="div">
                        <div className="header-header">
                            <div className="frame-2">
                                <IoMdArrowBack
                                    size={30}
                                    onClick={backClicked}
                                />
                                <div className="frame-wrapper">
                                    <div className="frame-3" />
                                </div>
                                <div className="frame-4">
                                    <div className="frame-5">
                                        <div className="text-wrapper">Home</div>
                                        <img
                                            className="icon-arrow-down"
                                            alt="Icon arrow down"
                                            src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down.svg"
                                        />
                                    </div>
                                    <div className="frame-5">
                                        <div className="text-wrapper">
                                            Listing
                                        </div>
                                        <img
                                            className="icon-arrow-down"
                                            alt="Icon arrow down"
                                            src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down-2.svg"
                                        />
                                    </div>
                                    <div className="frame-5">
                                        <div className="text-wrapper">
                                            Agents
                                        </div>
                                        <img
                                            className="icon-arrow-down"
                                            alt="Icon arrow down"
                                            src="https://c.animaapp.com/N2aztpBp/img/icon---16px---arrow---down-2.svg"
                                        />
                                    </div>
                                    <div className="text-wrapper-2">
                                        Property
                                    </div>
                                    <div className="text-wrapper">Blog</div>
                                </div>
                                <div className="frame-6"></div>
                            </div>
                        </div>
                        <div className="div-wrapper">
                            <div className="frame-7">
                                <div className="rectangle-wrapper">
                                    <img
                                        src={
                                            currServiceProvider.path
                                                ? currServiceProvider.path
                                                : "../../ca6.webp"
                                        }
                                        className="rectangle"
                                    />
                                </div>
                                <div className="frame-8">
                                    <img
                                        src={
                                            currServiceProvider.patha
                                                ? currServiceProvider.patha
                                                : "../../ca6a.jpg"
                                        }
                                        className="rectangle-2"
                                    />
                                    <div className="frame-9">
                                        <img
                                            src={
                                                currServiceProvider.pathb
                                                    ? currServiceProvider.pathb
                                                    : "../../ca6b.jpg"
                                            }
                                            className="rectangle-2"
                                        />
                                        <div className="inf">
                                            <div className="innner">
                                                <img
                                                    className="img"
                                                    alt="Icon image"
                                                    src="https://c.animaapp.com/N2aztpBp/img/icon---image@2x.png"
                                                />
                                                <div className="text-wrapper-3">
                                                    3 more
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-10">
                            <div className="frame-11">
                                <div className="frame-12">
                                    <div className="frame-13">
                                        <div className="frame-14">
                                            <div className="frame-15">
                                                <div className="div-2">
                                                    <div className="text-wrapper-5">
                                                        {
                                                            currServiceProvider
                                                                .serviceProvider
                                                                .username
                                                        }
                                                    </div>
                                                </div>
                                                <div className="button-othes-price-v-wrapper">
                                                    <div className="button-othes-price-v">
                                                        <div className="frame-16">
                                                            <div
                                                                className="pressed"
                                                                style={{
                                                                    display:
                                                                        "flex",
                                                                    justifyContent:
                                                                        "space-around",
                                                                }}
                                                            >
                                                                <div>
                                                                    <FaIndianRupeeSign />
                                                                    {
                                                                        currServiceProvider.costPerPlate
                                                                    }
                                                                    /plate
                                                                </div>
                                                                <div>
                                                                    <FaIndianRupeeSign />
                                                                    {currServiceProvider.advanceBooking +
                                                                        " "}
                                                                    advance
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-17">
                                        <div className="frame-15">
                                            <div className="text-wrapper-7">
                                                Service Highlights
                                            </div>
                                            <div className="frame-18">
                                                <div className="frame-19">
                                                    <div className="point">
                                                        <div className="frame-20">
                                                            <div className="ellipse" />
                                                            <div className="text-wrapper-8">
                                                                Locations
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper-9">
                                                            {
                                                                currServiceProvider.locations
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="point-2">
                                                        <div className="frame-20">
                                                            <div className="ellipse" />
                                                            <div className="text-wrapper-8">
                                                                {currServiceProvider.vegMenu !=
                                                                    0 &&
                                                                    "Veg Menu"}
                                                                {currServiceProvider
                                                                    .nonvegMenu
                                                                    .length !=
                                                                    0 &&
                                                                    "NonVeg Menu"}
                                                            </div>
                                                        </div>
                                                        <div className="text-wrapper-9">
                                                            {currServiceProvider
                                                                .vegMenu
                                                                .length != 0 &&
                                                                currServiceProvider.vegMenu.map(
                                                                    (
                                                                        vegItem
                                                                    ) => {
                                                                        return (
                                                                            <VegMenu
                                                                                vegItem={
                                                                                    vegItem
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            {currServiceProvider
                                                                .nonvegMenu
                                                                .length != 0 &&
                                                                currServiceProvider.nonvegMenu.map(
                                                                    (
                                                                        nonvegItem
                                                                    ) => {
                                                                        return (
                                                                            <NonVegMenu
                                                                                nonvegItem={
                                                                                    nonvegItem
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="frame-19"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="frame-17">
                                        <div className="frame-21">
                                            <div className="text-wrapper-5">
                                                Agent Information
                                            </div>
                                            <div className="frame-22">
                                            <img src="../../public/serviceProviderProfilePhoto.jpg" className="rectangle-3" />
                                                <div className="agent-profile">
                                                    <div className="text-wrapper-10">
                                                        {
                                                            currServiceProvider
                                                                .serviceProvider
                                                                .username
                                                        }
                                                    </div>
                                                    <div className="div-3">
                                                        <img
                                                            className="start"
                                                            alt="Start"
                                                            src="https://c.animaapp.com/N2aztpBp/img/start.svg"
                                                        />
                                                        <div className="text-wrapper-11">
                                                            4 review
                                                        </div>
                                                    </div>
                                                    <div className="div-4">
                                                        <img
                                                            className="img-2"
                                                            alt="Icon email"
                                                            src="https://c.animaapp.com/N2aztpBp/img/icon---20px---email.svg"
                                                        />
                                                        <div className="text-wrapper-12">
                                                            {
                                                                currServiceProvider
                                                                    .serviceProvider
                                                                    .email
                                                            }{" "}
                                                        </div>
                                                    </div>
                                                    <div className="div-4">
                                                        <img
                                                            className="img-2"
                                                            alt="Icon call"
                                                            src="https://c.animaapp.com/N2aztpBp/img/icon---20px---call.svg"
                                                        />
                                                        <div className="text-wrapper-12">
                                                            +91{" "}
                                                            {
                                                                currServiceProvider
                                                                    .serviceProvider
                                                                    .phoneNumber
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                                <FaWhatsapp size={32} />
                                                <div
                                                    style={{
                                                        backgroundColor:
                                                            "Black",
                                                        fontSize: "20px",
                                                        color: "white",
                                                        padding: "10px",
                                                        borderRadius: "10%",
                                                    }}
                                                    onClick={handleSendMessage}
                                                >
                                                    sendMessage
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="frame-25">
                        <div className="frame-26">
                            <div className="frame-27">
                                <div className="frame-28">
                                    <img
                                        className="real-estate"
                                        alt="Real estate"
                                        src="https://c.animaapp.com/N2aztpBp/img/real-estate-1.svg"
                                    />
                                    <div className="text-wrapper-14">
                                        Relasto
                                    </div>
                                </div>
                                <div className="frame-29">
                                    <p className="element-bervely-hill-ave">
                                        59 Bervely Hill Ave, Brooklyn Town,
                                        <br />
                                        New York, NY 5630, CA, US
                                    </p>
                                    <div className="frame-30">
                                        <div className="element-info">
                                            +(123) 456-7890
                                        </div>
                                        <div className="element-info-2">
                                            info@mail.com
                                        </div>
                                    </div>
                                    <img
                                        className="social-media"
                                        alt="Social media"
                                        src="https://c.animaapp.com/N2aztpBp/img/social-media.svg"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="static-mania">
                            © 2022. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ViewDetailsCatering;
