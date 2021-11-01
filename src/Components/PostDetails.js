import React from "react";
import { useHistory } from "react-router";


function PostDetails({post, delPost}) {
    const history = useHistory()
    return (
    <li className="data">
    <p onClick={()=>history.push(`/postdata/${post.id}`)}>{post.title}</p>
    <button onClick={()=>delPost(post.id)}>X</button>
    </li>
    );
}

export default PostDetails;