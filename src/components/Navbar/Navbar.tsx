import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css"

export function Navbar(){
    return(
        <div className={classes.navbar}>
            <ul>
                <li><NavLink to="/profile"><span>Profile</span></NavLink></li>
                <li><NavLink to="/Dialogs"><span>Dialogs</span></NavLink></li>
                <li><a href="#"><span>Settings</span></a></li>
            </ul>
        </div>
    );
}