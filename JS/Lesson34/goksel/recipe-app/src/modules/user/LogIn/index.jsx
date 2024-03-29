import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Button, Checkbox, Container, FormControl, FormControlLabel, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

export const LogIn = ({ isSignedIn, setIsSignedIn }) => {

    const {
        register,
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        setIsSignedIn(!isSignedIn);
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

 

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                <Avatar sx={{ marginTop: 8, bgcolor: "primary.main" }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant='h5'>Log In</Typography>

                <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
                    <Grid container spacing={2}>

                        <Grid item xs={12}>
                            <TextField
                                id='email'
                                label="Email"
                                variant='outlined'
                                size='medium'
                                type='email'
                                required
                                fullWidth
                                helperText="Please Enter Your Email"
                                {...register("email")}
                            />

                        </Grid>

                        <Grid item xs={12}>
                            <FormControl
                                variant='outlined'
                                required
                                size='medium'
                                fullWidth
                                {...register("password")}
                            >
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <OutlinedInput
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText>Please Enter Your Password</FormHelperText>
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControlLabel
                                control={<Checkbox value="remember" color='primary' />}
                                label="Remember me"
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Link to="/">
                                <Button
                                    type='submit'
                                    fullWidth
                                    variant='contained'
                                    onClick={onSubmit}
                                >Sign In</Button>
                            </Link>
                        </Grid>

                        <Grid container sx={{ mt: 2, ml: 2 }}>
                            <Grid item xs>
                                <Link to="#">
                                    Forgot password?
                                </Link>
                            </Grid>

                            <Grid item>
                                <Link to="/user/register">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}