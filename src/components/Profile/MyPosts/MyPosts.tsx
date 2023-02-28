import React from "react";
import s from "./MyPosts.module.css"
import { Post } from "./Post/Post";

export function MyPosts(){
    return(
        <div>
            <div className={s.info}>
                My Posts
            </div>
            <form>
                <textarea></textarea>
                <input type="submit"/>
            </form>
            <div className={s.posts}>
                <Post postText="Hello body"/>
                <Post postText="This is me"/>
                <Post postText="This is measdasdasdasdasdasd"/>
            </div>
        </div>
        
    );
}