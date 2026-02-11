import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import Item from '../checkoutProductsItem';

function ProductsList({ localStorageProducts, handleDeleteBtn }) {

    return (
        <Card body className="cardRes">
            <Row>
                <div className="col-lg-3 col-sm-12">
                    Product
                </div>
                <div className="col-lg-3 col-sm-12">
                    Price
                </div>
                <div className="col-lg-3 col-sm-12">
                    Quantity
                </div>
                <div className="col-lg-3 col-sm-12">
                    Total
                </div>
            </Row>
            {localStorageProducts.map((product) => {
                return (
                    <Item
                        key={product._id}
                        product={product}
                        handleDeleteBtn={handleDeleteBtn}
                    />
                );
            })}
        </Card>
    )
}

export default ProductsList;




