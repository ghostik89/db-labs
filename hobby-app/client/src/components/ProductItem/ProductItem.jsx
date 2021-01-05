import React from "react";
import {Link} from "react-router-dom";
import {paths} from "../../helpers/paths";

export const ProductItem = ({product}) => (
    <div className="col s6">
        <div className="card">
            <div className="card-image responsive-img">
                <img
                    className={"responsive-img"}
                    src="https://picsum.photos/400?grayscale"
                    alt={"Image about product"}
                />
                <span className="card-title">{product.NAME}</span>
            </div>
            <div className="card-content">
                <p>{product.DESCRIPTION}</p>
            </div>
            <div className="card-action">
                <Link className={'purple-text'} to={paths.goToProductPage(product.ID)}>
                    Подробнее
                </Link>
            </div>
        </div>
    </div>
)