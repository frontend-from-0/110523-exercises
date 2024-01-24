import headerImage from "../../images/bg-header-desktop.svg";
import "./header.css";

export const Header = () => {

    return (
        <header>
            <img src={headerImage} alt='header-image' />
        </header>
    )
}