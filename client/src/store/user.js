import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userLoggedIn: false,
        username: "",
        currentServiceProviderList: [],
        serviceProviderSelected: null,
        userDetails: null,
    },
    reducers: {
        loggedIn: (state, action) => {
            // Destructure from action.payload
            console.log("it is called");
            const { username, currentServiceProviderList, userDetails } =
                action.payload;

            state.userLoggedIn = true;
            state.username = username;
            state.currentServiceProviderList = currentServiceProviderList;
            console.log(userDetails);
            state.userDetails = userDetails;
        },
        filteredServiceProvider: (state, action) => {
            const { updatedServiceProviderList } = action.payload;
            state.currentServiceProviderList = updatedServiceProviderList;
        },
        loggedOut: (state) => {
            state.userLoggedIn = false;
            state.username = "";
            state.currentServiceProviderList = [];
            state.serviceProviderSelected = null;
            state.userDetails = null;
        },
        selectServiceProvider: (state, action) => {
            const { serviceProviderSelected } = action.payload;
            console.log("Selected serviceProvider:", serviceProviderSelected); // Debugging
            state.serviceProviderSelected = serviceProviderSelected;
        },
        unSelectServiceProvider: (state) => {
            state.serviceProviderSelected = null;
        },
    },
});

export default userSlice;
export const userActions = userSlice.actions;
