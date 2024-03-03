import { SearchBar } from "../../modules/recipes/SearchBar";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import './styles.css';

export const Header = ({ setRecipes }) => {
    return (
        <header>
            <div className="nav-container">
                <Navbar />
                <SearchBar setRecipes={setRecipes} />
            </div>
            <Logo />
        </header>
    )
}