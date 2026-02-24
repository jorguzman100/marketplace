import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import CheckoutForm from "../CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePublishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
const stripePromise = stripePublishableKey ? loadStripe(stripePublishableKey) : null;

function ProductsList({ consumer }) {
    if (!stripePromise) {
        return (
            <Card body className="cardRes">
                <h5>Stripe is not configured for this environment.</h5>
                <p className="mb-0">
                    Set <code>REACT_APP_STRIPE_PUBLISHABLE_KEY</code> in <code>client/.env</code>
                    and restart the React app.
                </p>
            </Card>
        );
    }


    return (
        <Card body className="cardRes">
            <Elements stripe={stripePromise}>
                <CheckoutForm consumer={consumer} />
            </Elements>
        </Card>

    )
}

export default ProductsList;
