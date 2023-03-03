import React from "react";
import classes from "./Message.module.scss";

export function Message(props:any){
    return(
        <div className={classes.speechWrapper}>
        <div className={classes.bubble}>
            <div className={classes.txt}>
                <p className={classes.name}>{props.name}</p>
                <p className={classes.message}>{props.message}</p>
                <span className={classes.timestamp}>10:20 pm</span>
            </div>
        </div>
    </div>
    );
}