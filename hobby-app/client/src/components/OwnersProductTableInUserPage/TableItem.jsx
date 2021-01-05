import React,{useState, useContext} from "react"
import {AuthContext} from "../../context/AuthContext";
import {useHttp} from "../../hooks/useHttp";

export const TableItem = ({product, index}) => {
    const [isEditPrice, setIsEditPrice] = useState(false)
    const [isEditCount, setIsEditCount] = useState(false)
    const [newPrice, setNewPrice] = useState(null)
    const [newCount, setNewCount] = useState(null)
    const {token} = useContext(AuthContext)
    const {request} = useHttp()

    const handleChange = event => {
        if(event.target.name === 'price')
            setNewPrice(event.target.value)
        else
            setNewCount(event.target.value)
    }

    const handleEditPrice = async (event) => {
        event.preventDefault()
        const body = {
            id: product.ID,
            price: newPrice
        }
        request('/api/owners/product/update/price', 'PUT', token, body)
            .then(() => {
                setIsEditPrice(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleEditCount = async (event) => {
        event.preventDefault()
        const body = {
            id: product.ID,
            count: newCount
        }
        request('/api/owners/product/update/count', 'PUT', token, body)
            .then(() => {
                setIsEditCount(false)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <tr key={index}>
            <td>{product.NAME}</td>
            <td>
                {!isEditCount? <div>
                        {newCount? newCount:product.COUNT}
                        <i
                            className="material-icons tiny btn-edit purple-text darken-3 pointer-btn"
                            onClick={() => setIsEditCount(true)}
                        >
                            create
                        </i>
                    </div>:
                    <form className={"row"} onChange={handleChange} onSubmit={handleEditCount}>
                        <div className="input-field col s4">
                            <input
                                id={"count" + product.ID}
                                value={newCount? newCount:product.COUNT}
                                type="number"
                                className="validate"
                                name={"count"}
                            />
                            <label className="active" htmlFor={"count" + product.ID}>Количество</label>
                        </div>
                        <button className="waves-effect waves-light btn-flat col s2 btn-lower-table purple-text darken-3"
                                type="submit" name="action">
                            <i className="material-icons">send</i>
                        </button>
                    </form>
                }
            </td>
            <td>
                {!isEditPrice? <div>
                    {newPrice? newPrice: product.price}
                    <i
                        className="material-icons tiny btn-edit purple-text darken-3 pointer-btn"
                        onClick={() => setIsEditPrice(true)}
                    >
                        create
                    </i>
                </div>: <form className={"row"} onChange={handleChange} onSubmit={handleEditPrice}>
                    <div className="input-field col s4">
                        <input
                            id={"price" + product.ID}
                            type="number"
                            value={newPrice? newPrice: product.price}
                            className="validate"
                            name={"price"}
                        />
                        <label className="active" htmlFor={"price" + product.ID}>Цена</label>
                    </div>
                    <button className="waves-effect waves-light btn-flat col s1 btn-lower-table purple-text darken-3"
                            type="submit" name="action">
                        <i className="material-icons right">send</i>
                    </button>
                </form>}
            </td>
        </tr>
    )
}