import { Link } from 'react-router-dom';
import { CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';

import "./styles.css"
import { Recipe } from '../models';

interface RecipeListProps {
    recipes : Recipe[];
}

export const RecipeList = ({ recipes }:RecipeListProps) => {


    return (

        <Grid container sx={{ mt: 5, paddingLeft: { xs: 12 }, paddingRight: { xs: 10, sm: 10 } }}
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center">
            {recipes.map((recipe) => (
                <Grid item key={recipe.idMeal} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 345 }}>
                        <Link to={`recipes/${recipe.idMeal}/details`} className='recipeLink'>
                            <CardActionArea sx={{ flexGrow: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="180"
                                    image={recipe.strMealThumb}
                                    alt={recipe.strMeal}
                                />
                                <CardContent>
                                    <Typography variant='h5' component="div"
                                        fontSize={15}
                                        textAlign="center"
                                        sx={{
                                            whiteSpace: 'nowrap', overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>{recipe.strMeal}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                </Grid>
            ))}

        </Grid>
    )
};
