import React from "react";
import classes from "./Post.module.css"

export function Post(props :any){
    return(
        <div className={classes.post}>
            <img src="https://avatars.mds.yandex.net/i?id=9b038c3d1cc54586643092b5359a8413b82e81df-8183905-images-thumbs&n=13"  alt="avatar"></img>
            <div className={classes.text}>
                <h3>{props.postText}</h3>
            </div>
            
        </div>
    );
}