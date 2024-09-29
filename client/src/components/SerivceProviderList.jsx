import { useSelector } from "react-redux";
import ServiceProvider from "./ServiceProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import UserNavbar from "./userNavbar";

const ServiceProviderList = () => {
    const navigate = useNavigate();
    const { currentServiceProviderList } = useSelector(store => store.user);

    useEffect(() => {
        if (!currentServiceProviderList?.length) {
            // Navigate only if no service providers are available
            navigate("/user/homePage");
        }
    }, [navigate, currentServiceProviderList]);

    return (
        <>
            <UserNavbar />
            {currentServiceProviderList?.length ? (
                currentServiceProviderList.map((serviceProvider) => (
                    <ServiceProvider key={serviceProvider.email} serviceProvider={serviceProvider} />
                ))
            ) : (
                <p>No service providers available</p>
            )}
        </>
    );
};


export default ServiceProviderList;
