import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {paths} from "../../helpers/paths";
import {AuthContext} from "../../context/AuthContext";
import './header.css'

export const Header = () => {
    const {logout} = useContext(AuthContext)
    return(
        <nav>
            <div className="nav-wrapper purple darken-3 header-container">
                <Link to={paths.toHome} className="brand-logo">MY HOBBY STORE</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={paths.toUserAccountPage}>Аккаунт</Link></li>
                    <li className={'pointer-btn'} onClick={() => logout()}><Link to={paths.toLogin}>Выход</Link></li>
                </ul>
            </div>
        </nav>
    )
}