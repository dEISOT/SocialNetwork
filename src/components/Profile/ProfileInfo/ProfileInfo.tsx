import React from "react";
import classes from "./ProfileInfo.module.css"
import backgroundPic from "./7082673_23964.jpg"

export function ProfileInfo(){
    return(
        <div className={classes.content}>
            <img src={backgroundPic} alt="background"></img>
            <div className={classes.description}>
                <img src="https://avatars.mds.yandex.net/i?id=9b038c3d1cc54586643092b5359a8413b82e81df-8183905-images-thumbs&n=13" alt="ava"/>
                <div className={classes.text}>
                    <h3>Name: de1sot</h3>
                     <h3>Age: 20</h3>
                    {/*<h3>Name: asdasd</h3>
                    <h3>Name: asdasd</h3> */}
                </div>
            </div>
                
            
        </div>
    );
}