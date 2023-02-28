import React from "react";
import classes from "./Dialogs.module.css";
import logo from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";
import { DialogItem } from "./DialogsItem";
import { Message } from "./Message";



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
                <DialogItem name="Sanya" id="5"/>
                <DialogItem name="Egorik" id="6"/>
                <DialogItem name="Dasha" id="7"/>

                        
             
            </div>    
            <div className={classes.messages}>
                <Message />
                
            </div>
        </div>
    );
}