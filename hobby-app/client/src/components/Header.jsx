import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {paths} from "../helpers/paths";
import {AuthContext} from "../context/AuthContext";
import './header.css'

export const Header = () => {
    const {logout} = useContext(AuthContext)
    return(
        <nav>
            <div className="nav-wrapper">
                <Link to={paths.toHome} className="brand-logo">MY HOBBY STORE</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={paths.toUsersBasketPage}>Корзина</Link></li>
                    <li><Link to={paths.toUserAccountPage}>Аккаунт</Link></li>
                    <li className={'pointer-btn'} onClick={() => logout()}>Выход</li>
                </ul>
            </div>
        </nav>
    )
}