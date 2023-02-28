import React from "react";
import { MyPosts } from "./MyPosts/MyPosts";
import classes from "./Profile.module.css";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";


export function Profile(){
    return(
        <div className={classes.content}>
            <ProfileInfo />
            <MyPosts />
            
        </div>
            
    );
}