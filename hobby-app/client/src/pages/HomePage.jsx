import React from "react";
import {Link} from "react-router-dom"
import {paths} from "../helpers/paths";

export const HomePage = () => {
    return(
        <>
            <nav>
                <div className="nav-wrapper">
                    <Link to={paths.toHome} className="brand-logo">MY HOBBY STORE</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to={paths.toHome}>Sass</Link></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}