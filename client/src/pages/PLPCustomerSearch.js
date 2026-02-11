import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import "./styles.css";
import NavCustomer from '../components/navcustomer'
import Footer from '../components/footercustomer'
//import Productlist from '../components/plpproducts'
import Categories from '../components/categoriescustomer'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PLP() {
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState([])

    const history = useHistory();
    const id = history.location.pathname.split('/')[3];
    console.log("Search term", id)

    useEffect(() => {
        loadCategories()
      }, [])
    
    useEffect((id) => {
      loadProducts()
    }, [id])

    function loadCategories() {
        API.getCategories()
          .then(res => {
            setCategories(res.data);
          }
        )
        .catch(err => console.log(err));
    };

    function loadProducts() {
      API.getProducts()
        .then(res => {
          setProduct(res.data);
          console.log('Product Search: - res.data: ', res.data);
        }
        )
        .catch(err => console.log(err));
    };
    return (
        <>
            <NavCustomer />
            <Categories categories= {categories}/>
            <Container className="productspage minht">
              <h1>Products for: {id}</h1>
              <div className="row row-cols-1 row-cols-md-4">
                {product.filter(prod=>prod.productName.toUpperCase().includes(id.toUpperCase())||prod.description.toUpperCase().includes(id.toUpperCase())||prod.categoryName.toUpperCase().includes(id.toUpperCase()) ).map(filteredProd =>(
                  <div className="col mb-4">
                    <div className="card card-hgt">
                    <div className="imgCls">
                    <img src={filteredProd.picture} className="imgClsi" alt={product.productName}></img>
                    </div>
                        <div className="card-body">
                            <h5 className="card-title prd-tle">{filteredProd.productName}</h5>
                            <p className="card-text sub-crd-height">{filteredProd.description}</p>
                            <div className="smll-height"><small className="text-muted">Sold by: {filteredProd.sellerId}</small></div>
                            <div className="col-12 price">$ {filteredProd.price} MXN</div>
                            <Link
                            to={process.env.PUBLIC_URL + '/home/product/' + filteredProd._id}
                            >
                            <div className="buttonNav col-12">View</div>
                            </Link>
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
            <Footer />
        </>
    );
}


export default PLP;



