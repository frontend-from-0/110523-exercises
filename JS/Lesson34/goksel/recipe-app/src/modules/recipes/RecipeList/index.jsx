import { Link } from 'react-router-dom';
import "./styles.css"

export const RecipeList = ({ recipes }) => {
    return (
        <ul className='recipes__list'>
            {recipes.map((recipe) => (


                <li key={recipe.idMeal}>
                    <Link className='recipelist_link' to={`recipes/${recipe.idMeal}/details`}>
                        <img className='recipelist_img' src={recipe.strMealThumb} />
                        {recipe.strMeal}
                    </Link>
                </li>

            ))}
        </ul>
    );
};
