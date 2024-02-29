import {useForm} from "react-hook-form";
import './styles.css';


export const RegistrationForm = () => {

	const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

	const onSubmit = (data) => {
        console.log(data)
    }

	return (
		<div className='registration-form-wrapper'>
			<form
			className='registration-form'
			noValidate
			onSubmit={handleSubmit(onSubmit)}
			>
				<label htmlFor='user'>User Name</label>
				<input
					type='text'
					id='user'
					name='user'
					{...register("user",{
						required : "User name is required",
						minLength: {
							value:3,
							message : "User name should be at least 3 characters long"
						}
					})}
				/>

					{errors.user &&(
						<span className='error-message'>{errors.user.message}</span>
					)}

				<label htmlFor='email'>Email</label>
				<input
					type='email'
					id='email'
					name='email'
					{...register("email",{
						required: "User Email is Required",
						pattern: {
							value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
							message: 'Please enter a valid email adress'
						  }
					})}	
				/>

				{errors.email && (
					<span className='error-message'>{errors.email.message}</span>
				)}

				<label htmlFor='phoneNumber'>Phone Number</label>
				<input
					type='tel'
					id='phoneNumber'
					name='phoneNumber'
					{...register("phoneNumber",{
						required: "Phone Number is Required",
						pattern: {
							value: /^[0-9]{10}$/,
							message : "Please enter your phone number without the leading zero, in a 10-digit format."
						}
					})}
				/>

				{errors.phoneNumber && (
					<span className='error-message'>{errors.phoneNumber.message}</span>
				)}

				<label htmlFor='password'>Password</label>
				<input
					type='password'
					id='password'
					name='password'
					{...register("password",{
						required: "Password is Required",
						minLength: {
							value:6,
							message:"Password must be at least 6 characters long"
						},
						pattern: {
							value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
							message: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
						  }
					})}
				/>

					{errors.password &&(
						<span className='error-message'>{errors.password.message}</span>
					)}

				<button type='submit'>Submit</button>

			</form>
		</div>


	);
};
