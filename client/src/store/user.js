import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        userLoggedIn: false,
        currServiceProvider: null,
        username: "",
        phoneNumber : "",
        currServiceProviderListType: null,
        currentServiceProviderList: [],
        serviceProviderSelected: null,
        serviceProviderType: null,
        userDetails: null,
        currCateringList: null,
        currBalloonDecoratorList: null,
        currHallList: null,
        allServices: [],
    },
    reducers: {
        loggedIn: (state, action) => {
            const { username, currentServiceProviderList, userDetails } = action.payload;

            state.userLoggedIn = true;
            state.username = username;
            state.currentServiceProviderList = currentServiceProviderList;
            state.userDetails = userDetails;
        },
        filteredServiceProvider: (state, action) => {
            const { updatedServiceProviderList } = action.payload;
            state.currentServiceProviderList = updatedServiceProviderList;
        },
        loggedOut: (state) => {
            state.userLoggedIn = false;
            state.username = "";
            state.currServiceProviderListType = null;
            state.currentServiceProviderList = [];
            state.serviceProviderSelected = null;
            state.serviceProviderType = null;
            state.userDetails = null;
            state.allServices = [];
        },
        selectServiceProvider: (state, action) => {
            const { serviceProviderSelected } = action.payload;
            console.log("Selected serviceProvider:", serviceProviderSelected);
            state.serviceProviderSelected = serviceProviderSelected;
        },
        unSelectServiceProvider: (state) => {
            state.serviceProviderSelected = null;
        },
        changeServiceType: (state, action) => {
            const { currServiceType } = action.payload; // Correctly destructuring from payload
            state.currServiceProviderListType = currServiceType;
            // Filtering currentServiceProviderList based on the service type
            state.currentServiceProviderList = state.allServices.filter(service =>
                service.serviceName == currServiceType // Adjust 'serviceType' as per your service property
            );
        },
        addInitialServices: (state, action) => {
            const {allServices} = action.payload; // Correctly accessing the payload
            state.allServices = allServices;
            console.log(state.allServices);
            state.currServiceProviderListType = "hall";

            state.currentServiceProviderList = state.allServices.filter(service => 
                service.serviceName == state.currServiceProviderListType
            ).sort((service1 , service2)=>Number(service1.totalCost)-Number(service2.totalCost));
            console.log("hall services : ",state.currentServiceProviderList);//done
        },
        exploreAll: (state,action) => {
            state.currBalloonDecoratorList = state.allServices.filter(service => service.serviceName == "balloon_decorator");
            state.currCateringList = state.allServices.filter(service => service.serviceName == "catering");
            state.currHallList = state.allServices.filter(service => service.serviceName == "hall");
        },
        viewDetailsClicked: (state,action) => {
            const {serviceProvider} = action.payload;
            state.currServiceProvider = serviceProvider;
        },
        cancelViewDetails : (state ,action)=>{
            state.currServiceProvider = null;
        }
    },
});

export default userSlice;
export const userActions = userSlice.actions;
