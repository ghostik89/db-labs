import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const OwnersProductInfo = () => {
    const {ownersProductId} = useParams()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [product, setProduct] = useState({})

    useEffect( () => {
        request('/api/owners/all/byOneProduct/' + ownersProductId, 'GET', token)
            .then(data => setProduct(data[0]? data[0] : {}))
            .catch(err => {
                console.log(err)
                setProduct({})
            })
    },[request, token])

    return(
        <div className={"row"}>
            <h2 className={"col s12"}>Основная информация</h2>
            <img
                className={"responsive-img col s6"}
                src="https://picsum.photos/400?grayscale"
                alt={"Image about product"}
            />
            {!loading && <ul className="collection col s6">
                <li className="collection-item avatar">
                    <i className="material-icons circle orange lighten-2 medium">account_circle</i>
                    <span className="title">Имя продавца</span>
                    <p>{product.NAME}</p>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle orange lighten-2 medium">assignment_returned</i>
                    <span className="title">Количество</span>
                    <p>{product.COUNT}</p>
                </li>
                <li className="collection-item avatar">
                    <i className="material-icons circle orange lighten-2 medium">attach_money</i>
                    <span className="title">Цена</span>
                    <p>{product.price} руб.</p>
                </li>
            </ul>}
        </div>
    )
}