import { useState, useEffect } from 'react';
import { Search } from './modules/recipes/SearchBar';
import { RecipeDetails } from './modules/recipes/RecipeDetails';
import './App.css';
import { NewRecipe } from './modules/recipes/NewRecipe';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [id, setId] = useState('');

	return (
		<div className='app'>
			<Search setRecipes={setRecipes} setId={setId} />
			<NewRecipe />
			{recipes && <ul className='recipes__list'>
				{recipes.map((recipe => <li key={recipe.idMeal} id={recipe.idMeal} onClick={() => setId(recipe.idMeal)}>{recipe.strMeal}</li>))}
			</ul>}
			{recipes.length > 0 && id && <RecipeDetails id={id}/>}
		</div>
	);
};
