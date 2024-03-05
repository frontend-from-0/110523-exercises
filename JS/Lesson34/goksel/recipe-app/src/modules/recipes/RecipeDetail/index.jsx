import { useEffect, useState } from "react";
import "./styles.css";
import { useParams } from "react-router-dom";

export const RecipeDetail = () => {
    const { id } = useParams();

    const [recipeDetail, setRecipeDetail] = useState({});


    useEffect(() => {
        const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(URL)
            .then(res => res.json())
            .then((data) => {
                if (data.meals[0]) {
                    setRecipeDetail(data.meals[0])
                }
            })
    }, [id]);
 
    return (
        id ?
            <div>

                {recipeDetail.strMeal && (
                    <div className="recipeDetailForm">
                        <div className="details">
                            <h2>Recipe Details</h2>

                            <p><strong>Your Meal:</strong>{recipeDetail.strMeal}</p>

                            <p><strong>Meal Category:</strong>{recipeDetail.strCategory}</p>

                            <p><strong>Country Of Origin:</strong>{recipeDetail.strArea}</p>
                        </div>
                        <div className="img">
                            <img src={recipeDetail.strMealThumb} />
                        </div>

                    </div>
                )}

            </div>
            :
            <p>Recipe Details Not Found</p>
    )
}