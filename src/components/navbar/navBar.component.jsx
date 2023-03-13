import {HiPhone} from "react-icons/hi";

import Icon from "../icon/icon.component";

import './navBar.style.css'
const NavBar = () => {
    return (
        <div className="__Navigation">
            <Icon/>
            <nav className="__Nav__Bar">
                <a href="/about">Sobre nosotros</a>
                <span>Toy Kits</span>
                <span>StarWars</span>
                <span>Lego</span>
                <span>Toy Kits</span>
            </nav>
            <div className="__Question">
                <div className="circle">
                        <HiPhone/>
                </div>
                <div className="text">
                    <span>Informes</span>
                    <span className="phone">525322</span>
                </div>
                
            </div>
        </div>

    );
}

export default NavBar;
