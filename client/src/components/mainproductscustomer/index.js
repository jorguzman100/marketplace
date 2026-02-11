import React from "react";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import "./style3.css";
// import Productdp from '../../pages/PDPCustomer';

function Mainproducts({ products }) {
  return (
    <div>
    <h1>
      Most popular products
    </h1>
      <div className="row row-cols-1 row-cols-md-4">
        {products.map(product => {
          return (
            <div key={product._id} className="col mb-4">
            <div className="card card-hgt">
              <div className="imgCls">
              <img src={product.picture} className="imgClsi" alt="product"/>
              </div>
              <Card.Body>
                <h5 className="card-title prd-tle">{product.productName}</h5>
                <Card.Text className="sub-crd-height">{product.description}</Card.Text>
                <div className="smll-height"><small className="text-muted">Sold by: {product.sellerId}</small></div>
                <div className="col-12 price">$ {product.price} MXN</div>
                <Link
                  to={process.env.PUBLIC_URL + '/home/product/' + product._id}
                >
                  <div className="buttonNav col-12">View</div>
                </Link>
              </Card.Body>
              </div>
            </div>
          );
        })
        }
      </div>
    </div>
  );
}

export default Mainproducts;