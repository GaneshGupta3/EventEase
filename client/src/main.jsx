import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserLogin from "./components/UserLogin.jsx";
import UserRegister from "./components/UserRegister.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import ServiceProviderLogin from "./components/ServiceProviderLogin.jsx";
import ServiceProviderRegister from "./components/ServiceProviderRegister.jsx";
import UserList from "./components/UserList.jsx";
import UserSelected from "./components/UserSelected.jsx";
import HeroSection from "./components/HeroSection.jsx";
import ServiceDetails from "./components/ServiceDetails.jsx";
import Confirm from "./components/Confirm.jsx";
import AboutUs from "./components/AboutUs.jsx";
import ServiceProviderList from "./components/SerivceProviderList.jsx";
import ViewDetails from "./components/ViewDetailsHall.jsx"
import SelectedServiceProvider from "./components/SelectedServiceProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <Provider store={store}>
          <App />
        </Provider>
    ),
    children: [
      {path : "/", element: <HeroSection />},
      {path : "/aboutUs", element: <AboutUs />},
      {path : "/user/login", element: <UserLogin /> },
      {path : "/user/register", element: <UserRegister /> },
      {path : "/user/homePage", element: <ServiceProviderList /> },
      {path : "/user/serviceProviderDetails", element: <ViewDetails /> },
      // {path : "/user/serviceProviderProfile", element: <SelectedServiceProvider /> },
      {path : "/serviceProvider/register", element: <ServiceProviderRegister /> },
      {path : "/serviceProvider/login", element: <ServiceProviderLogin /> },
      {path : "/serviceProvider/homePage" , element : <UserList />},
      {path : "/serviceProvider/userProfile" , element : <UserSelected />},
      {path : "/serviceProvider/serviceDetails" , element : <ServiceDetails />},
      {path : "/serviceProvider/confirm" , element : <Confirm />},
    ],
  },
]);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
