import { createSlice } from "@reduxjs/toolkit";
import { serviceProviderActions } from "./serviceProvider";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userLoggedIn: false,
        username: "",
        currentServiceProviderList: [],
        serviceProviderSelected : null,
        userDetails: null,
    },
    reducers: {
        loggedIn: (state, action) => {
            // Destructure from action.payload
            console.log("it is called");
            const { username, currentServiceProviderList, userDetails } = action.payload;

            state.userLoggedIn = true;
            state.username = username;
            state.currentServiceProviderList = currentServiceProviderList;
            console.log(userDetails);
            state.userDetails = userDetails;
        },
        loggedOut: (state) => {
            state.userLoggedIn = false; // Reset logged-in state
            state.username = ""; // Clear the username
            state.currentServiceProviderList = []; // Clear service provider list
        },
        selectServiceProvider: (state, action) => {
            const { serviceProviderSelected } = action.payload;
            console.log("Selected serviceProvider:", serviceProviderSelected); // Debugging
            state.serviceProviderSelected = serviceProviderSelected;
        },
        unSelectServiceProvider: (state) => {
            state.serviceProviderSelected = null;
        }
    }
});

export default userSlice;
export const userActions = userSlice.actions;
