import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user";
import generalUserSlice from "./generalUser";
import serviceProviderSlice from "./serviceProvider";

const store = configureStore({//iske baad "main.jsx" mein use hoga
  reducer : {//spelling dekh "reducer" hai
    user: userSlice.reducer,//slice ka naam counter hai jo ki destructuring ke liye use hoga (store)=>store.counter
    generalUser : generalUserSlice.reducer,
    serviceProvider : serviceProviderSlice.reducer, 
  }
});

export default store;