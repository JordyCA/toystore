import { Fragment } from "react";
import { Outlet } from "react-router-dom";


import Bar from "../bar/bar.component";
import NavBar from "../navbar/navBar.component";

const Header = () => {
    return (
        <Fragment> 
            <header>
                <Bar />
                <NavBar />
            </header>
            <Outlet />
        </Fragment>
            

    )
}

export default Header;