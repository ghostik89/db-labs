import React, {useContext, useState} from "react";
import {Header} from "../components/Header";
import {ProductSelect} from "../components/ProductSelect";
import {useHttp} from "../hooks/useHttp";
import {AuthContext} from "../context/AuthContext";
import {useHistory} from "react-router-dom"
import {useMessage} from "../hooks/useMessage";
import {paths} from "../helpers/paths";

export const AddProductPage = () => {
    const [newProduct, setNewProduct] = useState({})
    const {request} = useHttp()
    const {token} = useContext(AuthContext)
    const history = useHistory()
    const message = useMessage()


    const handleChange = event => {
        setNewProduct({...newProduct, [event.target.name]: event.target.value})
    }

    const handleSubmit = async event => {
        event.preventDefault()
        request('/api/owners/product/create', 'POST', token, newProduct)
            .then(() => history.push(paths.toUserAccountPage))
            .catch(err => {
                console.log(err)
                message('Уупс, что-то пошло не так')
            })
    }

    return(
        <>
            <Header/>
            <div className={"container"}>
                <h2>Добавленеие продукта</h2>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <ProductSelect/>
                    <div className="input-field col s6">
                        <input name={"count"} id="first_name" type="number" className="validate"/>
                        <label htmlFor="first_name">Количество продуктов</label>
                    </div>
                    <div className="input-field col s6">
                        <input name={"price"} id="first_name" type="number" className="validate"/>
                        <label htmlFor="first_name">Цена</label>
                    </div>
                    <button className="btn waves-effect waves-light" type="submit" name="action">
                        Добавить продукт
                    </button>
                </form>
            </div>
        </>)
}