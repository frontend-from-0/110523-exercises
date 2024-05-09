
export const MealCategory = [
    {
        title: "Breakfast",
        id: "breakfast"
    },
    {
        title: "Chicken",
        id: "chicken"
    },
    {
        title: "Dessert",
        id: "dessert"
    },
    {
        title: "Beef",
        id: "beef"
    },
    {
        title: "Goat",
        id: "goat"
    },
    {
        title: "Lamb",
        id: "lamb"
    },
    {
        title: "Miscellaneous",
        id: "miscellaneous"
    },
    {
        title: "Pasta",
        id: "pasta"
    },
    {
        title: "Pork",
        id: "pork"
    },
    {
        title: "Seafood",
        id: "seafood"
    },
    {
        title: "Side",
        id: "side"
    },
    {
        title: "Starter",
        id: "starter"
    },
    {
        title: "Vegan",
        id: "vegan"
    },
    {
        title: "Vegetarian",
        id: "vegetarian"
    }
]


export const MealArea = [
    {
        title : "American",
        id : "american"
    },
    {
        title : "British",
        id : "british"
    },
    {
        title : "Canadian",
        id : "canadian"
    },
    {
        title : "Chinese",
        id : "chinese"
    },
    {
        title : "Croatian",
        id : "croatian"
    },
    {
        title : "Dutch",
        id : "dutch"
    },
    {
        title : "Egyptian",
        id : "egyptian"
    },
    {
        title : "Filipino",
        id : "filipino"
    },
    {
        title : "French",
        id : "french"
    },
    {
        title : "Greek",
        id : "greek"
    },
    {
        title : "Indian",
        id : "indian"
    },
    {
        title : "Irish",
        id : "irish"
    },
    {
        title : "Italian",
        id : "italian"
    },
    {
        title : "Jamaican",
        id : "jamaican"
    },
    {
        title : "Japanese",
        id : "japanese"
    },
    {
        title : "Kenyan",
        id : "kenyan"
    },
    {
        title : "Malaysian",
        id : "malaysian"
    },
    {
        title : "Mexican",
        id : "mexican"
    },
    {
        title : "Moroccan",
        id : "moroccan"
    },
    {
        title : "Polish",
        id : "polish"
    },
    {
        title : "Portuguese",
        id : "portuguese"
    },
    {
        title : "Russian",
        id : "russian"
    },
    {
        title : "Spanish",
        id : "spanish"
    },
    {
        title : "Thai",
        id : "thai"
    },
    {
        title : "Tunisian",
        id : "tunisian"
    },
    {
        title : "Turkish",
        id : "turkish"
    },
    {
        title : "Unknown",
        id : "unknown"
    },
    {
        title : "Vietnamese",
        id : "vietnamese"
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
