import React from "react";
import classes from "./Dialogs.module.css";
import logo from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";

export function DialogItem(props: any){
    return(
        <div className={classes.sender}>
                    <NavLink to="/dialogs/1"><img src={logo} alt="avatar" /><h3>{props.name}</h3></NavLink>
        </div>
    );
}