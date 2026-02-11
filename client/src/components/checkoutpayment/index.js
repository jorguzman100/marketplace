import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import CheckoutForm from "../CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51HLY6nIsyYjySygOXa1LA85XDeyEmpELSHi6IGah9ECVTI6zod8Hk5Z7IEFDlNLIjTFLJB5SOTnpI6R5szjarang00wQanVBJ7");

function ProductsList({ consumer }) {


    return (
        <Card body className="cardRes">
            <Elements stripe={promise}>
                <CheckoutForm consumer={consumer} />
            </Elements>
        </Card>

    )
}

export default ProductsList;



