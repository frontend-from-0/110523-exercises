import { Navigate, Route, Routes } from "react-router-dom"
import { NewRecipe } from "./modules/recipes/NewRecipe/NewRecipeForm"
import { RegistrationForm } from "./modules/user/RegistrationForm";
import { Settings } from "./modules/user/Settings";
import { RecipeDetail } from "./modules/recipes/RecipeDetail";
import { SearchBar } from "./modules/recipes/SearchBar";
import { RecipeList } from "./modules/recipes/RecipeList";
import { LogIn } from "./modules/user/LogIn";
import { Recipe } from "./modules/recipes/models";

interface AppRouterProps {
    recipes : Recipe[];
    setRecipes(recipes : Recipe[]) : void;
    isSignedIn : boolean;
    setIsSignedIn(isSignedIn: boolean): void;
}

export const AppRouter = ({ recipes, setRecipes, setIsSignedIn, isSignedIn  }:AppRouterProps) => {
    return (
        <Routes>
            <Route path="user">
                <Route path="register" element={<RegistrationForm  />} />
                <Route path="settings" element={<Settings />} />
                <Route path="login" element={<LogIn setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />}/>
            </Route>

            <Route path="recipes">
                <Route path="new" element={<NewRecipe />} />
                <Route path=":id/details" element={<RecipeDetail/>} />
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