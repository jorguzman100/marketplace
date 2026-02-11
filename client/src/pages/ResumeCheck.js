import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import ProductList from '../components/checkoutProducts'
import ProductResume from '../components/checkoutProductsResume'
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'


function PDP() {

  const [localStorageProducts, setlocalStorageProducts] = useState([]);
  let localProducts = [];

  useEffect(() => {
    getLocalStoragePdts();
  }, []);

  const handleDeleteBtn = (e) => {
    let productId = e.target.getAttribute('data-productid');
    localStorage.removeItem(productId);
    getLocalStoragePdts();
  }


  const getLocalStoragePdts = () => {
    // console.log('localStorage.length: ', localStorage.length);
    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(id));
      localProducts.push(product);
      // console.log('productName: ', product.productName);
    }
    console.log('localProducts: ', localProducts);
    setlocalStorageProducts(localProducts);
  }

  return (
    <>
      <NavCustomer />
      <Container fluid className="minht">
        <h2>Review your shopping cart: </h2>
        <ProductList
          localStorageProducts={localStorageProducts}
          handleDeleteBtn={handleDeleteBtn}
        />
        <ProductResume localStorageProducts={localStorageProducts} />
      </Container>
      <Footer />
    </>
  );
}

export default PDP;
