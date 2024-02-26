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
    let cleanedData = {};
    ingredientsAndMeasures.forEach((ingredientAndMeasure, index) => {
        const [ingredient, measure] = ingredientAndMeasure.trim().replace(/\s+/g, " ").split("-");
        cleanedData[`ingredient${index + 1}`] = ingredient;
        cleanedData[`measure${index + 1}`] = measure;
    });
    return cleanedData;

}

export const onSubmit = data => {
    const dateObject = new Date();
    const formattedDate = dateObject.toLocaleString("en-US",{
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false 
    });

    const ingredientsAndMeasures = handlestrIngredientsAndMeasures(data.strIngredientsAndMeasures);
    delete data.strIngredientsAndMeasures;
    const cleanedData = {
        ...data,
        strMeal: data.strMeal.trim().replace(/\s+/g, " "),
        strDrinkAlternate: data.strDrinkAlternate.trim().replace(/\s+/g, " "),
        strInstructions: data.strInstructions.trim().replace(/\s+/g, " "),
        strTags: data.strTags.trim().replace(/\s+/g,""),
        strYoutube: data.strYoutube.trim().replace(/\s+/g, " "),
        dateModified : formattedDate,
        ...ingredientsAndMeasures
    }
  
    console.log(cleanedData);
}