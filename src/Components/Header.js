import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return(   
    <div className="header">
        <h1>My Blog App</h1>
        <div>
            <Link  className="linkStyle" to="/">Home</Link> | 
            <Link  className="linkStyle" to="/about"> About</Link>
        </div>
    </div>
    );
}

export default Header;