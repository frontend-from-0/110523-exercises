import { createSlice } from "@reduxjs/toolkit";
import { Recipe } from "./models";

interface RecipeAction {
	payload: Recipe[];
}

export const recipesSlice = createSlice({
    name: "recipes",
    initialState: [] as Recipe[],

    reducers: {
        updateRecipes: (state, action: RecipeAction) => {
            const newRecipes = action.payload.filter(
                (payloadItem) => !state.some((recipe) => recipe.idMeal === payloadItem.idMeal));
            return [...newRecipes, ...state];
        }
    },

});

export const selectorRecipes = (state: {recipes: Recipe[]}) => state.recipes;

export const { updateRecipes } = recipesSlice.actions;

export default recipesSlice.reducer;