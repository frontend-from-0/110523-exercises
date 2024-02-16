export const MealCategory = [
    {
        title: "Dessert",
        id: "dessert"
    },
    {
        title: "Main Dish",
        id: "mainDish"
    },
    {
        title: "Side Dish",
        id: "sideDish"
    }
]


export const MealArea = [
    {
        title : "British",
        id : "british"
    },
    {
        title : "Canadian",
        id : "canadian"
    },
    {
        title : "Russia",
        id : "russia"
    },
    {
        title : "India",
        id : "india"
    },
    {
        title : "Greece",
        id : "greece"
    },
    {
        title : "Turkey",
        id : "turkey"
    },
]



function handlestrIngredientsAndMeasures(data) {

    const ingredientsAndMeasures = data.split(",");
    const ingredientsAndMeasuresObj = ingredientsAndMeasures.map((ingredientAndMeasure) => {

        const [ingredient, measure] = ingredientAndMeasure.trim().replace(/\s+/g, " ").split("-");
        return { ingredient, measure };
    })
    return ingredientsAndMeasuresObj;

}

export const onSubmit = data => {
    const cleanedData = {
        ...data,
        strMeal: data.strMeal.trim().replace(/\s+/g, " "),
        strDrinkAlternate: data.strDrinkAlternate.trim().replace(/\s+/g, " "),
        strInstructions: data.strInstructions.trim().replace(/\s+/g, " "),
        strTags: data.strTags.trim().replace(/\s+/g, " "),
        strYoutube: data.strYoutube.trim().replace(/\s+/g, " "),
        strIngredientsAndMeasures: handlestrIngredientsAndMeasures(data.strIngredientsAndMeasures),
    }
    console.log(cleanedData);
}