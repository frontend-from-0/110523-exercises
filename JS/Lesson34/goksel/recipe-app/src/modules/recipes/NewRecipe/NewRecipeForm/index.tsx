import { useForm } from "react-hook-form";
import { handlestrIngredientsAndMeasures } from "./newRecipeHelper"
import { Button, FormControl, FormLabel, InputLabel, Grid, MenuItem, Select, Typography, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import TextField from '@mui/material/TextField';
import { DataProps } from "./newRecipeHelper";
import { Areas, Categories } from "../../models";
import { useDispatch } from "react-redux";
import { updateRecipes } from "../../recipesSlice";


export const NewRecipe = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<DataProps>();

    const dispatch = useDispatch();

    const onSubmit = (data: DataProps) => {

        const dateObject = new Date();
        const formattedDate = dateObject.toISOString();
        const ingredientsAndMeasures = handlestrIngredientsAndMeasures(data.strIngredientsAndMeasures);
        delete data.strIngredientsAndMeasures;
        const cleanedData = {
            ...data,
            strMeal: data.strMeal.trim().replace(/\s+/g, " "),
            strDrinkAlternate: data.strDrinkAlternate ? data.strDrinkAlternate.trim().replace(/\s+/g, " ") : undefined,
            strInstructions: data.strInstructions.trim().replace(/\s+/g, " "),
            strTags: data.strTags.trim().replace(/\s+/g, ""),
            strYoutube: data.strYoutube ? data.strYoutube.trim().replace(/\s+/g, " ") : undefined,
            dateModified: formattedDate,
            ...ingredientsAndMeasures,
        }
 console.log(cleanedData);
        reset();
    }

    const ScreenSizes = { xs: 300, sm: 400, md: 500, lg: 600 };

    return (
        <Grid
            container
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            spacing={2}
            direction="column"
            alignItems="center"
            sx={{ mt: 10 }}
        >

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strMeal"
                    label="Recipe Name"
                    variant="outlined"
                    size="small"
                    {...register("strMeal", { required: "Recipe name is required", minLength: { value: 5, message: "Recipe Name should be at least 5 characters long" } })}
                />
                {errors.strMeal && (
                    <Typography color="error">{errors.strMeal.message}</Typography>
                )}
            </Grid>

            <Grid item>
                <FormControl sx={{ minWidth: ScreenSizes }}>
                    <InputLabel id="strCategory-label">Category</InputLabel>
                    <Select
                        labelId="strCategory-label"
                        id="strCategory"
                        label="Category"
                        size="small"
                        {...register("strCategory", { required: true })}
                    >
                        {Object.values(Categories).map((category, index) => (
                            <MenuItem value={category} key={index}>{category}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strInstructions"
                    label="Instructions"
                    size="small"
                    multiline
                    {...register("strInstructions", {
                        required: "Instructions are required",
                        minLength: {
                            value: 50,
                            message: "Please enter Instructions at least 50 characters long"
                        }
                    })}
                />
                {errors.strInstructions && (
                    <Typography color="error">{errors.strInstructions.message}</Typography>
                )}
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strIngredientsAndMeasures"
                    label="Ingredients and Measures"
                    size="small"
                    multiline
                    placeholder="Milk - 500ml, eggs - 2, sugar - 2tbsp"
                    {...register("strIngredientsAndMeasures", {
                        required: "Ingredients and Measures are required",
                        minLength: {
                            value: 10,
                            message: "Please enter at least 5 Ingredients and Measures"
                        }
                    })}
                />
                {errors.strIngredientsAndMeasures && (
                    <Typography color="error">{errors.strIngredientsAndMeasures.message}</Typography>
                )}
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strTags"
                    label="Tags"
                    variant="outlined"
                    placeholder="Spicy,fish"
                    size="small"
                    {...register("strTags", { required: "Tags are required", minLength: { value: 3, message: "Tags should be at least 3 characters long" } })}
                />
                {errors.strTags && (
                    <Typography color="error">{errors.strTags.message}</Typography>
                )}
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strMealThumb"
                    label="Share Your Image Link"
                    variant="outlined"
                    size="small"
                    {...register("strMealThumb")}
                />
            </Grid>

            <Grid item>
                <FormControl sx={{ minWidth: ScreenSizes }}>
                    <InputLabel id="strArea-label">Meal Area</InputLabel>
                    <Select
                        size="small"
                        labelId="strArea-label"
                        id="strArea"
                        label="Meal Area"
                        {...register("strArea", { required: true })}
                    >
                        {Object.values(Areas).map((area, index) => (
                            <MenuItem value={area} key={index}>{area}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strSource"
                    label="Source of Your Meal"
                    variant="outlined"
                    size="small"
                    {...register("strSource")}
                />
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strDrinkAlternate"
                    label="Drink Alternate"
                    variant="outlined"
                    size="small"
                    {...register("strDrinkAlternate")}
                />
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strImageSource"
                    label="Source of Your Image"
                    variant="outlined"
                    size="small"
                    {...register("strImageSource")}
                />
            </Grid>

            <Grid item>
                <TextField
                    sx={{ minWidth: ScreenSizes }}
                    id="strYoutube"
                    label="Share Youtube Link"
                    variant="outlined"
                    size="small"
                    {...register("strYoutube")}
                />
            </Grid>

            <Grid item>
                <FormControl sx={{ minWidth: ScreenSizes }}>
                    <FormLabel id="strCreativeCommonsConfirmed-label">Is Creative Commons Confirmed</FormLabel>
                    <RadioGroup
                        id="strCreativeCommonsConfirmed"
                        {...register("strCreativeCommonsConfirmed", { required: true })}
                    >
                        <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                        <FormControlLabel value="no" control={<Radio />} label="No" />
                    </RadioGroup>
                </FormControl>
            </Grid>

            <Grid item>
                <Button variant="contained" type="submit">Save Recipe</Button>
            </Grid>

        </Grid>
    )
}