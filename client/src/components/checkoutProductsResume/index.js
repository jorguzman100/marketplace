import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import "./style.css"
import { Link, useLocation } from "react-router-dom";
import { CHECKOUT_PROGRESS, unlockCheckoutStep } from "../../utils/checkoutProgress";

function ProductsListResume({ localStorageProducts }) {
    const location = useLocation();
    const isCheckFlow = location.pathname.includes("/check");
    const paymentPath = isCheckFlow
        ? process.env.PUBLIC_URL + "/check/payment"
        : process.env.PUBLIC_URL + "/home/payment";

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
                            to={paymentPath}
                            onClick={() => unlockCheckoutStep(CHECKOUT_PROGRESS.PAYMENT)}
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



