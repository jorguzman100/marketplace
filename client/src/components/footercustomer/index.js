import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function footer() {
    return (
        <footer className="pt-4 pt-md-5 ftr">
            <div className="row">
                <div className="col-4 text-center float">
                    <img className="" src="../../Images/logo_small_icon_only_inverted.png" alt="" width="50" height="50"></img>
                    <small className="d-block link">© The Market 2020</small>
                </div>
                <div className="col-4 mx-auto">
                    <h5>Popular Categories</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                        <Link to={process.env.PUBLIC_URL + '/home/productlist/Sports'} className="link">
                            Sports
                        </Link>
                        </li>
                        <li>
                        <Link to={process.env.PUBLIC_URL + '/home/productlist/Technology'} className="link">
                            Technology
                        </Link>
                        </li>
                        <li>
                        <Link to={process.env.PUBLIC_URL + '/home/productlist/Wine & Licors'} className="link">
                            Wine & Licors
                        </Link>
                        </li>
                        <li>
                        <Link to={process.env.PUBLIC_URL + '/home/productlist/Pets'} className="link">
                            Pets
                        </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                    <h5>The Market</h5>
                    <ul className="list-unstyled text-small">
                        <li>Sell anything you want or...</li>
                        <li>purchase anything you need.</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default footer;
