import { configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./modules/recipes/recipesSlice";
import { userSlice } from "./modules/user/userSlice";

export default configureStore({
reducer:{
    recipes: recipesSlice.reducer,
    user: userSlice.reducer,
},
});