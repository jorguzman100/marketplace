import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import { Link } from "react-router-dom";

function ProductsListResume({ localStorageProducts }) {

    let subtototal = 0;
    let shipping = 100;

    localStorageProducts.forEach(product => {
        console.log('product: ', product, typeof (product));
        if (typeof (product) !== 'number') {
            subtototal += parseFloat(product.price) * parseFloat(product.quantity);
        }
    });
    let total = subtototal + shipping;

    return (
        <div className="row">
            <div className="col-lg-6 col-sm-12">
            </div>
            <div className="col-lg-6 col-sm-12">
                <Card body className="cardRes col-lg-12 col-sm-12">
                    <Row>
                        <div className="col-lg-6 col-sm-12">Subtotal</div>
                        <div className="col-lg-6 col-sm-12">${subtototal} MXN</div>
                    </Row>
                    <Row>
                        <div className="col-lg-6 col-sm-12">Shipping</div>
                        <div className="col-lg-6 col-sm-12">${shipping} MXN</div>
                    </Row>
                    <Row>
                        <div className="col-lg-6 col-sm-12">Total</div>
                        <div className="col-lg-6 col-sm-12">${total} MXN</div>
                    </Row>
                    <Row>
                        <Link
                            to={process.env.PUBLIC_URL + '/home/payment'}
                        >
                            <div className="buttonNav col-12">Purchase</div>
                        </Link>
                    </Row>
                </Card>
            </div>
        </div>
    )
}

export default ProductsListResume;




