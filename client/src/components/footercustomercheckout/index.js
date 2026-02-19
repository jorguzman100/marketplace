import React from "react";
import "./style.css";

function footer() {
    return (
        <footer className="pt-4 pt-md-5 border-top ftrC">
            <div className="row">
                <div className="col-12 text-center float">
                    <div className="footer-brand-icon">
                        <i className="fas fa-shopping-bag"></i>
                    </div>
                    <small className="d-block link">© The Market 2020</small>
                </div>
            </div>
        </footer>
    );
}

export default footer;
