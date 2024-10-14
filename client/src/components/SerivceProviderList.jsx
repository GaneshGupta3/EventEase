import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import "./styles.css";
import { userActions } from "../store/user";
import CardList from "./CardList";
import ViewDetailsHall from "./ViewDetailsHall";
import ViewDetails from "./ViewDetails";

const ServiceProviderList = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { currServiceProvider ,currentServiceProviderList,currServiceProviderListType, allServices } = useSelector(
        (store) => store.user
    );

    useEffect(() => {
        if (!currentServiceProviderList?.length) {
            // Navigate only if no service providers are available
            navigate("/user/homePage");
        }
    }, [navigate, currentServiceProviderList]);

    const handleLogout = () => {
        dispatch(userActions.loggedOut());
        navigate("/");
    };

    const handleServiceTypeChange = (currServiceType) => {
        console.log(currServiceType);
        dispatch(
            userActions.changeServiceType({ currServiceType: currServiceType })
        );
    };

    const fetchInitialServices = async () => {
        const allServices = await fetch("/api/services/getAllServices");
        const data = await allServices.json();
        return data;
    };

    const handleFetchInitialServices = async () => {
        const initialServices = await fetchInitialServices();
        // console.log(initialServices);
        dispatch(
            userActions.addInitialServices({ allServices: initialServices })
        );
    };

    if (!allServices?.length) {
        handleFetchInitialServices();
    }

    return (
        <>
            
            {currServiceProvider ? (<ViewDetails />): <div className="landing-page">
                <div className="frame">
                    <div className="header-header">
                        <div className="div">
                            <div className="frame-wrapper">
                                <div className="frame-2" />
                            </div>
                            <div className="frame-3">
                                <div className="frame-4">
                                    <div className="text-wrapper">Home</div>
                                    <img
                                        className="icon-arrow-down"
                                        alt="Icon arrow down"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---16px---arrow---down.svg"
                                    />
                                </div>
                                <div className="frame-4">
                                    <div className="text-wrapper">Venue</div>
                                    <img
                                        className="icon-arrow-down"
                                        alt="Icon arrow down"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---16px---arrow---down-1.svg"
                                    />
                                </div>
                                <div className="frame-4">
                                    <div className="text-wrapper">Vendors</div>
                                    <img
                                        className="icon-px-arrow-down"
                                        alt="Icon arrow down"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---16px---arrow---down-2.svg"
                                    />
                                </div>
                                <div className="property">About us</div>
                                <div className="text-wrapper">Blog</div>
                            </div>
                            <div className="frame-5">
                                <div className="button-anchor-text">
                                    <img
                                        className="img"
                                        alt="Icon search"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---search.svg"
                                    />
                                    <div className="icon-after">Search</div>
                                </div>
                                <div
                                    style={{ cursor: "pointer" }}
                                    className="button-small-v"
                                >
                                    <div
                                        className="text-wrapper-2"
                                        style={{ width: "auto" }}
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hero">
                        <div className="frame-6">
                            <div className="frame-7">
                                <div className="frame-8">
                                    <p className="find-a-perfect">
                                        Planning for an Event
                                        <br />
                                        you are at the right place
                                    </p>
                                    <p className="we-helps-businesses">
                                        We help you easily find and book venues
                                        for birthdays, weddings, and other
                                        events while connecting you with trusted
                                        vendors for decoration, catering,
                                        photography, and more
                                    </p>
                                </div>
                                <div className="element">
                                    <div className="div-wrapper">
                                        <div className="frame-9">
                                            <div className="frame-10">
                                                <div className="text-field-large">
                                                    <div className="div-2">
                                                        <label htmlFor="options">
                                                            Choose an option:
                                                        </label>
                                                        <img
                                                            className="img-2"
                                                            alt="Icon map"
                                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---20px---map.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-field-large">
                                                    <div className="div-2">
                                                        <div className="default">
                                                            Event Type
                                                        </div>
                                                        <img
                                                            className="img-2"
                                                            alt="Icon up down"
                                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---20px---up-down-arrow-1.svg"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="text-field-large">
                                                    <div className="div-2">
                                                        <div className="default">
                                                            Price Range
                                                        </div>
                                                        <img
                                                            className="img-2"
                                                            alt="Icon up down"
                                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---20px---up-down-arrow-1.svg"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="button-large-v">
                                                <div className="active">
                                                    Search
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="home">
                                <img
                                    className="image"
                                    alt="Image"
                                    src="https://c.animaapp.com/1lNWFHbB/img/image.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-11">
                    <div className="frame-12">
                        <div className="cart">
                            <div className="frame-13">
                                <div className="frame-8">
                                    <p className="p">
                                        Simple and easy way to find your dream
                                        venue
                                    </p>
                                    <p className="lorem-ipsum-is">
                                        Discover the perfect space and services
                                        for your special occasion with just a
                                        few clicks.
                                    </p>
                                </div>
                                <button className="button-style-small">
                                    <div className="text-wrapper-3">
                                        Get Started
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="frame-14">
                            <div className="frame-15">
                                <div className="process">
                                    <div className="frame-10">
                                        <img
                                            className="img-3"
                                            alt="Icon search"
                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---search@2x.png"
                                        />
                                        <div className="search-your-location">
                                            Search <br />
                                            your location
                                        </div>
                                    </div>
                                </div>
                                <div className="process">
                                    <div className="frame-10">
                                        <img
                                            className="img-3"
                                            alt="Eye"
                                            src="https://c.animaapp.com/1lNWFHbB/img/eye@2x.png"
                                        />
                                        <div className="search-your-location">
                                            Book <br />
                                            hall
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frame-15">
                                <div className="process">
                                    <div className="frame-10">
                                        <img
                                            className="img-3"
                                            alt="Icon wallet"
                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---wallet@2x.png"
                                        />
                                        <div className="search-your-location">
                                            Find your dream venue.
                                        </div>
                                    </div>
                                </div>
                                <div className="process">
                                    <div className="frame-16">
                                        <img
                                            className="img-3"
                                            alt="Icon happy"
                                            src="https://c.animaapp.com/1lNWFHbB/img/icon---happy@2x.png"
                                        />
                                        <p className="search-your-location-2">
                                            Delight in your event experience!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="frame-17">
                    <div className="div-3">
                        <div className="frame-9">
                            <div className="div">
                                <div className="featured-propertys">

                                </div>
                                <div className="button-button">
<<<<<<< HEAD
=======
                                    <div className="active-2" style={{cursor : "pointer"}}>Explore All</div>
>>>>>>> 34e58f680633b3249579002b0275f2e88f039403
                                    <img
                                        className="img"
                                        alt="Icon v arrow"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---v--arrow---right-1.svg"
                                    />
                                </div>
                            </div>
                            <div className="filter-button">
                                <div
                                    className={currServiceProviderListType=="hall" ? 'weddings-receptions' : 'text-wrapper-4'}
                                    onClick={() =>
                                        handleServiceTypeChange("hall")
                                    }
                                    style={{cursor : "pointer"}}
                                >
                                    Weddings &amp; Birthday Halls
                                </div>
                                
                                <div
                                    className={currServiceProviderListType=="catering" ? 'weddings-receptions' : 'text-wrapper-4'}
                                    onClick={() => {
                                        handleServiceTypeChange("catering");
                                    }}
                                    style={{cursor : "pointer"}}
                                >
                                    Catering
                                </div>
                                <div
                                    className={currServiceProviderListType=="balloon_decorator" ? 'weddings-receptions' : 'text-wrapper-4'}
                                    onClick={() => {
                                        handleServiceTypeChange(
                                            "balloon_decorator"
                                        );
                                    }}
                                    style={{cursor : "pointer"}}
                                >
                                    Ballon Decorators
                                </div>
                                <div
                                    className={currServiceProviderListType=="photographer" ? 'weddings-receptions' : 'text-wrapper-4'}
                                    onClick={() => {
                                        handleServiceTypeChange(
                                            "photographer"
                                        );
                                    }}
                                    style={{cursor : "pointer"}}
                                >
                                    photographer
                                </div>
                            </div>
                        </div>
                        <CardList></CardList>















                    </div>
                </div>
                <div className="feature">
                    <div className="frame-22">
                        <div className="feature-2">
                            <div className="div-3">
                                <div className="frame-10">
                                    <p className="p">
                                        Find Your Perfect Event Space in Minutes
                                    </p>
                                    <p className="lorem-ipsum-is-2">
                                        &#34;Discover top-rated venues and
                                        services that fit your style and budget.
                                        Booking your dream event has never been
                                        easier! Unlock access to the most
                                        stunning venues with just a few clicks!
                                        Whether it&#39;s a wedding, corporate
                                        event, or celebration, we’ll help you
                                        book the perfect spot—fast, easy, and
                                        tailored to your needs.&#34;
                                    </p>
                                </div>
                                <button className="button-style-small">
                                    <div className="text-wrapper-3">
                                        Get Started
                                    </div>
                                </button>
                            </div>
                            <div className="image-3">
                                <div className="frame-23">
                                    <div className="rectangle" />
                                    <div className="rectangle-2" />
                                </div>
                                <div className="frame-23">
                                    <div className="rectangle-2" />
                                    <div className="rectangle" />
                                </div>
                            </div>
                        </div>
                        <div className="feature-3">
                            <img
                                className="rectangle-3"
                                alt="Rectangle"
                                src="https://c.animaapp.com/1lNWFHbB/img/rectangle-20.png"
                            />
                            <div className="div-3">
                                <div className="frame-10">
                                    <div className="frame-10">
                                        <p className="p">
                                            Best rated host on popular rental
                                            sites
                                        </p>
                                        <p className="lorem-ipsum-is-2">
                                            &#34;Why wait? Secure the best
                                            venues and services today with a
                                            small deposit! Let us handle the
                                            details while you focus on creating
                                            unforgettable memories. The sooner
                                            you book, the better the
                                            experience!&#34;
                                        </p>
                                    </div>
                                    <div className="frame-24">
                                        <div className="div-2">
                                            <img
                                                className="img"
                                                alt="Icon check"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---check--2@2x.png"
                                            />
                                            <div className="text-wrapper-5">
                                                Find excellent deals
                                            </div>
                                        </div>
                                        <div className="div-2">
                                            <img
                                                className="img"
                                                alt="Icon check"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---check--2@2x.png"
                                            />
                                            <p className="text-wrapper-5">
                                                Friendly host &amp; Fast support
                                            </p>
                                        </div>
                                        <div className="div-2">
                                            <img
                                                className="img"
                                                alt="Icon check"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---check--2@2x.png"
                                            />
                                            <div className="text-wrapper-5">
                                                Secure payment system
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="button">
                                    <div className="text-wrapper-6">
                                        Learn more
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="blog-subscribe">
                    <div className="frame-25">
                        <div className="blog">
                            <div className="frame-26">
                                <div className="news-consult">
                                    Event Insights and Updates
                                </div>
                                <div className="button-button">
                                    <div className="active-2">Explore All</div>
                                    <img
                                        className="img"
                                        alt="Icon v arrow"
                                        src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---v--arrow---right-1.svg"
                                    />
                                </div>
                            </div>
                            <div className="frame-15">
                                <div className="blog-2">
                                    <img
                                        className="image-4"
                                        alt="Image"
                                        src="https://c.animaapp.com/1lNWFHbB/img/image-8@2x.png"
                                    />
                                    <div className="frame-9">
                                        <p className="element-easy-to-ambitious">
                                            Top Tips to Choose the Perfect Event
                                            Venue
                                        </p>
                                        <div className="frame-27">
                                            <div className="active-3">
                                                Read the Article
                                            </div>
                                            <img
                                                className="img"
                                                alt="Icon v arrow"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---v--arrow---right-4.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-2">
                                    <img
                                        className="image-4"
                                        alt="Image"
                                        src="https://c.animaapp.com/1lNWFHbB/img/image-9@2x.png"
                                    />
                                    <div className="frame-9">
                                        <p className="element-easy-to-ambitious">
                                            How to Plan a Memorable Wedding
                                            Reception
                                        </p>
                                        <div className="frame-27">
                                            <div className="active-3">
                                                Read the Article
                                            </div>
                                            <img
                                                className="img"
                                                alt="Icon v arrow"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---v--arrow---right-4.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="blog-2">
                                    <img
                                        className="image-4"
                                        alt="Image"
                                        src="https://c.animaapp.com/1lNWFHbB/img/image-10@2x.png"
                                    />
                                    <div className="frame-9">
                                        <p className="element-easy-to-ambitious">
                                            Why Advance Booking Guarantees the
                                            Best Deals
                                        </p>
                                        <div className="frame-27">
                                            <div className="active-3">
                                                Read the Article
                                            </div>
                                            <img
                                                className="img"
                                                alt="Icon v arrow"
                                                src="https://c.animaapp.com/1lNWFHbB/img/icon---24px---v--arrow---right-4.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-28">
                            <div className="frame-29">
                                <div className="frame-30">
                                    <p className="for-recent-update">
                                        Stay Updated on Event Offers &amp; News
                                    </p>
                                    <p className="we-helps-businesses-2">
                                        We help users discover the latest deals,
                                        event services, and expert advice on
                                        planning their dream event.
                                    </p>
                                </div>
                                <div className="subscribe">
                                    <input
                                        className="input"
                                        placeholder="Enter your Email"
                                        type="email"
                                    />
                                    <button className="button-style-small">
                                        <div className="text-wrapper-7">
                                            Subscribe
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-footer">
                    <div className="frame-31">
                        <div className="frame-32">
                            <div className="frame-33">
                                <div className="frame-34">
                                    <div className="frame-35" />
                                </div>
                                <div className="frame-36">
                                    <a
                                        href="https://maps.google.com/maps?rlz=1C1CHBF_enIN1060IN1060&amp;gs_lcrp=EgZjaHJvbWUqDAgCEC4YJxiABBiKBTIGCAAQRRg5Mg8IARAuGEMYsQMYgAQYigUyDAgCEC4YJxiABBiKBTIYCAMQLhhDGIMBGK8BGMcBGLEDGIAEGIoFMg0IBBAuGIMBGLEDGIAEMgcIBRAAGIAEMgYIBhBFGD0yBggHEEUYPdIBCDM0NTZqMGoxqAIAsAIA&amp;um=1&amp;ie=UTF-8&amp;fb=1&amp;gl=in&amp;sa=X&amp;ftid=0x3be7c8add9569a29:0xb7ad04bf9a389df7&amp;ved=2ahUKEwjKrebS-OWIAxXQzzgGHUQVCd0Q4kB6BAhHEAE"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <p className="element-bervely-hill-ave">
                                            Hashu Adwani Memorial Complex,
                                            Collector&#39;s Colony, Chembur,
                                            Mumbai, Maharashtra 400074
                                        </p>
                                    </a>
                                    <div className="frame-37">
                                        <div className="element-info">
                                            +91 87797 06761
                                        </div>
                                        <div className="element-info-2">
                                            2022.ganesh.gupta@ves.ac.in
                                        </div>
                                    </div>
                                    <img
                                        className="social-media"
                                        alt="Social media"
                                        src="https://c.animaapp.com/1lNWFHbB/img/social-media.svg"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <p className="static-mania">
                            © 2024. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default ServiceProviderList;
