import { createSlice } from "@reduxjs/toolkit";

const generalUserSlice = createSlice({
    name: "generalUser",
    initialState: {
        userType : ""
    },
    reducers: {
        setGeneralUser : (state , action) => {
            const {userType} = action.payload;
            state.userType = userType;
        }
    }
});

export default generalUserSlice;
export const generalUserAction = generalUserSlice.actions;
