import { useState, useEffect } from 'react';
import { AppRouter } from './AppRouter';
import { Navbar } from './components/Navbar';
import { Recipe } from './modules/recipes/models';
import { useDispatch, useSelector } from 'react-redux';
import { updateRecipes } from './modules/recipes/recipesSlice';

export const App = () => {
	
	const recipes = useSelector((state: Recipe[])=> state)

	const dispatch = useDispatch();

	useEffect(() => {
		const DB_URL =
			'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
		fetch(DB_URL)
			.then((data) => data.json())
			.then((recipeData) =>
				dispatch(updateRecipes(recipeData.meals))
			);
	}, []);

	return (
		<>
			<Navbar />
			<div className="app-container" >
				<AppRouter  />
			</div>
		</>
	);
};
