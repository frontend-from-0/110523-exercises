import { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import './styles.css';
import { useNavigate } from 'react-router-dom';

export const SearchBar = ({ setRecipes }) => {
	const [mainIngredient, setMainIngredient] = useState('');
    const [inputError, setInputError] = useState(undefined);
	const [searchError, setSearchError] = useState(undefined);
	const navigate = useNavigate();

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
					navigate(`/recipes/search/${cleansedInput}`);
				} else {
					setSearchError(
						`Could not find any meals with main ingredient ${mainIngredient}`
					);
					setRecipes([]);
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
  },[mainIngredient]);

	return (
		<>
			<form className='search-form'onSubmit={handleSubmit}>
				<div className='search-box'>
				<input
					type='text'
					name='main-ingredient'
					id='main-ingredient'
					placeholder='chicken breast'
					onChange={(event) => setMainIngredient(event.target.value)}
				/>
                {inputError && <span className='input-error-message'>{inputError}</span>}
				<button type='submit' className='search-btn'><CiSearch /></button>
				</div>
			</form>
			{searchError && <p className='search-error-message'>{searchError}</p>}
		</>
	);
};
