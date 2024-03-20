import { useState, useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { Navbar } from './components/Navbar';

export const App = () => {
	const [recipes, setRecipes] = useState([]);
	const [isSignedIn, setIsSignedIn] = useState(true);

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) =>
				setRecipes(recipeData.meals)
			);
	}, []);


	return (
		<>
			<Navbar setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />
			<div className="app-container" >
				<AppRouter recipes={recipes} setRecipes={setRecipes} setIsSignedIn={setIsSignedIn} isSignedIn={isSignedIn} />
			</div>
		</>
	);
};
