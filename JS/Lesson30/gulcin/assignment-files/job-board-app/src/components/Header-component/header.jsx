import BgHeader from '../../assets/images/bg-header-desktop.svg';
import './header.css';


export const Header = () => {
    return (
        <header><img className='header-img' src={BgHeader} alt='Header'/></header>
    )
};