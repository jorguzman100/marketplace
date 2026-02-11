import React from "react";
// import "./style.css";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function ProductsList({ consumer }) {

    let address = {};

    if (consumer) {
        // if (consu.length > 0) {
        address = consumer.consumerAddress;
        // }
    }


    return (
        <Card body className="cardRes">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Streeet, number" value={address.street} />
                    <Form.Label>Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter your address number" value={address.number} />
                    <Form.Label>Neighborhood</Form.Label>
                    <Form.Control type="text" placeholder="Enter your neighborhood" value={address.neighborhood} />
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control type="text" placeholder="Enter your Zip code" value={address.zipCode} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Country</Form.Label>
                    <Form.Control as="select" value={address.country} >
                        <option>Select your country</option>
                        <option>Mexico</option>
                        <option>United States</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>State</Form.Label>
                    <Form.Control as="select" value={address.state}>
                        <option>Select your state</option>
                        <option>Ciudad de Mexico</option>
                        <option>Aguascalientes</option>
                        <option>Baja California</option>
                        <option>Baja California Sur</option>
                        <option>Campeche</option>
                        <option>Chiapas</option>
                        <option>Chihuahua</option>
                        <option>Coahuila</option>
                        <option>Colima</option>
                        <option>Durango</option>
                        <option>Guanajuato</option>
                        <option>Guerrero</option>
                        <option>Hidalgo</option>
                        <option>Jalisco</option>
                        <option>M&eacute;xico</option>
                        <option>Michoac&aacute;n</option>
                        <option>Morelos</option>
                        <option>Nayarit</option>
                        <option>Nuevo Le&oacute;n</option>
                        <option>Oaxaca</option>
                        <option>Puebla</option>
                        <option>Quer&eacute;taro</option>
                        <option>Quintana Roo</option>
                        <option>San Luis Potos&iacute;</option>
                        <option>Sinaloa</option>
                        <option>Sonora</option>
                        <option>Tabasco</option>
                        <option>Tamaulipas</option>
                        <option>Tlaxcala</option>
                        <option>Veracruz</option>
                        <option>Yucat&aacute;n</option>
                        <option>Zacatecas</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="info" type="submit">
                    Save
                </Button>
            </Form>
        </Card>
    )
}

export default ProductsList;




