import "./styles.css";
import { Link } from "react-router-dom";

export const Navbar = ({ isSignedIn, setIsSignedIn }) => {

    const handleClick = () => {
        setIsSignedIn(!isSignedIn);
    }
    return (
        <nav className="navbar">
            <ul>
                {isSignedIn ?
                    <div className="navbar-btns">
                        <li>
                            <Link to="/"><i class="fa-solid fa-house"></i>Home Page</Link>
                        </li>

                        <li onClick={handleClick}>
                            <Link to="user/login"><i class="fas fa-user"></i>Login</Link>
                        </li>
                    </div>
                    :
                    <div className="navbar-btns">
                        <li>
                            <Link to="/"><i class="fa-solid fa-house"></i>Home Page</Link>
                        </li>

                        <li>
                            <Link to="user/register"><i class="fa-regular fa-address-card"></i>Registration Form</Link>
                        </li>

                        <li>
                            <Link to="recipes/new"><i class="fa-solid fa-folder-plus"></i>Create New Recipe</Link>
                        </li>

                        <li>
                            <Link to="user/settings"><i class="fa-solid fa-gear"></i>Setting</Link>
                        </li>

                        <li onClick={handleClick}>
                            <Link to="/"><i class="fa-solid fa-right-from-bracket"></i>Logout</Link>
                        </li>

                    </div>
                }

            </ul>
        </nav>
    )
}