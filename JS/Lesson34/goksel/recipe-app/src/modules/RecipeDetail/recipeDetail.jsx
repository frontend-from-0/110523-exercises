import { useEffect, useState } from "react";
import "./recipeDetail.css";

export const RecipeDetail = ({ recipeId, recipeImg }) => {

    const [recipeDetail, setRecipeDetail] = useState({});

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`
        fetch(URL)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.meals && data.meals.length > 0) {
                    setRecipeDetail(data.meals[0])
                    setIsActive(true);
                }
            })
    }, [recipeId]);

    return (
        <div className={`recipeDetail ${isActive ? "active" : ""}`} >

            {recipeDetail.strMeal && (
                <div className="recipeDetailForm">
                    <div className="details">
                        <h2>Recipe Details</h2>

                        <p><strong>Your Meal:</strong>{recipeDetail.strMeal}</p>

                        <p><strong>Meal Category:</strong>{recipeDetail.strCategory}</p>

                        <p><strong>Country Of Origin:</strong>{recipeDetail.strArea}</p>
                    </div>
                    <div className="img">
                        <img src={recipeImg} />
                    </div>

                </div>
            )}

        </div>
    )
}