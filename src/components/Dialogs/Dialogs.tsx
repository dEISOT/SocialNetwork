import React from "react";
import classes from "./Dialogs.module.css";
import logo from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./DialogsItem";



export function Dialogs() {
    return(
        <div className={classes.dialogsWrapper}>
            <div className={classes.items}>
                {/*<div className={classes.sender}>
                    <a href="/"><img src={logo}/><h3>Zlatik</h3></a>
                 </div>*/}
                <DialogItem name="Zlatik" id="1"/>
                <DialogItem name="Kostya" id="2"/>
                <DialogItem name="Sergeevna" id="3"/>
                <DialogItem name="Julia" id="4"/>
                        
             
            </div>    
            <div className={classes.messages}>
                <h2>Hi sweetie</h2>
            </div>
        </div>
    );
}