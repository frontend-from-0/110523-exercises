import { useForm } from "react-hook-form";
import { Link, unstable_HistoryRouter } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Box, Container, Grid, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormControlLabel, Button, Snackbar, FormHelperText } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';


interface RegistrationFormProps {
	open: boolean;
	setOpen: any;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export const RegistrationForm = () => {

	const [open, setOpen] = React.useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm<RegistrationFormProps>();


	const onSubmit = (data: RegistrationFormProps) => {
		console.log(data);
		reset();
		setOpen(true);
	}

	const [showPassword, setShowPassword] = React.useState(false);

	const handleClickShowPassword = () => setShowPassword(!showPassword);

	return (

		<Container component="main" maxWidth="xs">
			<Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
				<Avatar sx={{ mt: 8, bgcolor: "primary.main" }}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant='h5'>Sign Up</Typography>

				<Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>

					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								//@ts-ignore
								name="firstName"
								id="firstName"
								label="First Name"
								{...register("firstName")}
							/>
						</Grid>

						<Grid item xs={12} sm={6}>
							<TextField
								required
								fullWidth
								id="lastName"
								label="Last Name"
								{...register("lastName")}
							/>
						</Grid>

						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								id="email"
								label="Email Adress"
								type="email"
								error={!!errors.email}
								helperText={errors.email ? errors.email.message : ""}
								{...register("email", {
									required: "User Email is Required",
									pattern: {
										value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message: 'Please enter a valid email adress'
									}
								})}
							/>
						</Grid>

						<Grid item xs={12}>
							<FormControl
								variant='outlined'
								required
								size='medium'
								fullWidth
								error={!!errors.password}
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
									{...register("password", {
										required: "Password is Required",
										minLength: {
											value: 6,
											message: "Password must be at least 6 characters long"
										},
										pattern: {
											value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
											message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
										}
									})}
								/>
								<FormHelperText>{errors.password ? errors.password.message : ''}</FormHelperText>
							</FormControl>
						</Grid>

						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>

					<Button
						type="submit"
						fullWidth
						variant="contained"
						sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
					<Snackbar
						message="Registration is successfully! Now you can go to the Login page"
						autoHideDuration={4000}
						open={open}
						action={
							<Button size="small">
								<Link to="/user/login">Log In</Link>
							</Button>
						}
						anchorOrigin={{
							vertical: "top",
							horizontal: "center"
						}}
						sx={{ top: { xs: 50, sm: 30 } }}
					/>

					<Grid container justifyContent="flex-end">
						<Grid item>
							<Link to="/user/login">Already have an account? Log in</Link>
						</Grid>
					</Grid>
				</Box>
			</Box>
		</Container>


	);
};
