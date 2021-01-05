import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "./Loader/Loader";

export const OwnersProductComments = () => {
    const {ownersProductId} = useParams()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [comments, setComments] = useState([])
    const [update, setUpdate] = useState(false)
    const [commentText, setCommentText] = useState('')

    useEffect( () => {
        request('/api/comment/product/' + ownersProductId, 'GET', token)
            .then(data => {
                setComments(data)
                setUpdate(false)
            })
            .catch(err => {
                console.log(err)
                setComments([])
                setUpdate(false)
            })
    },[request, token, update])

    const handleChange = event => setCommentText(event.target.value)

    const handleSubmit = async (event) => {
        event.preventDefault()
        request('/api/comment/product/create', 'POST', token, {text: commentText, productId: +ownersProductId})
            .then(() => {
                setUpdate(true)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <>
            <h3>Комментарии</h3>
            {loading? <Loader/> :
                <>
                    <ul className="collection">
                        {comments.map((elem, index) => (
                            <li key={index} className="collection-item avatar">
                                <i className="material-icons circle green medium">account_circle</i>
                                <span className="title">{elem.NAME}</span>
                                <p>{elem.TEXT}</p>
                            </li>
                        ))}
                    </ul>
                </>}
            <div className={"row"}>
                <form className="col s12" onChange={handleChange} onSubmit={handleSubmit}>
                    <div className="input-field col s6">
                        <input id="comment" type="text" className="validate"/>
                        <label htmlFor="comment">Комментарий</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">Отправить
                        <i className="material-icons right">send</i>
                    </button>
                </form>
            </div>
        </>
    )
}