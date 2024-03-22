import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Recipe } from "../models";

export const RecipeDetail = () => {
    const { id } = useParams();

    const [recipeDetail, setRecipeDetail] = useState<Recipe|null>(null);


    useEffect(() => {
        const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(URL)
            .then(res => res.json())
            .then((data) => {
                if (data?.meals[0]) {
                    setRecipeDetail(data.meals[0])
                }
            })
    }, [id]);

    return (
        recipeDetail ?
            <Card sx={{ maxWidth: 400, margin:"0 auto", mt:{xs:12, sm:10} }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={recipeDetail?.strMealThumb}
                        alt={recipeDetail?.strMeal}
                    />
                    <CardContent>
                        <Stack
                        direction="row" alignItems="center"
                        spacing={1}>
                            <Typography
                            fontWeight="900"
                            >Your Meal:</Typography>
                            <Typography>{recipeDetail?.strMeal}</Typography>
                        </Stack>

                        <Stack
                        direction="row" alignItems="center"
                        spacing={1}>
                            <Typography
                            fontWeight="900"
                            >Meal Category:</Typography>
                            <Typography>{recipeDetail?.strCategory}</Typography>
                        </Stack>

                        <Stack
                        direction="row" alignItems="center"
                        spacing={1}>
                            <Typography
                            fontWeight="900"
                            >Country Of Origin:</Typography>
                            <Typography>{recipeDetail?.strArea}</Typography>
                        </Stack>
                    </CardContent>
                </CardActionArea>
            </Card>

            :

            <Alert severity="warning">Recipe Details Not Found</Alert>
    )
}



