import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { isSignedIn: false }, 
    reducers: {
        toggleSignIn: (state) => {
           state.isSignedIn = !state.isSignedIn; 
        }
    },
});

export const { toggleSignIn } = userSlice.actions;

export default userSlice.reducer;