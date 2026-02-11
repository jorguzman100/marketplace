import React, { useState, useEffect, useCallback } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import './CheckoutForm.css'
import API from '../../utils/API';
import { Redirect } from "react-router-dom";

export default function CheckoutForm({ consumer }) {

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const [localProducts, setLocalProducts] = useState([]);
  const [stores, setStores] = useState([]);
  const shipping = 100;

  // -------------------------
  // ORDER FUNCTIONS (MOVED UP)
  // -------------------------

  const saveOrder = useCallback((orderObject) => {
    API.saveOrder(orderObject)
      .then(res => {
        console.log('Order saved - res.data: ', res.data);
        loadOrders();
        setTimeout(() => {
          setConfirmation("Confirmed");
        }, 3000);
      })
      .catch(err => console.log(err));
  }, []);

  const createOrderObject = useCallback((uniqueStoreIDs, totalAmount) => {
    let orderObject = {
      products: localProducts,
      storeID: uniqueStoreIDs,
      customerID: consumer._id,
      orderStatus: 'Payed',
      totalAmount: totalAmount,
      deliveryAddress: consumer.consumerAddress
    };

    console.log('createOrderObject - orderObject: ', orderObject);
    saveOrder(orderObject);

  }, [localProducts, consumer, saveOrder]);




  const getStoresIdsAndTotalAmount = useCallback(() => {
    let totalAmount = 0;
    let storeIDs = [];

    localProducts.forEach((product) => {
      totalAmount +=
        parseFloat(product.quantity || 1) *
        parseFloat(product.price);

      stores.forEach((store) => {
        store.products.forEach((storeProduct) => {
          if (product._id === storeProduct) {
            storeIDs.push(store._id);
          }
        });
      });
    });

    totalAmount += shipping;

    let uniqueStoreIDs = storeIDs.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    createOrderObject(uniqueStoreIDs, totalAmount);

  }, [localProducts, stores, createOrderObject]);

  const getLocalStoragePdts = useCallback(() => {
    const products = [];

    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(id));

      if (typeof product === "object" && product.price) {
        products.push(product);
      }
    }

    setLocalProducts(products);
  }, []);

  const loadStores = useCallback(() => {
    API.getStores()
      .then(res => {
        setStores(res.data);
      })
      .catch(err => console.log(err));
  }, []);


  const loadOrders = () => {
    API.getOrders()
      .then(res => {
        console.log('loadOrders - res.data: ', res.data);
      })
      .catch(err => console.log(err));
  };

  // -------------------------
  // USE EFFECTS
  // -------------------------

  useEffect(() => {
    if (succeeded) {
      getLocalStoragePdts();
    }
  }, [succeeded, getLocalStoragePdts]);

  useEffect(() => {
    if (localProducts.length > 0) {
      loadStores();
    }
  }, [localProducts, loadStores]);

  useEffect(() => {
    if (stores.length > 0) {
      getStoresIdsAndTotalAmount();
    }
  }, [stores, getStoresIdsAndTotalAmount]);

  // -------------------------
  // STRIPE
  // -------------------------

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const items = [];

    for (let i = 0; i < localStorage.length; i++) {
      let id = localStorage.key(i);
      let product = JSON.parse(localStorage.getItem(id));

      if (typeof product === "object" && product.price) {
        items.push({
          price: Number(product.price),
          quantity: Number(product.quantity || 1),
        });
      }
    }

    fetch("/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((err) => console.error("PaymentIntent error:", err));
  }, []);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {},
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <>
      {confirmation === "Confirmed" ?
        <Redirect push to="/home/confirmation" /> :
        ""}

      <div className='root'>
        <div className='body'>
          <form id="payment-form" onSubmit={handleSubmit}>
            <CardElement
              id="card-element"
              options={cardStyle}
              onChange={handleChange}
            />
            <button disabled={processing || disabled || succeeded} id="submit">
              <span id="button-text">
                {processing ? <div className="spinner" id="spinner"></div> : "Confirm your purchase"}
              </span>
            </button>

            {error && (
              <div className="card-error" role="alert">
                {error}
              </div>
            )}

            <p className={succeeded ? "result-message" : "result-message hidden"}>
              Payment succeeded, see the result in your
              <a href={`https://dashboard.stripe.com/test/payments`}>
                {" "}
                Stripe dashboard.
              </a>{" "}
              Refresh the page to pay again.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
