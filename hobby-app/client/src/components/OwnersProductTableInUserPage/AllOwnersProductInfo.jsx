import React,{useState, useEffect, useContext} from "react"
import {useHttp} from "../../hooks/useHttp";
import {AuthContext} from "../../context/AuthContext";
import {Link} from "react-router-dom";
import {paths} from "../../helpers/paths";
import {TableItem} from "./TableItem";

export const AllOwnersProductInfo = () => {
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const [productsInfo, setProductsInfo] = useState([])


    useEffect( () => {
        if(productsInfo.length === 0)
            request('/api/owners/allProducts', 'GET', token)
                .then(data => {
                    setProductsInfo(data)
                })
                .catch(err => {
                    console.log(err)
                    setProductsInfo([])
                })
    },[request, token])

    return(
        <>
            <div className={"row"}>
                <h4 className={"col s3"}>Мои продукты</h4>
                <Link to={paths.toCreateOwnersProduct}
                      className="btn-floating btn-small waves-effect waves-light redЛ">
                    <i className="material-icons">add</i>
                </Link>
            </div>
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
                   <TableItem index={index} product={elem}/>
                ))}
                </tbody>
            </table>
        </>
    )
}