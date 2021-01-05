import React, {useContext, useEffect, useState} from "react";
import {Header} from "../components/Header/Header";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Link} from "react-router-dom";
import {Loader} from "../components/Loader";
import {paths} from "../helpers/paths";

export const HomePage = () => {
    const {loading, request} = useHttp()
    const {token} = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect( () => {
        request('/api/products/allProducts', 'GET', token)
            .then(data => setProducts(data))
            .catch(err => {
                console.log(err)
                setProducts([])
            })
    },[request, token])

    return(
        <>
            <Header/>
            <div className="container">
                {loading?
                    <Loader/>:
                    <>
                        <h1>Доступная продукция</h1>
                        <div className="collection">
                            {products.map((elem, index) => (
                                <Link
                                    key={index}
                                    to={paths.goToProductPage(elem.ID)}
                                    className="collection-item avatar"
                                >
                                    <i className="material-icons circle green medium">casino</i>
                                    <span className="title">{elem.NAME}</span>
                                    <p>
                                        {elem.DESCRIPTION}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </>
                }
            </div>
        </>
    )
}