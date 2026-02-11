import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import "./style.css";


function NavCustomerCheckout() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand className="col-lg-9 col-sm-12">
                <Link
                    to={process.env.PUBLIC_URL + '/'}
                >
                    <img
                        alt=""
                        src="../../Images/logo.png"
                        width="300"

                        className="d-inline-block align-top"
                    />
                </Link>
            </Navbar.Brand>
                <Nav className="col-lg-3 col-sm-12">
                    <Nav.Link>1.Review</Nav.Link>
                    <Nav.Link>2.Shippment & Payment</Nav.Link>
                    <Nav.Link>3.Confirmation</Nav.Link>
                </Nav>
        </Navbar>
    );
}

export default NavCustomerCheckout;
