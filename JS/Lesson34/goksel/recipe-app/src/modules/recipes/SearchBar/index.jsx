import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import Alert from '@mui/material/Alert';

export const SearchBar = ({ setRecipes }) => {
	const [mainIngredient, setMainIngredient] = useState('');
	const [inputError, setInputError] = useState(undefined);
	const [searchError, setSearchError] = useState(undefined);

	function handleSubmit(e) {
		e.preventDefault();
		const cleansedInput = mainIngredient.trim().replace(/\s/g, '_');

		fetch(
			`https://www.themealdb.com/api/json/v1/1/filter.php?i=${cleansedInput}`
		)
			.then((res) => res.json())
			.then((data) => {
				if (data.meals && data.meals.length > 0) {
					setRecipes(data.meals);
					setSearchError(null);
				} else {
					setSearchError(
						`Could not find any meals with main ingredient "${mainIngredient}"`
					);
				}
			});
	};

	useEffect(() => {
		if (mainIngredient) {
			const trimmedSearchInput = mainIngredient.trim();
			const numberOfSpaces = mainIngredient.length - trimmedSearchInput.length;
			if (numberOfSpaces > 1) {
				setInputError('Main ingredient should not have more than one white space in a row.');
			} else {
				setInputError(null);
			}
		}
	}, [mainIngredient]);

	return (
		<Stack onSubmit={handleSubmit} component="form">
			<Stack alignItems="center">
				<TextField
					label='Search for an ingredient...'
					variant='filled'
					type='text'
					name='main-ingredient'
					id='main-ingredient'
					placeholder='chicken_breast'
					onChange={(event) => setMainIngredient(event.target.value)}
					error={!!inputError}
					helperText={inputError}
					sx={{ width: "50%" }}
				/>
			</Stack>
			{searchError &&
				<Stack alignItems="center">
					<Alert
						sx={{ width: "50%" }} severity='error'>{searchError}
					</Alert>
				</Stack>
			}
		</Stack>
	);
};
