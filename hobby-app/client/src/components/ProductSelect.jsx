import React, {useState, useEffect, useContext} from "react";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const ProductSelect = () => {
    const {request} = useHttp()
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
        <div className="input-field col s12">
            Продукт
            <select name={"productId"} className="browser-default">
                <option value="" disabled selected>Выберите продукт, который хотите добавить</option>
                {products.map((elem, index) => (
                    <option key={index} value={elem.ID}>{elem.NAME}</option>
                ))}
            </select>
        </div>
    )
}