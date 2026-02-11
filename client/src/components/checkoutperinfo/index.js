import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ProductsList({ consumer }) {

    let currentConsumer = {};

    if (consumer) {
        // if (consu.length > 0) {
        currentConsumer = consumer;
        // }
    }


    return (
        <Card body className="cardRes">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" defaultValue={currentConsumer.firstName || ""} />
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" defaultValue={currentConsumer.lastName || ""} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" defaultValue={currentConsumer.email || ""} />
                    <Form.Text className="text-muted">
                        We'll never share your information with anyone else.
                    </Form.Text>
                </Form.Group>
                <Button variant="info" type="submit">
                    Save
                </Button>
            </Form>
        </Card>
    )
}

export default ProductsList;




