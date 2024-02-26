import { Navigate, Route, Routes } from "react-router-dom"
import { NewRecipe } from "./modules/recipes/NewRecipe/NewRecipeForm"
import { RegistrationForm } from "./modules/user/RegistrationForm";
import { Settings } from "./modules/user/Settings";
import { RecipeDetail } from "./modules/recipes/RecipeDetail";
import { SearchBar } from "./modules/recipes/SearchBar";
import { RecipeList } from "./modules/recipes/RecipeList";

export const AppRouter = ({ recipes, setRecipes, setIsSignedIn, isSignedIn }) => {
    return (
        <Routes>
            <Route path="user">
                <Route path="register" element={<RegistrationForm setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />} />

                <Route path="settings" element={<Settings />} />
            </Route>

            <Route path="recipes">
                <Route path="new" element={<NewRecipe />} />

                <Route path=":id/details" element={<RecipeDetail recipes={recipes} />} />
                <Route index element={<Navigate to="/" replace={true}></Navigate>} />
            </Route>


            <Route
                path="/"
                element={
                    <>
                        <SearchBar setRecipes={setRecipes} />
                        <RecipeList recipes={recipes} />
                    </>
                }
            />



        </Routes>
    )
}