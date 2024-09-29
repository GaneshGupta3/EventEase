import { createSlice } from "@reduxjs/toolkit";

const serviceProviderSlice = createSlice({
    name: "serviceProvider",
    initialState: {
        serviceProviderLoggedIn: false,
        username: "",
        currentUserList: [],
        userSelected: null,
    },
    reducers: {
        loggedIn: (state, action) => {
            const { username, currentUserList } = action.payload;
            state.serviceProviderLoggedIn = true; // Set it to true for login
            state.username = username;
            state.currentUserList = currentUserList;
        },
        loggedOut: (state) => {
            state.serviceProviderLoggedIn = false; // Set to false when logged out
            state.username = "";
            state.currentUserList = [];
        },
        // Reducer for serviceProvider
        selectUser: (state, action) => {
            const { user } = action.payload;
            console.log("Selected User:", user); // Debugging
            state.userSelected = user;
        },
        unSelectUser: (state) => {
            state.userSelected = null;
        }
    },
});

export default serviceProviderSlice;
export const serviceProviderActions = serviceProviderSlice.actions;
