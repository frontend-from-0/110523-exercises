import { Recipe } from "../models";

interface IngredientsProps {
    recipe: Recipe | null;
}

export const Ingredients = ({ recipe }: IngredientsProps ) => {
    const ingredientIndexes = Array.from({length: 20}, (_, i) => i + 1);

    return (
        <ul>
            {
                ingredientIndexes.map(index => (
                    recipe?[`strIngredient${index}`] !== "" && recipe[`strIngredient${index}`] !== null ?
                        <li key={`recipe${index}`}>{recipe[`strIngredient${index}`]} {recipe[`strMeasure${index}`]} </li> : null
                ))
            }
        </ul>
    )
}