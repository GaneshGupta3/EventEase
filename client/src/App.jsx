import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "../global.css";
import "./App.css";
import SelectedServiceProvider from "./components/SelectedServiceProvider";
import ServiceProviderList from "./components/SerivceProviderList";
import UserList from "./components/UserList";
import UserSelected from "./components/UserSelected";

import { Outlet } from "react-router-dom";

function App() {
    const { userLoggedIn, serviceProviderSelected } = useSelector((store) => store.user);
    const { serviceProviderLoggedIn, userSelected } = useSelector((store) => store.serviceProvider);
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
                        <Outlet />  // Nested routes like UserLogin will render here
                    )}
                </>
            )}
        </>
    );
}

export default App;
