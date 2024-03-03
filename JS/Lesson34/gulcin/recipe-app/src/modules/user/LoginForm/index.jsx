import { useForm } from 'react-hook-form';
import { USER_ACTIONS, useUserDispatch } from '../UserProvider';
import { useNavigate } from 'react-router';
import TextField from '@mui/material/TextField';
import { GiHotMeal } from "react-icons/gi";
import './styles.css';


export const LoginForm = () => {
    const dispatch = useUserDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const navigate = useNavigate();

    const onFormSubmit = (data) => {
        console.log(data)
        const username = data.username;
        dispatch({ type: USER_ACTIONS.updateUser, username });
        dispatch({ type: USER_ACTIONS.logIn })
        navigate('/', { replace: true })
    }

    return (
        <main className='main-pattern'>
            <form className='login-form' onSubmit={handleSubmit(onFormSubmit)}>
                <div className='welcome-section'>
                  <GiHotMeal className='form-logo' />
                  <h3>Welcome back!</h3>
                  <p>Please, enter your details.</p>

                </div>
                <TextField type="text" id="username" label="Username" variant="standard"  {...register('username', { required: 'Please, enter your username' })} />
                <TextField type="password" id="password" label="Password" variant="standard"  {...register('password', { required: 'Please, enter your password' })} />
                <button type="submit" className='form-btn--submit'>Log In</button>
            </form>
        </main>
    )
}