import React from "react";
import classes from "./Header.module.css"
import logo from "./../../img/logo.jpg"

export function Header(){
    return(
        <header className={classes.header}>
            <img src={logo} alt="logo" />
        </header>
    );
}