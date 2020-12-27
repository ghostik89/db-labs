import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useHttp} from "../hooks/useHttp";
import {paths} from "../helpers/paths";
import {useMessage} from "../hooks/useMessage";

export const RegisterPage = () => {
    const [user, setUser] = useState()
    const history = useHistory()
    const {loading, request} = useHttp()
    const message = useMessage()

    const handleChange = event => {
        setUser({...user, [event.target.name]:event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        request('/api/auth/register', 'POST', null, {...user})
            .then(() => {
                history.push(paths.toLogin)
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
                                <span className="card-title teal-text text-darken-2">REGISTER</span>
                            </div>
                            <div className="input-field s12">
                                <input
                                    id="name"
                                    name={"name"}
                                    type="text"
                                    className="validate"
                                />
                                <label htmlFor="name">Name</label>
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
                                <label htmlFor="password">Password</label>
                            </div>
                            <div className="card-action">
                                <button
                                    className="btn waves-effect waves-light btn-shift"
                                    type="submit"
                                    name="action"
                                    disabled={loading}
                                >
                                    Register
                                </button>
                                <button
                                    className="waves-effect waves-light btn"
                                    type="button"
                                    name="action"
                                    disabled={loading}
                                    onClick={() => history.push(paths.toLogin)}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}