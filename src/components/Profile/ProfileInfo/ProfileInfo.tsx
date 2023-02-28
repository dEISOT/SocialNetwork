import React from "react";
import classes from "./ProfileInfo.module.css"
import backgroundPic from "./7082673_23964.jpg"
import { MyPosts } from "../MyPosts/MyPosts";

export function ProfileInfo(){
    return(
        <div className={classes.content}>

            <img src={backgroundPic} alt="background"></img>
            <div className={classes.description}>
            </div>
        </div>
    );
}