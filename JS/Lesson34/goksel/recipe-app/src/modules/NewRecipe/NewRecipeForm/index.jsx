import { useForm } from "react-hook-form";
import { MealCategory } from "../NewRecipeInformations";
import { MealArea } from "../NewRecipeInformations";
import { onSubmit } from "../NewRecipeInformations";
import "./styles.css";

export const NewRecipe = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
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

            <label htmlFor="strDrinkAlternate">Drink Alternate</label>
            <input
                id="strDrinkAlternate"
                type="text"
                {...register("strDrinkAlternate")}
            />

            <label htmlFor="strCategory">Category</label>
            <select id="strCategory" {...register("strCategory", { required: true })}>
                <option disabled selected>Select Your Category</option>
                {MealCategory.map((category) => (
                        <option key={category.id}>{category.title}</option>
                    ))}
            </select>

            <label htmlFor="strArea">Meal Area</label>
            <select id="strArea" {...register("strArea", { required: true })}>
                <option disabled selected>Select Your Area</option>
                {MealArea.map((area) => (
                    <option key={area.id}>{area.title}</option>
                ))}
            </select>

            <label htmlFor="strInstructions">Instractions</label>
            <textarea
                id="strInstructions"
                {...register("strInstructions", {
                    required: "Instractions are required",
                    minLength: {
                        value: 50,
                        message: "Please enter Instractions at least 50 characters long"
                    }
                })}
            />
            {errors.strInstructions && (
                <span className="error-message">{errors.strInstructions.message}</span>
            )}

            <label htmlFor="strMealThumb">Upload Your Image</label>
            <input
                id="strMealThumb"
                type="file"
                {...register("strMealThumb")}
            />

            <label htmlFor="strTags">Main Product</label>
            <textarea
                id="strTags"
                {...register("strTags", {
                    required: "Tags are required",
                    minLength: {
                        value: 5,
                        message: "Please enter at least 1 tag"
                    }
                })}
            />
            {errors.strTags && (
                <span className="error-message">{errors.strTags.message}</span>
            )}

            <label htmlFor="strYoutube">Share Youtube Link</label>
            <input
                id="strYoutube"
                type="text"
                {...register("strYoutube")}
            />

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

            <label htmlFor="strSource">Source of Your Meal</label>
            <input
                id="strSource"
                type="text"
                {...register("strSource")}
            />

            <label htmlFor="strImageSource">Source of Your Image</label>
            <input
                id="strImageSource"
                type="text"
                {...register("strImageSource")}
            />

            <label htmlFor="strCreativeCommonsConfirmed">Is Creative Commons Confirmed</label>
            <select id="strCreativeCommonsConfirmed" {...register("strCreativeCommonsConfirmed")}>
                <option value="null">Null</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>

            <label htmlFor="dateModified">Date</label>
            <input
                id="dateModified"
                type="date"
                {...register("dateModified", { required: true })}
            />
            {errors.dateModified && (
                <span className="error-message">Please Select Date</span>
            )}

            <button
                type="submit"
                className="newRecipe-submitBtn"
            >Save Recipe</button>

        </form>
    )
}