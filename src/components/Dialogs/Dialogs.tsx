import React from "react";
import classes from "./Dialogs.module.css";
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
                <DialogItem name="C#_God(Nikita)" id="8"/>
            </div>    
            <div className={classes.messages}>
                <Message name="Zlatik" message="Hi sweetie"/>
                <Message name="God(Nikita)" message="Welcome to the club buddy."/>
            </div>
        </div>
    );
}