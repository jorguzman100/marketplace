
import React from "react";
import Nav from 'react-bootstrap/Nav';
import "./style.css";
import { Link } from 'react-router-dom';


function Categoriescustomer(props) {
    return (
        <Nav fill>
        {props.categories.map(cate =>{
            return (
                <Nav.Item>
                    <Link
                        to={process.env.PUBLIC_URL + '/home/productlist/' + cate.categoryName} className="hoverlink"
                        >
                        <div className="nav-item">{cate.categoryName}</div>
                    </Link>
                </Nav.Item>
            )
        })}
        </Nav>
    );
}

export default Categoriescustomer;