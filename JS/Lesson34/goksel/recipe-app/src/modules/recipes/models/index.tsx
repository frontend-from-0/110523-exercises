export interface Recipe {
    idMeal : string;
    strMeal : string;
    strDrinkAlternate?: string;
    strCategory: Categories;
    strArea : Areas;
    strInstructions: string;
    strMealThumb: string;
    strTags: string;
    strYoutube: string;
    strIngredient1:string;
    strIngredient2:string;
    strIngredient3:string;
    strIngredient4?:string;
    strIngredient5?:string;
    strMeasure1:string;
    strMeasure2:string;
    strMeasure3:string;
    strMeasure4?:string;
    strMeasure5?:string;
    strSource:string;
    strImageSource?:string;
    strCreativeCommonsConfirmed?:string;
    dateModified?:string;
};

export enum Categories {
    Beef = "Beef",
    Breakfast = "Breakfast",
    Chicken ="Chicken",
    Dessert = "Dessert",
    Goat = "Goat",
    Lamb = "Lamb",
    Miscellaneous = "Miscellaneous",
    Pasta="Pasta",
    Pork = "Pork",
    Seafood ="Seafood",
    Side = "Side",
    Starter = "Starter",
    Vegan ="Vegan",
    Vegetarian ="Vegetarian"
}

export enum Areas {
    American ="American",
    British="British",
    Canadian="Canadian",
    Chinese="Chinese",
    Croatian="Croatian",
    Dutch="Dutch",
    Egyptian="Egyptian",
    Filipino="Filipino",
    French="French",
    Greek="Greek",
    Indian="Indian",
    Irish="Irish",
    Italian="Italian",
    Jamaican="Jamaican",
    Japanese="Japanese",
    Kenyan="Kenyan",
    Malaysian="Malaysian",
    Mexican="Mexican",
    Moroccan="Moroccan",
    Polish="Polish",
    Portuguese="Portuguese",
    Russian="Russian",
    Spanish="Spanish",
    Thai="Thai",
    Tunisian="Tunisian",
    Turkish="Turkish",
    Unknown="Unknown",
    Vietnamese="Vietnamese"
}