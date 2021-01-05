import React,{useState, useContext, useEffect} from "react";
import {useHttp} from "../../hooks/useHttp";
import {AuthContext} from "../../context/AuthContext";
import {Header} from "../../components/Header/Header";
import {AllOwnersProductInfo} from "../../components/OwnersProductTableInUserPage/AllOwnersProductInfo";
import './user-page.css'

export const UserPage = () => {
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState([])
    const [editEmail, setEditEmail] = useState(false)
    const [email, setEmail] = useState('')

    useEffect( () => {
        request('/api/user/info', 'GET', token)
            .then(data => {
                setUserInfo(data)
                setEmail(data.EMAIL)
            })
            .catch(err => {
                console.log(err)
                setUserInfo([])
            })
    },[request, token])

    const handleChange = event => setEmail(event.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault()
        request('/api/user/updateEmail/' + email, 'PUT', token)
            .then(() => {
                setEditEmail(false)
            })
            .catch(err => {
                console.log(err)
                setEditEmail(false)
            })
    }

    return(
        <>
            <Header/>
            <div className={"container"}>
                <h4>Основная информация</h4>
                <ul className="collection with-header">
                    <li className="collection-item">
                        <span className={"title"}>Имя пользователя</span>
                        <div>{userInfo.username} ({userInfo.NAME})</div>
                    </li>
                    <li className="collection-item">
                        <span className={"title"}>Email</span>
                        <div>
                            {!editEmail? email:
                                <form
                                    className="col s12"
                                    onChange={handleChange}
                                    onSubmit={handleSubmit}
                                >
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <input
                                                id="email"
                                                value={email}
                                                type="text"
                                                className="validate"
                                            />
                                        </div>
                                        <button
                                            className="waves-effect purple-text darken-3 waves-light btn-flat btn-lower"
                                            type="submit"
                                            name="action"
                                        >
                                            <i className="material-icons right">check</i>
                                        </button>
                                    </div>
                                </form>
                            }
                            {!editEmail &&
                            <span
                                className="secondary-content pointer-btn"
                                onClick={() => setEditEmail(true)}
                            >
                                <i className="material-icons  purple-text darken-3">create</i>
                        </span>}
                        </div>
                    </li>
                </ul>
                {!loading && userInfo.NAME === 'Продавец' && <AllOwnersProductInfo/>}
            </div>
        </>
    )
}