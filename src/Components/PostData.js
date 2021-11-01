import React from "react";
import PostDetails from "./PostDetails";

function PostData({posting,delPost}) {
    return (
        <ul className="post-data">
            {posting.map((post,index) => {
            return <PostDetails key={index}
             post={post} 
             delPost={delPost} /> 
            })}
        </ul>
    )
}

export default PostData;