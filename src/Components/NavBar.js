import React from "react";
import { NavLink } from "react-router-dom";


function NavBar(){

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        textDecoration: "none",
        color: "black",
        margin: "1rem" 
      };


    return(
        <div>
            <NavLink
            to="/"
            exact
            style = {linkStyles}
            activeStyle={{
                background: "pink"
            }}
            >
                Home🏠
            </NavLink>
            <NavLink
            to="/bakeryPage"
            exact
            style = {linkStyles}
            activeStyle={{
                background: "pink"
            }}
            >
                Cakes🎂
            </NavLink>
            <NavLink
            to="/car"
            exact
            style = {linkStyles}
            activeStyle={{
                background: "pink"
            }}
            >
                Cart 🛒
            </NavLink>

        </div>
    )
}

export default NavBar