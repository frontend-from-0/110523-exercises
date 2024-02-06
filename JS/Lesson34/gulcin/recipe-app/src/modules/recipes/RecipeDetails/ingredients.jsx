export const Ingredients = ({ recipe }) => {
    const numbers = [];
   
    for(let i = 1; i <= 20; i++ ){
        numbers.push(i);
    }

    return (
        <ul>
            {
                numbers.map(number => (
                    recipe[`strIngredient${number}`] !== "" && recipe[`strIngredient${number}`] !== null ?
                        <li>{recipe[`strIngredient${number}`]} {recipe[`strMeasure${number}`]} </li> : null
                ))
            }
        </ul>
    )
}