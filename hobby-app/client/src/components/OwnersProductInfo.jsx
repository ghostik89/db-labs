import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "./Loader";

export const OwnersProductInfo = () => {
    const {ownersProductId} = useParams()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [product, setProduct] = useState({})

    useEffect( () => {
        request('/api/owners/all/byProduct/' + ownersProductId, 'GET', token)
            .then(data => setProduct(data[0]))
            .catch(err => {
                console.log(err)
                setProduct({})
            })
    },[request, token])

    return(
        <>
            <h1>Основная информация</h1>
            {loading? <Loader/>:
                <ul className="collection">
                    <li className="collection-item avatar">
                        <i className="material-icons circle green medium">account_circle</i>
                        <span className="title">Имя продавца</span>
                        <p>{product.NAME}</p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle green medium">assignment_returned</i>
                        <span className="title">Количество</span>
                        <p>{product.COUNT}</p>
                    </li>
                    <li className="collection-item avatar">
                        <i className="material-icons circle green medium">attach_money</i>
                        <span className="title">Цена</span>
                        <p>{product.price} руб.</p>
                    </li>
                </ul>
            }
            <button className="btn waves-effect waves-light" type="button" name="action">
                Купить
                <i className="material-icons right">add_shopping_cart</i>
            </button>
        </>
    )
}