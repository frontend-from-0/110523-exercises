import { useState, useEffect } from 'react';
import { Search } from './modules/recipes/SearchBar';
import { RecipeDetails } from './modules/recipes/RecipeDetails';
import './App.css';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [id, setId] = useState('');
	console.log(recipes)

	function handleClick(e) {
		const id= e.target.getAttribute('id');
		setId(id);
		
	}
	

	/* useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) =>
				setRecipes(recipeData.meals));
	}, []); */
	
	return (
		<div className='app'>
			<Search setRecipes={setRecipes} setId={setId} />
			<ul className='recipes__list'>
				{recipes.map((recipe => <li key={recipe.idMeal} id={recipe.idMeal} onClick={handleClick}>{recipe.strMeal}</li>))}
			</ul>
			{recipes.length > 0 && id && <RecipeDetails id={id}/>}
		</div>
	);
};
