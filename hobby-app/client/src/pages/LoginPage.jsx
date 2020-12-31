import React,{useState, useContext} from "react";
import "./login-styles.css"
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom"
import {useHttp} from "../hooks/useHttp";
import {paths} from "../helpers/paths";
import {useMessage} from "../hooks/useMessage";

export const LoginPage = () => {
    const [authCred, setAuthCred] = useState()
    const {login} = useContext(AuthContext)
    const history = useHistory()
    const {loading, request} = useHttp()
    const message = useMessage()

    const handleChange = event => {
        setAuthCred({...authCred, [event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        request('/api/auth/login', 'POST', null, {...authCred})
            .then(data => {
                history.push(paths.toHome)
                login(data.token, data.userId)
            })
            .catch(() => message('Incorrect password or email!'))
    }

    return(
        <div className="container center-container">
            <div className="row">
                <div className="col s12">
                    <div className="card">
                       <form
                           className="card-content white-text"
                           onChange={handleChange}
                           onSubmit={handleSubmit}
                       >
                           <div className="card-content white-text">
                               <span className="card-title teal-text text-darken-2">ВОЙТИ</span>
                           </div>
                           <div className="input-field s12">
                               <input
                                   id="email"
                                   name={"email"}
                                   type="text"
                                   className="validate"
                               />
                               <label htmlFor="email">Email</label>
                           </div>
                           <div className="input-field s12">
                               <input
                                   id="password"
                                   type="password"
                                   name={"password"}
                                   className="validate"
                               />
                               <label htmlFor="password">Пароль</label>
                           </div>
                           <div className="card-action">
                               <button
                                   className="btn waves-effect waves-light btn-shift"
                                   type="submit"
                                   name="action"
                                   disabled={loading}
                               >
                                   Войти
                               </button>
                               <button
                                   className="waves-effect waves-light btn"
                                   type="button"
                                   name="action"
                                   disabled={loading}
                                   onClick={() => history.push(paths.toRegister)}
                               >
                                   Регистрация
                               </button>
                           </div>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    )
}