import { HiPhone } from "react-icons/hi";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

import Logo from "../logo/logo.component";

import "./navBar.style.css";
const NavBar = () => {
    return (
        <Fragment>
            <div className="__Navigation">
                <Logo />
                <nav className="__Nav__Bar">
                    <Link to="/about">Sobre nosotros</Link>
                    <span>Toy Kits</span>
                    <span>StarWars</span>
                    <span>Lego</span>
                    <span>Toy Kits</span>
                </nav>
                <div className="__Question">
                    <div className="circle">
                        <HiPhone />
                    </div>
                    <div className="text">
                        <span>Informes</span>
                        <span className="phone">525322</span>
                    </div>
                </div>
            </div>
            
        </Fragment>
    );
};

export default NavBar;
