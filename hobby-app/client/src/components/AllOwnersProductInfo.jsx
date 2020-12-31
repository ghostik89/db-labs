import React,{useState, useEffect, useContext} from "react"
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";

export const AllOwnersProductInfo = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const [productsInfo, setProductsInfo] = useState([])

    useEffect( () => {
        request('/api/owners/allProducts', 'GET', token)
            .then(data => setProductsInfo(data))
            .catch(err => {
                console.log(err)
                setProductsInfo([])
            })
    },[request, token])

    return(
        <>
            <h4>Мои продукты</h4>
            <table>
                <thead>
                <tr>
                    <th>Назавание продукта</th>
                    <th>Количество</th>
                    <th>Цена, руб</th>
                </tr>
                </thead>
                <tbody>
                {productsInfo.map((elem, index) =>(
                    <tr key={index}>
                        <td>{elem.NAME}</td>
                        <td>
                            <div>
                                {elem.COUNT}
                                <i className="material-icons tiny">create</i>
                            </div>
                        </td>
                        <td>
                            <div>
                                {elem.price}
                                <i className="material-icons tiny">create</i>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}