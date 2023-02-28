import React from "react";
import classes from "./Post.module.css"

export function Post(props :any){
    return(
        <div className={classes.post}>
            <img src="https://oir.mobi/uploads/posts/2020-02/1582083735_43-p-gon-friks-49.jpg"></img>
            <h3>{props.postText}</h3>
        </div>
    );
}