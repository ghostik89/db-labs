import React, {useContext, useEffect, useState} from "react";
import {Header} from "../components/Header/Header";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader/Loader";
import {useParams} from "react-router-dom"
import {OwnersTable} from "../components/OwnersTable";

export const ProductPage = () => {
    const {productId} = useParams()
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [product, setProduct] = useState({})

    useEffect( () => {
        request('/api/products/product/' + productId, 'GET', token)
            .then(data => setProduct(data[0]))
            .catch(err => {
                console.log(err)
                setProduct({})
            })
    },[request, token])
    return(
        <>
            <Header/>
            <div className={"container"}>
                    {loading? <Loader/>:
                    <>
                        <h1>{product.NAME}</h1>
                        <ul className="collection">
                            <li className="collection-item avatar">
                                <i className="material-icons circle green medium">assignment</i>
                                <span className="title">Описание продукта</span>
                                <p>{product.DESCRIPTION}</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle green medium">bookmark</i>
                                <span className="title">Категория</span>
                                <p>{product.categoryName}</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle green medium">collections_bookmark</i>
                                <span className="title">Игровая серия</span>
                                <p>{product.gameSeriesDescr}</p>
                            </li>
                            <li className="collection-item avatar">
                                <i className="material-icons circle green medium">business</i>
                                <span className="title">Издательский дом</span>
                                <p>{product.pubName}</p>
                            </li>
                        </ul>
                        <h2>Продавцы</h2>
                        <OwnersTable/>
                    </>
                }
            </div>
        </>
    )
}