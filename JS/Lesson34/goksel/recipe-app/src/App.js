import { useState, useEffect } from 'react';
import { Search } from './modules/recipes/SearchBar';
import './App.css';
import { RecipeDetail } from './modules/RecipeDetail/recipeDetail';
import { NewRecipe } from './modules/NewRecipe/NewRecipeForm';


export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [showrecipe, setShowRecipe] = useState(false);
	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) =>
				setRecipes(recipeData.meals)
			);
	}, []);


	const [recipeId, setRecipeId] = useState("");
	const [recipeImg, setRecipeImg] = useState("");

	function handleRecipeClick(index) {
		setRecipeId(recipes[index].idMeal);
		setRecipeImg(recipes[index].strMealThumb)
	}

	const handleNewRecipeBtn = () => {
		setShowRecipe(true);
	}

	return (
		<div className="app" >

			{!showrecipe ?
				<>
					<Search setRecipes={setRecipes} />
					<button
						type='button'
						className='newRecipeBtn'
						onClick={handleNewRecipeBtn}
					>New Recipe</button>

					<RecipeDetail recipeId={recipeId} recipeImg={recipeImg} />

					<ul className='recipes__list'>
						{
							recipes.map((recipe, index) => (<li key={recipe.idMeal} onClick={() => handleRecipeClick(index)} >
								<img src={recipe.strMealThumb} />
								{recipe.strMeal}
							</li>))
						}
					</ul>
				</>
				: <NewRecipe />}

		</div>
	);
};
