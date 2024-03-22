import { Areas, Categories } from "../../models";

export const handlestrIngredientsAndMeasures = (data?: string) => {
    const ingredientsAndMeasures = data ? data.split(",") : undefined;
    let cleanedData = {};
    ingredientsAndMeasures?.forEach((ingredientAndMeasure, index) => {
        const [ingredient, measure] = ingredientAndMeasure.trim().replace(/\s+/g, " ").split("-");
        // @ts-ignore
        cleanedData[`strIngredient${index + 1}`] = ingredient;
        // @ts-ignore
        cleanedData[`strMeasure${index + 1}`] = measure;
    });
    return cleanedData;
}

export interface DataProps {
    strMeal: string;
    strCategory: Categories;
    strInstructions: string;
    strIngredientsAndMeasures?: string;
    strTags: string;
    strMealThumb: string;
    strArea: Areas;
    strSource?: string;
    strDrinkAlternate?: string;
    strImageSource?: string;
    strYoutube?: string | undefined;
    strCreativeCommonsConfirmed: boolean;
}