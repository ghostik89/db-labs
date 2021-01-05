import React,{useEffect, useState, useContext} from "react";
import {Header} from "../components/Header/Header";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const BasketPage = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const [products, setProducts] = useState([])

    useEffect( () => {
        request('/api/user/basket', 'GET', token)
            .then(data => setProducts(data))
            .catch(err => {
                console.log(err)
                setProducts([])
            })
    },[request, token])

    return(
        <>
            <Header/>
            <h1>Мои покупки</h1>
            <table>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Количество</th>
                    <th>Цена</th>
                    <th>Итого</th>
                </tr>
                </thead>

                <tbody>
                {products.map((elem, index) => (
                    <tr key={index}>
                        <td>{elem.NAME}</td>
                        <td>{elem.COUNT}</td>
                        <td>{elem.price}</td>
                        <td>{elem.price * elem.COUNT}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {products.length === 0 &&
            <h4>
                Ваша корзина пуста :(
                <br/>Добавьте свои любимые настолки в корзину)
            </h4>}
        </>
    )
}