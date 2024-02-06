import { useEffect, useState } from "react"
import { Ingredients } from "./ingredients";
import './styles.css';

export const RecipeDetails = ({ id }) => {
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data && data.meals) {
                    setRecipe(data.meals);
                }
            }
            ).catch(err => console.log(err));
    }, [id])

    return (
        <section className="recipe-details">
            {
                recipe.map((recipeDts) => (
                    <>
                        <h2>{recipeDts.strMeal.toUpperCase()}</h2>
                        <section className="img-ingredients">
                            <div className="recipe-ingredients">
                               <h3>Ingredients</h3>
                               <Ingredients recipe={recipe[0]} />
                            </div>
                           <div className="recipe-img"><img alt={recipeDts.strMeal} src={recipeDts.strMealThumb} /></div>
                        </section>
                        <p className="recipe-text">{recipeDts.strInstructions}</p>
                    </>
                ))
            }
        </section>
    )
}