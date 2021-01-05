import React, {useContext, useState, useEffect} from "react";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {Link, useParams} from "react-router-dom";
import {Loader} from "./Loader/Loader";
import './OwnersProductTableInUserPage/owners-stylers.css'
import {paths} from "../helpers/paths";

export const OwnersTable = () => {
    const {loading, request} = useHttp()
    const {productId} = useParams()
    const {token} = useContext(AuthContext)
    const [owners, setOwners] = useState([])


    useEffect(() => {
        request('/api/owners/all/byProduct/' + productId, 'GET', token)
            .then(data => setOwners(data))
            .catch(err => {
                console.log(err)
                setOwners([])
            })
    },[request, token])

    return(
        <table className={"after-table"}>
            <thead>
            <tr>
                <th>Имя продавца</th>
                <th>Количество товара</th>
                <th>Цена</th>
            </tr>
            </thead>
            <tbody>
            {loading? <Loader/>:
                <>
                    {owners.map((elem, index) => (
                        <tr key={index} >
                            <td>
                                <Link to={paths.goToOwnersProductPage(elem.ID)}>
                                    {elem.NAME}
                                </Link>
                            </td>
                            <td>
                                <Link to={paths.goToOwnersProductPage(elem.ID)}>
                                    {elem.COUNT}
                                </Link>
                            </td>
                            <td>
                                <Link to={paths.goToOwnersProductPage(elem.ID)}>
                                    {elem.price}
                                </Link>
                            </td>
                        </tr>
                    ))}
                </>
            }
            </tbody>
        </table>
    )
}