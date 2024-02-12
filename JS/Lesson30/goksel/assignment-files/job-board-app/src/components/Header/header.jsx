import headerImage from "../../images/bg-header-desktop.svg";
import headerImageSmall from "../../images/bg-header-mobile.svg";
import "./header.css";

export const Header = () => {

    return (
        <header>
            <picture >
                <source media="(max-width: 639px)" srcSet={headerImageSmall} />
                <img
                    src={headerImage} alt='Abstract background in different shades of green' />
            </picture>

        </header>
    )
}