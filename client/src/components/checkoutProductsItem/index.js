import React from "react";
// import "./style.css";
import Row from 'react-bootstrap/Row';
import "./style.css"

function ProductsListItem({ product, handleDeleteBtn, hideDeleteBtn }) {

    if (hideDeleteBtn === undefined) {
        hideDeleteBtn = true;
    }

    return (
        <Row className="rowmar">
            <div className="col-lg-1 col-sm-6">
                <img src={product.picture} className="imgwd" alt="Product"></img>
            </div>
            <div className="col-lg-2 col-sm-6">
                {product.productName}
            </div>
            <div className="col-lg-3 col-sm-6">
                ${product.price} MXN
                </div>
            <div className="col-lg-3 col-sm-6">
                {product.quantity}
            </div>
            <div className="col-lg-2 col-sm-6">
                ${parseFloat(product.price) * parseFloat(product.quantity)} MXN
                </div>
            <div
                className="col-lg-1 col-sm-6">
                {hideDeleteBtn &&
                    <i
                        className="fas fa-trash"
                        data-productid={product._id}
                        onClick={handleDeleteBtn}
                    ></i>}
            </div>
        </Row>
    )
}

export default ProductsListItem;




