import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Container from 'react-bootstrap/Container';
import "./styles.css";
import NavCustomer from '../components/navcustomer'
import Footer from '../components/footercustomer'
import Productlist from '../components/plpproducts'
import Categories from '../components/categoriescustomer'
import { useHistory } from 'react-router-dom';

function PLP() {
    const [categories, setCategories] = useState([])
    const [productByCategory, setProductByCategory] = useState([])

    const history = useHistory();
    const id = history.location.pathname.split('/')[3];
    console.log("history", id)

    useEffect(() => {
        loadCategories()
      }, [])
    
    useEffect((id) => {
      loadProductByCategories()
    }, [id])

    function loadCategories() {
        API.getCategories()
          .then(res => {
            setCategories(res.data);
            console.log('loadCategories - res.data: ', res.data);
          }
        )
        .catch(err => console.log(err));
    };

    function loadProductByCategories() {
      API.getProductByCategory(id)
        .then(res => {
          setProductByCategory(res.data);
          console.log('Product by Category: - res.data: ', res.data);
        }
        )
        .catch(err => console.log(err));
    };
    return (
        <>
            <NavCustomer />
            <Categories categories= {categories}/>
            <Container className="productspage minht">
            <Productlist products={productByCategory}/>
            </Container>
            <Footer />
        </>
    );
}


export default PLP;



