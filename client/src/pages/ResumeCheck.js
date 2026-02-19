import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import ProductList from '../components/checkoutProducts'
import ProductResume from '../components/checkoutProductsResume'
import NavCustomer from '../components/navcustomercheckout'
import Footer from '../components/footercustomercheckout'
import { CHECKOUT_PROGRESS, getCheckoutProgress, setCheckoutProgress } from "../utils/checkoutProgress";


function PDP() {

  const [localStorageProducts, setlocalStorageProducts] = useState([]);

  useEffect(() => {
    getLocalStoragePdts();
  }, []);

  const handleDeleteBtn = (e) => {
    let productId = e.target.getAttribute('data-productid');
    localStorage.removeItem(productId);
    getLocalStoragePdts();
  }


  const getLocalStoragePdts = () => {
    let localProducts = [];

    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);

      let product;
      try {
        product = JSON.parse(localStorage.getItem(id));
      } catch (error) {
        continue;
      }

      if (!product || typeof product !== "object") {
        continue;
      }

      if (typeof product.price === "undefined" || typeof product.quantity === "undefined") {
        continue;
      }

      localProducts.push(product);
    }

    if (localProducts.length > 0 && getCheckoutProgress() === CHECKOUT_PROGRESS.CONFIRMATION) {
      setCheckoutProgress(CHECKOUT_PROGRESS.REVIEW);
    }

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
