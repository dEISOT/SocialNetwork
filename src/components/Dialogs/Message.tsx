import React from "react";
import classes from "./Message.module.scss";

export function Message(){
    return(
        <div className={classes.speechWrapper}>
            <div className={classes.bubble}>
                <div className={classes.txt}>
                    <p className={classes.name}>Benni</p>
                    <p className={classes.message}>Hey, check out this Pure CSS speech bubble...</p>
                    <span className={classes.timestamp}>10:20 pm</span>
                </div>
            </div>
        </div>
    );
}