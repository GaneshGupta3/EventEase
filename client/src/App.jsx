import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroSection from "./components/HeroSection";
import { useSelector } from "react-redux";
import ServiceProviderList from "./components/SerivceProviderList";
import UserList from "./components/UserList";
import UserSelected from "./components/UserSelected";
import SelectedServiceProvider from "./components/SelectedServiceProvider";

function App() {
    const {userLoggedIn , serviceProviderSelected} = useSelector((store) => store.user);
    const { serviceProviderLoggedIn, userSelected } = useSelector(
        (store) => store.serviceProvider
    );
    const userType = useSelector((store) => store.generalUser.userType);

    return (
        <>
            {userSelected ? (
                <UserSelected />
            ) : serviceProviderSelected ? (
                <SelectedServiceProvider />
            ) : (
                <>
                    {userLoggedIn || serviceProviderLoggedIn ? (
                        userType === "user" ? (
                            <ServiceProviderList />
                        ) : (
                            <UserList />
                        )
                    ) : (
                        <HeroSection />
                    )}
                </>
            )}
        </>
    );
    
}

export default App;
