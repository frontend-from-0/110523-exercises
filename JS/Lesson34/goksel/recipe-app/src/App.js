import { useState, useEffect } from 'react';
import { Search } from './modules/recipes/SearchBar';
import './App.css';
import { RecipeDetail } from './modules/RecipeDetail/recipeDetail';


export const App = () => {
	const [recipes, setRecipes] = useState([]);
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


	return (
		<div className="app" >
			<Search setRecipes={setRecipes} />

			<RecipeDetail recipeId={recipeId} recipeImg={recipeImg} />

			<ul className='recipes__list'>
				{
					recipes.map((recipe, index) => (<li key={recipe.idMeal} onClick={() => handleRecipeClick(index)} >
						<img src= {recipe.strMealThumb} />
						{recipe.strMeal}
					</li>))
				}
			</ul>
		</div>
	);
};
