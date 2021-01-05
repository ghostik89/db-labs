import React, {useContext, useEffect, useState} from "react";
import {Header} from "../components/Header/Header";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Loader} from "../components/Loader/Loader";
import {ProductItem} from "../components/ProductItem/ProductItem";

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
                        <div className={"row"}>
                            <h2 className={"col s12"}>Доступная продукция</h2>
                            {products.map((elem, index) => (
                                <ProductItem key={index} product={elem}/>
                            ))}
                        </div>
                    </>
                }
            </div>
        </>
    )
}