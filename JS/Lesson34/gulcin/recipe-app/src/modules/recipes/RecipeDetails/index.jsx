import { useEffect, useState } from "react"
import { Ingredients } from "./Ingredients";
import './styles.css';

export const RecipeDetails = ({ id }) => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        setLoading(true);
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.meals) {
                    setRecipe(data.meals[0]);
                    setLoading(false);
                } else {
                    setErrorMessage('No recipe.');
                    setLoading(false);
                }
            }
            ).catch(err => {
                console.log(err)
            });
    }, [id])

   

    return (
        <>
            {loading &&  <h1>Loading...</h1>}
            {recipe ? (
                <section className="recipe-details">
                    <h2>{recipe.strMeal.toUpperCase()}</h2>
                    <section className="img-ingredients">
                        <div className="recipe-ingredients">
                            <h3>Ingredients</h3>
                            <Ingredients recipe={recipe} />
                        </div>
                        <div className="recipe-img"><img alt={recipe.strMeal} src={recipe.strMealThumb} /></div>
                    </section>
                    <p className="recipe-text">{recipe.strInstructions}</p>
                </section>

            ) : <h1>{errorMessage}</h1>
            }
        </>
    )
}