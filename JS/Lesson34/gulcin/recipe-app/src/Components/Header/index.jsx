import { SearchBar } from "../../modules/recipes/SearchBar";
import { Logo } from "../Logo";
import { Navbar } from "../Navbar";
import './styles.css';

export const Header = ({ setRecipes, setSearchError }) => {
    return (
        <header>
            <div className="nav-container">
                <Navbar />
                <SearchBar setSearchError={setSearchError}  setRecipes={setRecipes} />
            </div>
            <Logo />
        </header>
    )
}