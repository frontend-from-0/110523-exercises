
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



export const handlestrIngredientsAndMeasures=(data)=> {

    const ingredientsAndMeasures = data.split(",");
    let cleanedData = {};
    ingredientsAndMeasures.forEach((ingredientAndMeasure, index) => {
        const [ingredient, measure] = ingredientAndMeasure.trim().replace(/\s+/g, " ").split("-");
        cleanedData[`strIngredient${index + 1}`] = ingredient;
        cleanedData[`strMeasure${index + 1}`] = measure;
    });
    return cleanedData;

}
