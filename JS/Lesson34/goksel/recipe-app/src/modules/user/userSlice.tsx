import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: { isSignedIn: false, newUser: [] }, 
    reducers: {
        signIn:(state)=>{
            state.isSignedIn = true;
        },
        signOut:(state)=>{
            state.isSignedIn=false;
        },
        addUser:(state,action)=>{
            state.newUser = action.payload;
        }
    },
});

export const { signIn, signOut, addUser } = userSlice.actions;

export default userSlice.reducer;