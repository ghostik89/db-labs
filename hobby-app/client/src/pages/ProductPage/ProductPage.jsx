import React, {useContext, useEffect, useState} from "react";
import {Header} from "../../components/Header/Header";
import {useHttp} from "../../hooks/useHttp";
import {AuthContext} from "../../context/AuthContext";
import {Loader} from "../../components/Loader/Loader";
import {useParams} from "react-router-dom"
import {OwnersTable} from "../../components/OwnersTable";
import './product-page.css'

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
    },[request, token, productId])
    return(
        <>
            <Header/>
            <div className={"container"}>
                    {loading? <Loader/>:
                    <>
                        <div className={"row"}>
                            <h2 className={"col s12"}>{product.NAME}</h2>
                            <img
                                className={"responsive-img col s6"}
                                src="https://picsum.photos/400?grayscale"
                                alt={"Image about product"}
                            />
                            <div className={"col s6"}>
                                <ul className="collection">
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle orange lighten-2 medium">assignment</i>
                                        <span className="title">Описание продукта</span>
                                        <p>{product.DESCRIPTION}</p>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle orange lighten-2 medium">bookmark</i>
                                        <span className="title">Категория</span>
                                        <p>{product.categoryName}</p>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle orange lighten-2 medium">collections_bookmark</i>
                                        <span className="title">Игровая серия</span>
                                        <p>{product.gameSeriesDescr}</p>
                                    </li>
                                    <li className="collection-item avatar">
                                        <i className="material-icons circle orange lighten-2 medium">business</i>
                                        <span className="title">Издательский дом</span>
                                        <p>{product.pubName}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={"divider"}/>
                        <h2>Продавцы</h2>
                        <OwnersTable/>
                    </>
                }
            </div>
        </>
    )
}