import { useForm } from "react-hook-form";
import { MealCategory } from "./newRecipeHelper";
import { MealArea } from "./newRecipeHelper";
import { handlestrIngredientsAndMeasures } from "./newRecipeHelper"

import "./styles.css";

export const NewRecipe = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = (data) => {

        const dateObject = new Date();
        const formattedDate = dateObject.toISOString();

        const ingredientsAndMeasures = handlestrIngredientsAndMeasures(data.strIngredientsAndMeasures);
        delete data.strIngredientsAndMeasures;
        const cleanedData = {
            ...data,
            strMeal: data.strMeal.trim().replace(/\s+/g, " "),
            strDrinkAlternate: data.strDrinkAlternate.trim().replace(/\s+/g, " "),
            strInstructions: data.strInstructions.trim().replace(/\s+/g, " "),
            strTags: data.strTags.trim().replace(/\s+/g, ""),
            strYoutube: data.strYoutube.trim().replace(/\s+/g, " "),
            dateModified: formattedDate,
            ...ingredientsAndMeasures
        }

        console.log(cleanedData);
        reset();
    }

    return (
        <div className="newRecipe-form">
            <form
                className="recipe-form"
                noValidate
                onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="strMeal">Recipe Name</label>
                <input
                    id="strMeal"
                    type="text"
                    {...register("strMeal", { required: "Recipe name is required", minLength: { value: 5, message: "Recipe Name should be at least 5 characters long" } })}
                />
                {errors.strMeal && (
                    <span className="error-message">{errors.strMeal.message}</span>
                )}

                <label htmlFor="strCategory">Category</label>
                <select id="strCategory" {...register("strCategory", { required: true })}>
                    <option disabled selected>Select Your Category</option>
                    {MealCategory.map((category) => (
                        <option key={category.id}>{category.title}</option>
                    ))}
                </select>

                <label htmlFor="strInstructions">Instructions</label>
                <textarea
                    id="strInstructions"
                    {...register("strInstructions", {
                        required: "Instructions are required",
                        minLength: {
                            value: 50,
                            message: "Please enter Instructions at least 50 characters long"
                        }
                    })}
                />
                {errors.strInstructions && (
                    <span className="error-message">{errors.strInstructions.message}</span>
                )}

                <label htmlFor="strIngredientsAndMeasures">Ingredients and Measures</label>
                <textarea
                    placeholder="Milk - 500ml, eggs - 2, sugar - 2tbsp"
                    id="strIngredientsAndMeasures"
                    {...register("strIngredientsAndMeasures", {
                        required: "Ingredients and Measures are required",
                        minLength: {
                            value: 10,
                            message: "Please enter at least 5 Ingredients and Measures"
                        }
                    })}
                />
                {errors.strIngredientsAndMeasures && (
                    <span className="error-message">{errors.strIngredientsAndMeasures.message}</span>
                )}

                <label htmlFor="strTags">Tags</label>
                <textarea
                    placeholder="Spicy,fish"
                    id="strTags"
                    {...register("strTags", {
                        required: "Tags are required",
                        minLength: {
                            value: 3,
                            message: "Tags should be at least 3 characters long"
                        }
                    })}
                />
                {errors.strTags && (
                    <span className="error-message">{errors.strTags.message}</span>
                )}

                <label htmlFor="strMealThumb">Please Share Your Image Link</label>
                <input
                    id="strMealThumb"
                    type="text"
                    {...register("strMealThumb")}
                />

                <label htmlFor="strArea">Meal Area</label>
                <select id="strArea" {...register("strArea", { required: true })}>
                    <option disabled selected>Select Your Area</option>
                    {MealArea.map((area) => (
                        <option key={area.id}>{area.title}</option>
                    ))}
                </select>

                <label htmlFor="strSource">Source of Your Meal</label>
                <input
                    id="strSource"
                    type="text"
                    {...register("strSource")}
                />

                <label htmlFor="strDrinkAlternate">Drink Alternate</label>
                <input
                    id="strDrinkAlternate"
                    type="text"
                    {...register("strDrinkAlternate")}
                />

                <label htmlFor="strImageSource">Source of Your Image</label>
                <input
                    id="strImageSource"
                    type="text"
                    {...register("strImageSource")}
                />

                <label htmlFor="strYoutube">Share Youtube Link</label>
                <input
                    id="strYoutube"
                    type="text"
                    {...register("strYoutube")}
                />

                <label htmlFor="strCreativeCommonsConfirmed">Is Creative Commons Confirmed</label>
                <select id="strCreativeCommonsConfirmed" {...register("strCreativeCommonsConfirmed")}>
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>

                <button
                    type="submit"
                    className="newRecipe-submitBtn"
                >Save Recipe</button>
            </form>
        </div>

    )
}