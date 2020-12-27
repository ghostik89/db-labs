import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {paths} from "../helpers/paths";
import {AuthContext} from "../context/AuthContext";
import './header.css'

export const Header = () => {
    const {logout} = useContext(AuthContext)
    return(
        <nav className={'header teal lighten-2'}>
            <div className="nav-wrapper">
                <Link to={paths.toHome} className="brand-logo">MY HOBBY STORE</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li className={"logout"} onClick={() => logout()}>Выход</li>
                </ul>
            </div>
        </nav>
    )
}