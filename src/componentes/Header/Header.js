import Menu from "../Menu/Menu";
import Logo from "../Logo/Logo";
import Hamburguesa from "../Menu-hamburguesa/Menu-h";
import './Header.css'

const Header = () => {

    return (
        <div className="header-container">
           <Logo/>
           <h1 className="header__titulo">Gif Animados</h1>
           <Menu/>
           
        </div>
    )
}

export default Header