import { useEffect, useState } from 'react';
import { AppRouter } from './AppRouter';
import './App.css';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [searchError, setSearchError] = useState(undefined);

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) => 
			setRecipes(recipeData.meals));
	}, [])

	return (
			<AppRouter recipes={recipes} setSearchError={setSearchError} setRecipes={setRecipes} searchError={searchError}/>
	);
};
